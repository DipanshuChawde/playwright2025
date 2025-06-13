import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('dipanshu');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('dipanshu@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#logout2')).toContainText('abc');
  await expect(page.locator('#nameofuser')).toContainText('Welcome dipanshu');
});

// playwright.config.js
// trace: "on",
// npx playwright test viewTrace.spec.js --headed --project chromium  
// npx playwright show-trace test-results\viewTrace-test-chromium\trace.zip 