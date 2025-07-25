import {test,expect} from '@playwright/test'

test("webtable",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const column=await page.locator('//table[@id="productTable"]//thead//tr//th')
    const rows=await page.locator('//table[@id="productTable"]//tbody//tr')

    console.log("column count : ", await column.count())
    console.log("rows count : ", await rows.count())

    // const check=await rows.filter({
    //     has: page.locator('td'),
    //     hasText: "Smartphone"
    // })

    // await check.locator('//input[@type="checkbox"]').check()

    const check=await rows.filter({
        has: page.locator('td'),
        hasText: /Smartwatch|Smartphone/                //-->regularexpression
    })

    const count=await check.count()

    for(let i=0;i<count;i++){
        await check.nth(i).locator('//input[@type="checkbox"]').check()
    }

    await page.pause()
})

