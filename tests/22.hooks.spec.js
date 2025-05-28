const {test, expect} = require('@playwright/test')

// Playwright Hooks

// beforeEach: This hook is executed before each individual test.
// afterEach: This hook is executed after each individual test.

// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all the tests have been run.
//need to set fullyParallel: false, in config.js

//hooks------------
let page
test.beforeAll(async({browser})=>{
    await console.log('i am in before all')
    page= await browser.newPage();
})

test.afterAll(async()=>{
    await console.log('i am in after all')
})

test.beforeEach(async()=>{
    await console.log('i am in before each')
})

test.afterEach(async()=>{
    await console.log('i am in after each')
})


//testcases--------
test('testcase1',async()=>{
    console.log('i am in testcase1')
})
test('testcase2',async()=>{
    console.log('i am in testcase2')
})
test('testcase3',async()=>{
    console.log('i am in testcase3')
})