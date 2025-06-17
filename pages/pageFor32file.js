import { expect } from "@playwright/test";

exports.myClass = class myClass {
    constructor(page){
        this.page= page,
        this.url='https://www.demoblaze.com/'
        this.loginCss='#login2',
        this.usernmCss='#loginusername',
        this.pwCss='#loginpassword',
        this.loginBtn='[onclick="logIn()"]',

        this.logoutVisible='#logout2',
        this.userNameCss = '#nameofuser'
    }


async visitUrl(){
    await this.page.goto(this.url)
}

async login(un,pw){
    await this.page.click(this.loginCss)
    await this.page.fill(this.userNameCss,un)
    await this.page.fill(this.pwCss,pw)
    await this.page.click(this.loginBtn)
    await expect(this.page.locator(this.logoutVisible)).toBeVisible()
    await expect(this.page.locator(this.userNameCss)).toContain(un)
}    
}

   