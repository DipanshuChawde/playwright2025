import {test, expect} from "@playwright/test"

test("verify title and url of web page",async({page})=>{
    //AAA
    //Arangements, Actions, Assertions
    //Arangements
    await page.goto('https://www.demoblaze.com/')
    
    //action
    const pageTitle= await page.title()

    //Assertions
    await expect(pageTitle).toEqual("STORE")

    await expect(page).toHaveTitle("STORE")

    await expect(page).toHaveURL("https://www.demoblaze.com/")


    
})

//npx playwright test 1.basic.spec.js --headed --project chromium