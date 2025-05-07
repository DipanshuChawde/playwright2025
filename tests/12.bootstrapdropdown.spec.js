import { test, expect } from "@playwright/test"

test('verify dropdown in playwright', async ({ page }) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    await page.click('.btn-group')

    //count options
    let options = await page.locator('ul > li >a > label >input')
    await expect(options).toHaveCount(11)

    let options2 = await page.$$('ul > li >a > label >input')
    await expect(options2.length).toBe(11)

    //print options
    let options3 = await page.$$('ul > li >a > label')
    // for (let opn of options3) {
    //     console.log(await opn.textContent())
    // }

    // find presence of option
    let status = false
    for (let opn of options3) {
        let optionName = await opn.textContent()
        if (optionName.includes(' MS SQL Server')) {
            status = true
            break;
        }
    }
    await expect(status).toBeTruthy()


    //print options 
    let option4 = await page.$$('ul > li > a > label.checkbox')
    for (let opn of option4) {
        console.log(await opn.textContent())
    }

    //select single options 
    for (let opn of option4) {
        let opnTxt = await opn.textContent()
        if (opnTxt == " Python") {
            opn.check()
        }
    }

    //select multiple options 
    let optionToSelect = [" Java", " MySQL", " Oracle"]
    for (let opn of option4) {
        let opnTxt = await opn.textContent()
        if (optionToSelect.includes(opnTxt)) {
            await opn.check()
        }
    }
    //check unchecked options
    // for (let opn of option4) {
    //     await opn.check()
    // }

    //check unchecked options---type1
    // for (let opn of option4) {
    //     await opn.uncheck()
    // }

    //uncheck checked options ---type2
    // for (let opn of option4) {
    //     if(await opn.isChecked())
    //     await opn.click()
    // }

    //check unchecked options
    for (let opn of option4) {
        if (!(await opn.isChecked()))
            await opn.click()
    }

    // uncheck all
    for (let opn of option4) {
        if ((await opn.isChecked()))
            await opn.click()
    }
    await page.waitForTimeout(5000)

})

