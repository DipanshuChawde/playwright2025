import { test, expect } from "@playwright/test"

test('verify soft assertions in playwright', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')

    //hard assertions
    // await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // await expect(page).toHaveTitle('nopCommerce demo store. Registerrrrr')

    // await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

    // const searchBox = await page.locator('#small-searchterms')
    // await expect(searchBox).toBeEnabled()

    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect.soft(page).toHaveTitle('nopCommerce demo store. Registerrrr')

    await expect.soft(page.getByAltText('nopCommerce demo store')).toBeVisible()

    const searchBox = await page.locator('#small-searchterms')
    await expect.soft(searchBox).toBeEnabled()
})
