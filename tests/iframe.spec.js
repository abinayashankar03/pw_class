import{test,expect} from '@playwright/test'

test.only("handling frames",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // const frame=await page.frames()
    // console.log("frame count : ",frame.length)

    // for(let URL of frame){
    
    //     console.log("url : ",URL.url())
    // }

    // const frame= await page.frame('iframe-name')
    //const frame= await page.frame({name:'iframe-name'})
    //const frame= await page.frame({url:'https://rahulshettyacademy.com/'})
    const frame=await page.frameLocator('//iframe[@id="courses-iframe"]')
    await frame.locator('(//a[text()="Courses"])[1]').click()

    await page.pause()
})

test("childframe",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame.locator('//input[@name="mytext3"]').fill("Playwright")

    const child=await frame.childFrames()
    await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()

    await page.pause()
})


