import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"tests/screenshot/"+"firstss.png"})
    await page.screenshot({path:"tests/screenshot/"+"fullpage.png",fullPage:true})
    await page.locator('//div[@id="HTML1"]').screenshot({path:"tests/screenshot/"+"table.png"})
})