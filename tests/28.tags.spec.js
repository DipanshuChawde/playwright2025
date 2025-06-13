import { test, expect } from '@playwright/test';

test('test1@sanity', async ({ page }) => {
    console.log('i m in test1')
})
test('test2@reg', async ({ page }) => {
    console.log('i m in test2')
})
test('test3@sanity', async ({ page }) => {
    console.log('i m in test3')
})
test('test4@sanity', async ({ page }) => {
    console.log('i m in test4')
})
test('test5@reg', async ({ page }) => {
    console.log('i m in test5')
})
test('test6@reg@sanity', async ({ page }) => {
    console.log('i m in test6')
})

//npx playwright test tags.spec.js --headed --project chromium --grep "@sanity"
// npx playwright test tags.spec.js --headed --project chromium --grep "@reg" --grep invert "@sanity"