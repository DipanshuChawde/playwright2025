const { expect, test } = require('@playwright/test')

test('handle network call-getComment with page.on method', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/network-requests')

    //to handle network call/intercept call
    page.on('request', req => {
        console.log('Get Request-------------')
        console.log(`Method : ${req.method()}`)
        console.log(`URL : ${req.url()}`)
        console.log(`postDta/payload : ${req.postData()}`)
    })

    page.on('response', async res => {
        console.log('Get Response-------------')
        console.log(`status : ${res.status()}`)
        try {
            const contentType = res.headers()['content-type']

            if (contentType && contentType.includes('application/json')) {
                const data = await res.json()
                console.log('Resonse Body JSON : ', data)
            }
            else {
                const data = awaitres.text()
                console.log('Response Body Text : ', data)
            }
        }
        catch (err) {
            console.log('Error found', err)
        }
    })

    await page.click('text=Get Comment')
    await expect(page.locator('.network-comment')).toContainText('laudantium enim quasi')

})