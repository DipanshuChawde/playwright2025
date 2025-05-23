const { test, expect } = require('@playwright/test')
// mouse clicks dbclick, right click
// mouse click and hold 
// mouse drag and drop 
// mouse over

test('mouse click actions', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')

    //dbclick

    //await page.locator('#doubleClickBtn').dblclick()
    await page.dblclick('#doubleClickBtn')

    let dbclickMsg = await page.locator('#doubleClickMessage').textContent()
    await expect(dbclickMsg).toBe('You have done a double click')

    await page.waitForTimeout(5000)

    //rightclick

    await page.locator('#rightClickBtn').click({ button: 'right' })

    let rightclickMsg = await page.locator('#rightClickMessage').textContent()
    await expect(rightclickMsg).toBe('You have done a right click')

    await page.waitForTimeout(5000)
})

test('mouse hover actions', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')

    //await page.locator('.dropbtn').first().hover()
    await page.getByText('Hover Over Me First!').hover()

    expect(await page.getByText('Link 1').nth(0)).toBeVisible()

    //await page.locator('.dropbtn').nth(1).hover()
    await page.getByText('Hover Over Me Second!').hover()

    expect(await page.getByText('Link 1').nth(1)).toBeVisible()

    //await page.locator('.dropbtn').nth(2).hover()
    await page.getByText('Hover Over Me Third!').hover()

    expect(await page.getByText('Link 1').nth(2)).toBeVisible()
    expect(await page.getByText('Link 1').nth(3)).toBeVisible()

    await page.waitForTimeout(5000)
})

test.only('mouse drag and drop actions', async ({ page }) => {
    //example 1 
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')

    let takeMe = await page.locator('#draggable')
    let dropHere = await page.locator('#droppable')

    await takeMe.dragTo(dropHere)

    let dropedMsg = await page.locator('#droppable p ').textContent()
    await expect(dropedMsg).toBe('Dropped!')
    await page.waitForTimeout(5000)

    //example 2
   // http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
})


