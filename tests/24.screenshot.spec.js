const { test, expect } = require('@playwright/test')

test('capture screenshot in playwright',async({page})=>{
    await page .goto('https://www.flipkart.com/')
    await page.screenshot({path: "screenshots/" + "homepage.png"})
})

test('capture screenshot in playwright2',async({page})=>{
    await page .goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path: "screenshots/" + Date.now() + "homepage.png"})
})
test('capture screenshot in playwright3',async({page})=>{
    await page .goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000)
    await page.screenshot({path: "screenshots/" + Date.now() + "homepage.png", fullPage:true})
})

test.only('capture screenshot in playwright4',async({page})=>{
    await page .goto('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000)
    await page.locator('[class="card h-100"]').first().screenshot({path: "screenshots/" + Date.now() + "element.png"})
})