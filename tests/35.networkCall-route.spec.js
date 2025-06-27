const { expect, test } = require('@playwright/test')
const { request } = require('http')
const querystring = require("querystring")
const { json } = require('stream/consumers')

test('handle network call-Get Comment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')
    const mockData = {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "dipanshu@gmail.com",
        "body": "this is my mock reponse new"
    }

    await page.route("**/comments/1", async (route, request) => {
        console.log(`Intercepted url : ${request.url()}`)
        console.log(`Request method : ${request.method()}`)
        await route.fulfill({
            status : 200,
            contentType : "application/json",
            body : JSON.stringify(mockData)
        })
    })

    page.on('response',async(res)=>{
        console.log(`Intercepted url : ${res.url()}`)
        const responseData = await res.json()
        console.log('response data : ',responseData)
        expect(responseData.body).toBe(mockData.body)
        expect(responseData.email).toBe(mockData.email)
    })

    await page.click('text = Get Comment')
    await expect(page.locator('.network-comment')).toContainText(mockData.body)
    await page.waitForTimeout(2000)
})