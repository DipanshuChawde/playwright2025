const {test, expect} = require('@playwright/test')

//import {test, expect} from "@playwright/test"

test("verify basic locators in playwright",async({page})=>{
    //AAA
    await page.goto('https://www.demoblaze.com/index.html')

    //type1
    // await page.locator('[id="login2"]').click()
    // await page.locator('[id="loginusername"]').fill('dipanshuChawde')
    // await page.locator('[id="loginpassword"]').fill('dipanshu@123')
    // await page.locator('[onclick="logIn()"]').click()
    // await page.waitForTimeout(3000)
    // const logOutTxt = await page.locator('[id="logout2"]').textContent()

    // await expect(logOutTxt).toBe('Log out')


    //type2

    await page.click('[id="login2"]')

    await page.fill('[id="loginusername"]' , 'dipanshu')
    await page.fill('[id="loginpassword"]' ,'dipanshu@123' )
    await page.waitForTimeout(3000)
    
    await page.click('[onclick="logIn()"]')
   

    await page.waitForTimeout(3000)
    const logOutTxt = await page.locator('[id="logout2"]')

    await expect(logOutTxt).toBeVisible()
    await page.waitForTimeout(3000)

})