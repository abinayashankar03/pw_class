import {test,expect} from '@playwright/test'
import Swaglabs from './JSON/swagjs'

test("swag_labs_pom",async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/')

    const print=new Swaglabs(page)

    await print.login("standard_user",'secret_sauce')

    await page.pause()

})
