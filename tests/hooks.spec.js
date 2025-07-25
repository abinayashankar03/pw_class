import{test,expect} from '@playwright/test'

test.beforeAll("started",()=>{
    console.log("test started succesfully")
})

test.beforeEach("visiting the url",async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
})

test("login 1",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill('standard_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.click('//input[@id="login-button"]')
})

test("login 2",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill('problem_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.click('//input[@id="login-button"]')
})

test("login 3",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill('performance_glitch_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.click('//input[@id="login-button"]')
})

test.afterEach("logout",async({page})=>{
    await page.click('//button[text()="Open Menu"]')
    await page.click('//a[@id="logout_sidebar_link"]')
})

test.afterAll("test completed",()=>{
    console.log('test successfully completed')
})