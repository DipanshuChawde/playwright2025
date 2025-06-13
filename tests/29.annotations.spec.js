// test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
// test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
// test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
// test.slow() marks the test as slow and triples the test timeout.

import { expect, test } from "@playwright/test"

test.skip('skip this test', async ({ page }) => {
    // This test is not run
    console.log("skip this test")
});

test('skip this test 2', async ({ page, browserName }) => {
    test.slow()
    console.log("skip this test 2-before")
    // if(browserName === 'firefox'){
    //     test.skip()
    // }
    test.skip(browserName === 'chromium', "not suitable for chromium")
    console.log("skip this test 2 - after")
})

//fixme()

test('fixme test case', async ({ page, browserName }) => {
    console.log('fix me -before')
    if (browserName === 'firefox') {
        test.fixme()
    }
    console.log('fix me -after')
})

//fail()

test('fail test case', async ({ page }) => {
    console.log('fail test cast before')
    test.fail() //expected        fail
    expect(1).toBe(4) //actual    fail
    //matched =result pass
})

// test('fail test case', async ({ page }) => {
//     console.log('fail test cast before')
//     test.fail() //expected        fail
//     expect(1).toBe(1) //actual    pass
//     //mismatched =result fail
// })

test('slow test case',async({page})=>{
    test.slow() 
    await page.goto('https://testautomationpractice.blogspot.com/')
})