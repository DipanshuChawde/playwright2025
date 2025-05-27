const { test, expect } = require('@playwright/test')


test("verify single file upload in playwright", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const file1 = "C:/Users/tanis/Downloads/myfiletoUpload.docx"

    await page.locator('#singleFileInput').setInputFiles(file1)
    await page.getByText('Upload Single File').click()
    await page.waitForTimeout(3000)
    let singleFileTxt = await page.locator('#singleFileStatus').textContent()
    await expect(singleFileTxt).toContain('myfiletoUpload.docx')
    await page.waitForTimeout(5000)
})

test.only("verify file upload in playwright", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const file1 = "C:/Users/tanis/Downloads/myfiletoUpload.docx"
    const file2 = "filesToUpload/Steps to Execute the Collection in Postman.docx"
    await page.locator('#multipleFilesInput').setInputFiles([file1,file2])
    await page.getByText('Upload Multiple Files').click()
    await page.waitForTimeout(3000)
    let multipleFileTxt = await page.locator('#multipleFilesStatus').textContent()
    await expect(multipleFileTxt).toContain('myfiletoUpload.docx')
    await expect(multipleFileTxt).toContain('Postman.docx')
    await page.waitForTimeout(5000)

})