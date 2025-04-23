const { test, expect } = require('@playwright/test')

test("verify multiple locators in playwright", async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')

    const links = await page.$$('//a')
    for (let el of links) {
        let linkText = await el.textContent()
        console.log(linkText.trim())

    }

    await page.waitForSelector('#tbodyid > div > div > div > h4 > a')

    const products = await page.$$('#tbodyid > div > div > div > h4 > a')
    let count = await page.locator('#tbodyid > div > div > div > h4 > a').count()
    console.log(`product count ${count}`)

    for(let product of products){
        let productName  =product.textContent()
        console.log(`product name is : ${productName}`)
    }

    await page.waitForTimeout(3000)
})
