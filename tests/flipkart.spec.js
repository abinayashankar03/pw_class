import{test,expect} from '@playwright/test'

test.only("flipkart",async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.click('//a[@id="nav-hamburger-menu"]')
    await page.click('(//a[@class="hmenu-item" and @role="button"])[9]')
    await page.pause()

})
