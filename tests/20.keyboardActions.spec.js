const { test, expect } = require('@playwright/test')


test("verify keyboard actions", async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare')

  await page.fill('[name="text1"]', "this is playwright automation")

  //ctrl + A
  await page.keyboard.press('Control+A')

  //Ctrl + C
  await page.keyboard.press('Control+C')

  //Tab 
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')

  //ctrl + V
  await page.keyboard.press('Control+V')

  await page.waitForTimeout(3000)
})

// press is used when two keys want to press
// down and up is used when single key to press
// Control+key for window
// Meta+key for mac