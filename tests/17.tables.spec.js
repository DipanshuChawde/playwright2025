const { test, expect } = require('@playwright/test')

test('verify table in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //rows and column of table
    const columns = await table.locator('thead tr th')
    console.log(`total no of column = ${await columns.count()}`)

    const rows = await table.locator('tbody tr')
    console.log(`total no of row = ${await rows.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //select any one product
    let matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })
    await matchedRow.locator('input').click()
    await page.waitForTimeout(5000)
})

test('select any one product from table using function', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //rows and column of table
    const columns = await table.locator('thead tr th')
    console.log(`total no of column = ${await columns.count()}`)

    const rows = await table.locator('tbody tr')
    console.log(`total no of row = ${await rows.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //select any one product using function
    async function selectProduct(rows, page, product) {
        let matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: product
        })
        matchedRow.locator('input').click()
    }
    await selectProduct(rows, page, 'Smartwatch')
    await page.waitForTimeout(5000)
    await selectProduct(rows, page, 'Wireless Earbuds')
    await page.waitForTimeout(5000)
})

test('To print all product from table using loop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //rows and column of table
    const columns = await table.locator('thead tr th')
    console.log(`total no of column = ${await columns.count()}`)

    const rows = await table.locator('tbody tr')
    console.log(`total no of row = ${await rows.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //print data of all column of one page
    // for(let i=0; i< await rows.count(); i++ ){
    //     const currentRow = rows.nth(i)
    //     const tdInRow = await currentRow.locator('td')
    //     for(let j =0;j < await tdInRow.count()-1; j++){
    //         console.log(await tdInRow.nth(j).textContent())
    //     }
    // }
    //print data of all column of all pages

    const pages = await page.locator('#pagination li a')

    mainLoop: for (let pg = 0; pg < await pages.count(); pg++) {
        if (pg > 0) {
            await pages.nth(pg).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const currentRow = rows.nth(i)
            const tdInRow = await currentRow.locator('td')
            for (let j = 0; j < await tdInRow.count() - 1; j++) {
                //console.log(await tdInRow.nth(j).textContent())
                let tdData = await tdInRow.nth(j).textContent()
                if (tdData == 'Action Camera') {
                    currentRow.locator('input').click()
                    await page.waitForTimeout(2000)
                    break mainLoop;
                }
            }
        }
    }
    await page.waitForTimeout(5000)
})

test.only('To print all product from table using function', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //rows and column of table
    const columns = await table.locator('thead tr th')
    console.log(`total no of column = ${await columns.count()}`)

    const rows = await table.locator('tbody tr')
    console.log(`total no of row = ${await rows.count()}`)

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    const pages = await page.locator('#pagination li a')

    async function selectProduct(products) {
        for (let el of products) {
            mainLoop: for (let pg = 0; pg < await pages.count(); pg++) {
                if (pg > 0) {
                    await pages.nth(pg).click()
                }
                for (let i = 0; i < await rows.count(); i++) {
                    const currentRow = rows.nth(i)
                    const tdInRow = await currentRow.locator('td')
                    for (let j = 0; j < await tdInRow.count() - 1; j++) {
                        //console.log(await tdInRow.nth(j).textContent())
                        let tdData = await tdInRow.nth(j).textContent()
                        if (tdData == el) {
                            currentRow.locator('input').click()
                            await page.waitForTimeout(2000)
                            break mainLoop;
                        }
                    }
                }
            }
        }
    }

    await selectProduct(['Laptop', 'Television', 'Streaming Device'])
    await page.waitForTimeout(5000)
})

