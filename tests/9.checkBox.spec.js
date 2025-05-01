import { test, expect } from "@playwright/test"

test('verify check box in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //     await page.locator('#sunday').click()
    //     await page.waitForTimeout(3000)
    //     await page.locator('#sunday').click()
    //     await page.waitForTimeout(3000)

    await page.locator('#sunday').check()
    await page.waitForTimeout(3000)
    await page.locator('#sunday').uncheck()
    await page.waitForTimeout(3000)


    //check multiple check box
    const checkBoxes = [
        '#sunday',
        '#monday',
        '#tuesday',
        '#wednesday',
        '#thursday',
        '[id="friday"]',
        '//*[@id="saturday"]'
    ]

    for (let cb of checkBoxes) {
        await page.check(cb)
    }
    await page.waitForTimeout(3000)

    for(let cb of checkBoxes){
        if(await page.locator(cb).isChecked()){
            await page.uncheck(cb)
        }
    }
    await page.waitForTimeout(3000)
})
