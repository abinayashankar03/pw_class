import {test,expect} from '@playwright/test'

test("page_navigation",async({page})=>{

    await page.setViewportSize({width:360 , height:768})

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log(await page.title())

    await page.waitForTimeout(3000)

    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(await page.title())

    await page.waitForTimeout(3000)

    await page.goBack()

    await page.waitForTimeout(3000)

    await page.goForward()

    await page.waitForTimeout(3000)
    
})