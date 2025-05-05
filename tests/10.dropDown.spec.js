import { test, expect } from "@playwright/test"

test('verify dropdown in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //single select dropdown

    await page.locator('#country').selectOption('Germany')
    await page.waitForTimeout(1000)

    await page.locator('#country').selectOption({ label: 'United Kingdom' })
    await page.waitForTimeout(1000)

    await page.locator('#country').selectOption({ index: 4 }) //starts with 0
    await page.waitForTimeout(1000)

    await page.selectOption('#country', 'India')
    await page.waitForTimeout(1000)

    //assertions

    //type1
    const options = await page.locator('#country option') //give all locators of options 
    await expect(options).toHaveCount(10)

    //type1
    const options2 = await page.$$('#country option') ////give all locators of options in array format
    await expect(options2.length).toBe(10)

    //check text is available in dropdown
    const contents = await page.locator('#country').textContent()
    console.log(contents)
    expect(contents.includes('Australia')).toBeTruthy()

    expect(contents.includes('Australiaaaa')).not.toBeTruthy()

    //check text is available in dropdown with looping

    const options3 = await page.$$('#country option') //give all locators of options in array format
    let status= false
    await page.waitForTimeout(3000)
    for(let option of options3){

        let optionText =await option.textContent()

        if(optionText.includes('China')){
            status=true
            console.log(`option text is ---- ${optionText}`)
            await page.selectOption('#country', optionText.trim())
            break;
        }
    }

    // const options3 = await page.$$('#country option')
    // let status = false 
    // for (let option of options3) {
    //     //console.log('option name',await option.textContent())
    //     let val = await option.textContent()
        
    //     if (val.includes('Japan')) {
    //        status = true
    //        console.log(`val is ${val} option`)
    //         await page.selectOption('#country', { label: val.trim() })
    //        //await page.selectOption('#country', val.trim())
    //         console.log('i am in if block',val)
    //        break;
    //     }
    // }








    // await page.waitForTimeout(3000)






})