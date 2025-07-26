import {test,expect} from '@playwright/test'
import login from "./JSON/login.json"


test.only("orangehrm login by using Xpath",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('//input[@name="username"]').fill(login.username)
    await page.locator('//input[@name="password"]').fill(login.password)
    await page.locator('//button[text()=" Login "]').click()

    await page.waitForTimeout(5000)
})