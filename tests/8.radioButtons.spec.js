import { test, expect } from "@playwright/test"

test('verify radio buttons in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('#name', 'dipanshu')
    //await page.locator('#name').fill('dipanshu)

    await page.fill('#email', 'dipanshu@gmail.com')
    await page.fill('#phone', '9922447802')
    await page.fill('#textarea', 'hi')

    //radio buttons
    let male = await page.locator('#male')
    await expect(male).not.toBeChecked()
    await male.check()
    await expect(male).toBeChecked()
    await expect(male.isChecked()).toBeTruthy()

    expect(await page.locator('//*[@id="female"]').isChecked()).toBeFalsy()

    await page.waitForTimeout(3000)

})