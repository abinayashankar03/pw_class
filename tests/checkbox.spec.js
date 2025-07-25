import {test,expect} from '@playwright/test'

test("radio_button",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="male"]').check()
    await expect(page.locator('//input[@id="male"]')).toBeChecked()
    await expect(page.locator('//input[@id="female"]')).not.toBeChecked()

    await page.pause()
})

test.only("single select checkbox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="monday"]').check()
    await expect(page.locator('//input[@id="monday"]')).toBeChecked()

    //await page.locator('//input[@id="monday"]').uncheck()

    await page.pause()
})

test("multi select checkbox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const locator=['//input[@id="sunday"]','//input[@id="tuesday"]','//input[@id="friday"]']

    for(let select of locator){

        await page.locator(select).check()
        await expect(page.locator(select)).toBeChecked()
        
    }

    await page.pause()
})

