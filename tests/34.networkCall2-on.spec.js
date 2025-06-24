const { expect, test } = require('@playwright/test')

test('handle network call-Get Comment with page.on method', async ({ page }) => {
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

test.skip('handle network call-Create Comment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')
})

test.skip('handle network call-Update Comment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')
})