const { test, expect } = require('@playwright/test')

test('verify table in playwright', async ({ page }) => {

    // js functions for datepicker

    let todaysDate = new Date()
    console.log(`todays date is ${todaysDate}`)



    let tDate = todaysDate.getDate()
    console.log(`todays date is ${tDate}`)

    let tMonth = todaysDate.getMonth()
    console.log(`todays month number is ${tMonth + 1}`) //print index wise starts with 0

    let monthShort = todaysDate.toLocaleDateString('default', { month: 'short' })
    console.log(`todays month short is ${monthShort}`)

    let monthLong = todaysDate.toLocaleDateString('default', { month: 'long' })
    console.log(`todays month long is ${monthLong}`)

    let tYear = todaysDate.getFullYear()
    console.log(`todays year is ${tYear}`)

    //find future date
    console.log('future dates are')
    let futureDate = new Date()
    console.log(`todays date is ${todaysDate}`)


    let fDate1 = futureDate.setDate(futureDate.getDate() + 90)
    console.log(fDate1)
    let Datef = futureDate.getDate()
    console.log(`todays date is ${Datef}`)

    let fMonth = futureDate.getMonth()
    console.log(`todays month number is ${fMonth + 1}`) //print index wise starts with 0

    let fmonthShort = futureDate.toLocaleDateString('default', { month: 'short' })
    console.log(`todays month short is ${fmonthShort}`)

    let fmonthLong = futureDate.toLocaleDateString('default', { month: 'long' })
    console.log(`todays month long is ${fmonthLong}`)

    let fYear = futureDate.getFullYear()
    console.log(`todays year is ${fYear}`)

    //slecting dates from web page

    await page.goto('https://testautomationpractice.blogspot.com/')

    //type1 -----------
    //await page.fill('#datepicker','06/25/2025')

    //type2-----------Datef,fmonthLong,fYear

    await page.locator('#datepicker').click()

    while (true) {
        let currentMonth = await page.locator('.ui-datepicker-month').textContent()
        let currentYear = await page.locator('.ui-datepicker-year').textContent()

        if (currentMonth == fmonthLong && currentYear == fYear) {
            break;
        }

        await page.locator('[data-handler="next"]').click()
    }

    //select date type 1
    //await page.locator(`[data-date="${Datef}"]`).click()

    //select date type 2 with loop
    let dates = await page.$$('[data-handler="selectDay"] a')
    for(let dt of dates){
        if(await dt.textContent()==Datef){
           await dt.click()
           break;
        }
    }


    await page.waitForTimeout(5000)

})