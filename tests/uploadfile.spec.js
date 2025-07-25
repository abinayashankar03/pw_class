import{test,expect} from '@playwright/test'

test("single_upload",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("tests/screenshot/firstss.png")
    await page.click('(//button[@type="submit"])[1]')
    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText('Single file selected: firstss.png')

    await page.pause()
})


test.only("multiple_upload",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["tests/screenshot/fullpage.png","tests/screenshot/table.png"])
    await page.locator('(//button[@type="submit"])[2]').click()

    await page.pause()
})