//import {test,expect} from "@playwright/test"

const {test, expect} = require("@playwright/test")

test("verify title and url of page",async({page})=>{
    //AAA
    await page.goto('https://www.demoblaze.com/')

   const pageTitle =  await page.title()

   console.log(`page title ${pageTitle}`)
   console.log(await page.title())
   await expect(page).toHaveTitle('STORE')


   const pageUrl = await page.url()
   console.log(pageUrl)

   await expect(page).toHaveURL('https://www.demoblaze.com/')
})