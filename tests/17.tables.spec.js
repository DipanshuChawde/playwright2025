const { test, expect } = require('@playwright/test')

test('verify table in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //rows and column of table
    const columns = await table.locator('thead tr th')
    console.log(`total no of column = ${await columns.count()}`)

    const rows = await table.locator('tbody tr')
    console.log(`total no of row = ${await rows.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //select any one product
    let matchedRow = rows.filter({
        has : page.locator('td'),
        hasText : 'Tablet'
    })
    await matchedRow.locator('input').click()

    await page.waitForTimeout(5000)



})