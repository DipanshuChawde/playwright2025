import { expect, test } from "@playwright/test";

test("verify autosuggestive dropdown",async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('nag')
    await page.waitForSelector('ul > li.sc-iwsKbI >div >text.placeHolderMainText')

    let fromOptions = await page.$$('ul > li.sc-iwsKbI >div >text.placeHolderMainText')

    for(let opn of fromOptions){
        //console.log(await opn.textContent())
       let opnText = await opn.textContent()
        if(opnText=='Chatrapathi'){
            await opn.click()
            break;
        }

    }

    await page.waitForTimeout(3000)
})