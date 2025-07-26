import{test,expect} from '@playwright/test'

test("single select dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator('//select[@id="country"]').selectOption("United Kingdom")
    //await page.locator('//select[@id="country"]').selectOption({index:2})
    await page.locator('//select[@id="country"]').selectOption({value:"uk"})

    await page.pause()
})


test("multiselect dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red","Yellow","White"])

    await page.pause()
})

test.only("auto suggestion",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.locator('//input[@id="autocomplete"]').fill("ind")
    const locat=await page.locator('//div[@class="ui-menu-item-wrapper"]')
    await locat.first().waitFor()
    const text=await locat.allTextContents()
    for(let i=0;i<text.length;i++){
        if(text[i].trim()==="India"){
            await locat.nth(i).click()
        }
    }

    await page.pause()

})

test("auto suggestion 2",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.locator('//input[@id="autocomplete"]').fill("ind")
    const locat=await page.locator('//div[@class="ui-menu-item-wrapper"]')
    await locat.first().waitFor()
    const text=await locat.allTextContents()
    for(let i=0;i<text.length;i++){
        if(text && text.includes("India")){
            await locat.nth(i).click()
        }
    }

    await page.pause()

})

