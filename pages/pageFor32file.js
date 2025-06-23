import { expect } from "@playwright/test";

exports.myClass = class myClass {
    constructor(page) {
        this.page = page,
        this.homePage = 'li [href="index.html"]'
        this.url = 'https://www.demoblaze.com/'
        this.loginCss = '#login2',
        this.usernmCss = '#loginusername',
        this.pwCss = '#loginpassword',
        this.loginBtn = '[onclick="logIn()"]',
        this.logoutVisible = '#logout2',
        this.userNameCss = '#nameofuser'

        //catogeries
        this.phoneBtn = `[onclick="byCat('phone')"]`,
        this.monitorBtn = `[onclick="byCat('monitor')"]`,
        this.laptopBtn = `[onclick="byCat('notebook')"]`,
        //cart
        this.cartBtn = '#cartur',
        //place order
        this.placeOrderBtn = 'button[data-target="#orderModal"]',
        //place order form
        this.name = '#name',
        this.country = '#country',
        this.city = '#city',
        this.creditCardNo = "#card",
        this.month = '#month',
        this.year = '#year',
        this.purchaseBtn = '[onclick="purchaseOrder()"]',
        this.okBtn = 'OK'
    }


    async visitUrl() {
        await this.page.goto(this.url)
    }

    async login(un, pw) {
        await this.page.click(this.loginCss)
        await this.page.fill(this.usernmCss, un)
        await this.page.fill(this.pwCss, pw)
        await this.page.click(this.loginBtn)
        await expect(this.page.locator(this.logoutVisible)).toBeVisible()
        await expect(this.page.locator(this.userNameCss)).toContainText(un)

    }

    async addToCart(productName, productList) {
        console.log(productName)
        console.log(productList)
        for (let product of productList) {
            await this.page.locator(this.homePage).click()
            await this.page.waitForLoadState('load')
            if (productName == 'phone') {
                await this.page.locator(this.phoneBtn).click()
                await this.page.waitForLoadState('load')
                await this.page.waitForTimeout(2000)
            }
            else if (productName == 'monitor') {
                await this.page.locator(this.monitorBtn).click()
                await this.page.waitForLoadState('load')
                await this.page.waitForTimeout(3000)
            }
            else if (productName == 'laptop') {
                await this.page.locator(this.laptopBtn).click()
                await this.page.waitForLoadState('load')
                await this.page.waitForTimeout(2000)
            }

        await this.page.getByRole('link', { name: product }).click()
        await this.page.getByText('Add to cart').click()
        await this.page.waitForTimeout(3000)

        }
        await this.page.waitForTimeout(3000)
    }

    async placeOrder(ud){
        await this.page.locator(this.homePage).click()
        await this.page.locator(this.cartBtn).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.placeOrderBtn).click()
        await this.page.locator(this.name).fill(ud.name)
        await this.page.locator(this.country).fill(ud.country)
        await this.page.locator(this.city).fill(ud.city)
        await this.page.locator(this.creditCardNo).fill(ud.creditcard)
        await this.page.locator(this.month).fill(ud.month)
        await this.page.locator(this.year).fill(ud.year)
        await this.page.locator(this.purchaseBtn).click()
        await this.page.getByText(this.okBtn).click()
        await this.page.waitForTimeout(2000)




    }

    async emptyCart() {

    }

    async logout() {
        await this.page.locator(this.logoutVisible).click()

    }

    async signInNewUser() {

    }

}

