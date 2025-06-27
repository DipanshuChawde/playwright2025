const { expect, test } = require('@playwright/test')
const querystring = require("querystring")

test.skip('handle network call-Get Comment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')

    //network call
    page.on("request", req => {
        console.log('This is Get Comment Request-----------')
        console.log(`methos : ${req.method()}`)
        console.log(`Url : ${req.url()}`)
        console.log(`Data : ${req.postData()}`)
    })

    page.on("response", async res => {
        console.log('This is Get Comment Response-----------')
        console.log(`Url : ${res.url()}`)
        const data = await res.json()
        console.log('response data : ', data)

    })

    await page.click('text = Get Comment')
    await expect(page.locator('.network-comment')).toContainText('laudantium enim quasi est')
})

test('handle network call-Create Comment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')

    page.on('request', async req=>{
        console.log("Post Comment Request--------------------")
        console.log(`Method : ${await req.method()}`)
        console.log(`URl : ${await req.url()}`)
        const rawData = req.postData()
        const jsonData= querystring.parse(rawData)
        console.log('Request Data : ',jsonData)

    })

    page.on('response',async res=>{
        console.log("Post Comment Response--------------------")
        console.log(`Status code : ${await res.status()}`)
        console.log(`Status Text : ${await res.statusText()}`)
        const rData =await res.json()
        console.log("Response data : ",rData)
    })

    await page.click("text=Post Comment")

    await expect(page.locator('.network-post-comment')).toHaveText('POST successful!')

})

test('handle network call-Update Comment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')

    page.on('request', async req=>{
        console.log("Update Comment Request--------------------")
        console.log(`Method : ${await req.method()}`)
        console.log(`URl : ${await req.url()}`)
        const rawData = req.postData()
        const jsonData= querystring.parse(rawData)
        console.log('Request Data : ',jsonData)

    })

     page.on('response',async res=>{
        console.log("Update Comment Response--------------------")
        console.log(`Status code : ${await res.status()}`)
        console.log(`Status Text : ${await res.statusText()}`)
        const rData =await res.json()
        console.log("Response data : ",rData)
    })

    await page.click("text=Update Comment")
   
})