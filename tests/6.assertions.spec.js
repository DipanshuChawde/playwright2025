// expect (page).toHaveURL()
// expect(page).toHaveTitle()
// expect(locator). toBeVisible()
// expect(locator).toBeEnabled()
//expect(locator).not.toBeEnabled()
// expect (locator). toBeDisabled()
// expect(locator).toBeChecked()
// expect(locator).toHaveAttribute()
// expect(locator).toHaveText ()
// expect(locator).toContainText()
// expect(locator).toHaveValue(value)
// expect(locator). toHaveCount ()

import {test, expect} from "@playwright/test"

test('verify assertions in playwright',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')

    //toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //toBeVisible()
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

    //toBeEnabled()
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    const compLink = await page.getByRole('link' , {name : 'Computers '})
    await expect(compLink).toBeEnabled()

    //toBeChecked()
    const radioMale = await page.locator('#gender-male')
    await expect(radioMale).not.toBeChecked() 

    await radioMale.click()
    await expect(radioMale).toBeChecked()

    //toHaveAttribute()
    const registerBtn = await page.locator('#register-button')
    await expect(registerBtn).toHaveAttribute('type', 'submit')

    //toHaveText()
    const text = await page.locator('strong').first()

    await expect(text).toHaveText('Your Personal Details')

    //toContainText()
    
    await expect(text).toContainText('Your Personal')

    //toHaveValue(value)
    await page.fill('#FirstName', 'dipanshu')
    const namInput = await page.locator('#FirstName')
    await expect(namInput).toHaveValue('dipanshu')

    //toHaveCount ()
    await expect(page.locator('strong')).toHaveCount(9)


    await page.waitForTimeout(3000)


 


})


