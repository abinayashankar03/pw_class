import{test,expect, chromium} from '@playwright/test'

test('handle tabs',async({page})=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log(await page1.title())

    await page1.waitForTimeout(3000)

    await page2.goto('https://www.facebook.com/')
    console.log(await page2.title())

    await page2.waitForTimeout(3000)


    

})

test.only('open in the same tab',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log(await page.title())

    await page.waitForTimeout(3000)

    const link=await page.locator('//a[@href="http://www.orangehrm.com"]')
    await link.evaluate(el=>el.removeAttribute('target'))
    await link.click()

    console.log(await page.title())

    await page.waitForTimeout(3000)
})

