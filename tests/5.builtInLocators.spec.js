// Built-in locators.
// -------------------

// page.getByRole() to locate by explicit and implicit accessibility attributes. 

// page.getByText() to locate by text content.

// page.getByLabel() to locate a form control by associated label's text.

// page.getByPlaceholder() to locate an input by placeholder.

// page.getByAltText() to locate an element, usually image, by its text alternative.

// page.getByTitle() to locate an element by its title attribute.

// page.getByTestId() to locate an element based on its data-testid attribute.

import {test,expect} from "@playwright/test"

test("verify built in locators in playwright",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {type : "submit"} ).click()

    await expect(page.getByTitle('Help')).toBeVisible()

    
    await expect(page.getByText('Quick Launch')).toBeVisible()

    await page.waitForTimeout(3000)

})

test("verify built in locators in playwright get by title",async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByTitle('Switch between dark and light mode (currently dark mode)').click()

    await page.waitForTimeout(3000)

})

test("verify built in locators in playwright get by label",async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByLabel('Search (Ctrl+K)').click()

    await page.waitForTimeout(3000)

})
