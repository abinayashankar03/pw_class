import {test,expect} from '@playwright/test'
import Orange from './JSON/oragehrm.js'


test("page object model",async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const log =new Orange(page)

    await log.login("Admin","admin123")

    await page.pause()


})