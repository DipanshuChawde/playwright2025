const { test, expect } = require("@playwright/test")

test("Test case 1", async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = await page.title()
    await expect(page).toHaveTitle('STORE')
    const pageUrl = await page.url()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})
test("Test case 2", async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = await page.title()
    await expect(page).toHaveTitle('STORE')
    const pageUrl = await page.url()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})
test("Test case 3", async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = await page.title()
    await expect(page).toHaveTitle('STORE')
    const pageUrl = await page.url()
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})

//defaulet reporters HTML, line,dot,json, junit (for json and junit file is created if i do setting in config file)
//https://playwright.dev/docs/test-reporters
//if we want multiple reporters  do folloeing setting in config.js
// reporter: [ [
//             ['html'],
//             ['junit', { outputFile: 'results.xml' }],
//             ['json', { outputFile: 'results.json' }],
//             ['allure-playwright', { outputFolder: 'my-allure-results' }]
//           ],

//for allure reports

// Allure Reports for Playwright

// 1) Installation of "allure-playwright" module
//                 npm i -D @playwright/test allure-playwright

// 2) Installing Allure command line
// Ref: https://www.npmjs.com/package/allure-commandline
//                 npm install -g allure-commandline -- save-dev
// (or)
//                 sudo npm install -g allure-commandline -- save-dev

// 3) playwright.config.js
//                 reporter= ['allure-playwright', {outputFolder: 'my-allure-results'}]
// (or)
//                 npx playwright test -- reporter=allure-playwright

// 4) Run the tests
//                 npx playwright test 41.reporters-default.spec.js

// 5) Generate Allure Report: (this will not run if java is not installed properly)
//                 allure generate my-allure-results -o allure-report --clean

// 6) Open Allure Report:
//                 allure open allure-report