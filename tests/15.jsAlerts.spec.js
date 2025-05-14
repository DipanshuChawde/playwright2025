import { test, expect } from '@playwright/test'
test.skip('verify simple js alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.locator('#alertBtn').click()

    await page.waitForTimeout(3000)
})

test.skip('verify confirm js alert for ok', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()
    })

    await page.locator('#confirmBtn').click()
    await expect(page.locator('[id="demo"]')).toHaveText('You pressed OK!')
    await page.waitForTimeout(3000)
})

test.skip('verify confirm js confirm alert for cancle', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()
    })

    await page.locator('#confirmBtn').click()
    await expect(page.locator('[id="demo"]')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(3000)
})

test.skip('verify confirm js prompt alert for ok', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('dipanshu')
        await page.waitForTimeout(5000)
    })

    await page.locator('#promptBtn').click()
    await expect(page.locator('[id="demo"]')).toHaveText('Hello dipanshu! How are you today?')
    await page.waitForTimeout(5000)
})

test('verify confirm js prompt alert for cancle', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.dismiss()
        await page.waitForTimeout(5000)
    })

    await page.locator('#promptBtn').click()
    await expect(page.locator('[id="demo"]')).toHaveText('User cancelled the prompt.')
    await page.waitForTimeout(5000)
})