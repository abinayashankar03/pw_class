import{test,expect} from '@playwright/test'
// const {test,expect} = require ('@playwright/test')

// test("orangehrm login using CSS",async({page})=>{

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('[name="username"]').fill("Admin")
//     await page.locator('[type="password"]').fill('admin123')
//     await page.locator('[type="submit"]').click()
// })

// test("Orangehrm login using builtin locators",async({page})=>{

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await expect(page.getByAltText("company-branding")).toBeVisible()

//     await page.getByPlaceholder("Username").fill("Admin")
//     await page.getByPlaceholder('Password').fill("admin123")
//     await page.getByRole('button'," Login ").click()

// })

test("orangehrm login by using Xpath",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[text()=" Login "]').click()

    await page.waitForTimeout(5000)
})

