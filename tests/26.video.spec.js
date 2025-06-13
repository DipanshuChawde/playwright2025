import {test,expect} from "@playwright/test"

test('capturing screenshot and videos on failure',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    
    await page.click('[id="login2"]')

    await page.locator('#loginusername').fill('dipanshu')
    await page.locator('#loginpassword').fill('dipanshu@123')
    await page.click('[onclick="logIn()"]')

    const logOutLink = await page.locator('[id="logout2"]')
    await expect(logOutLink).toBeVisible()
    await page.waitForTimeout(3000)
})
//https://playwright.dev/docs/videos

// for default video and screenshot
//     screenshot : 'on',
//     video: 'on'

//for on failure
    // screenshot : 'only-on-failure',
    // video: 'retain-on-failure'