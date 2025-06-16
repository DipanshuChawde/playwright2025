import { expect, test } from "@playwright/test";

import data from "../payload/dataFor31File.json"

data.forEach((el, index) => {
    test(`verify payload in playwright for user ${index + 1}`, async ({ page }) => {
        // console.log(data)  data [0].username ,el.username
        await page.goto('https://www.demoblaze.com/index.html')
        await page.click('#login2')
        await page.fill('#loginusername', el.username)
        await page.fill('#loginpassword', el.password)
        await page.click('[onclick="logIn()"]')
      
        await expect(page.locator('#logout2')).toBeVisible()
        await expect(page.locator('#nameofuser')).toContainText(el.username)
        await page.waitForTimeout(2000)

    })
})