import {test, expect,chromium} from "@playwright/test"

test("launch browser with multiple pages",async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

   const totalPages= context.pages()
   console.log(`no of pages are ${totalPages.length}`)

   await page1.goto('https://demo.nopcommerce.com/register')
   await expect(page1).toHaveTitle('nopCommerce demo store. Register')

   await page2.goto('https://www.youtube.com/user/nopCommerce')
   await expect(page2).toHaveTitle('nopCommerce - YouTube')

   await page1.waitForTimeout(2000)
   await page2.waitForTimeout(2000)
})

test.only("handle multiple tabs in playwright",async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    
   const totalPages= context.pages()
   console.log(`no of pages are ${totalPages.length}`)

   await page1.goto('https://demo.nopcommerce.com/register')
   await expect(page1).toHaveTitle('nopCommerce demo store. Register')

   const pagePromise = context.waitForEvent('page')

   await page1.locator('.youtube a').click()

   const newPage = await pagePromise

   await expect(newPage).toHaveTitle('nopCommerce - YouTube')

   await page1.waitForTimeout(2000)
   await newPage.waitForTimeout(2000)
 
})
