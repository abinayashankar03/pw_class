import{test,expect} from '@playwright/test'

test.only("buildin assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect(page.locator('(//a[text()="Home"])[1]')).toBeVisible()
    await expect(page.locator('//a[text()="GUI Elements"]')).toHaveText("GUI Elements")
    await expect(page.locator('//a[text()="GUI Elements"]')).toContainText("GUI Elem")
    await expect(page.locator('//input[@id="name"]')).toBeEmpty()
    await page.fill('//input[@id="name"]',"Playwright")
    await expect(page.locator('//input[@id="name"]')).toHaveValue("Playwright")
    await expect(page.locator('//input[@id="name"]')).not.toBeEmpty()

    await page.waitForTimeout(3000)
})

