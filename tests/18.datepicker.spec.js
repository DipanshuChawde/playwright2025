const { test, expect } = require('@playwright/test')

test('verify table in playwright', async ({ page }) => {

// js functions for datepicker

let todaysDate = new Date()
console.log(`todays date is ${todaysDate}`)

let tDate = todaysDate.getDate()
console.log(`todays date is ${tDate}`)

let tMonth = todaysDate.getMonth()
console.log(`todays month number is ${tMonth+1}`) //print index wise starts with 0

let monthShort = todaysDate.toLocaleDateString('default',{month : 'short'})
console.log(`todays month short is ${monthShort}`)

let monthLong = todaysDate.toLocaleDateString('default',{month : 'long'})
console.log(`todays month long is ${monthLong}`)

let tYear = todaysDate.getFullYear()
console.log(`todays year is ${tYear}`)
})