import{Browser, BrowserContext, test}from'@playwright/test'
test.describe("handle multiple browser",()=>
{
    test("one browser and two tabs2",async({ browser})=>
    {
        const context:BrowserContext=await browser.newContext()
        const page1=await context.newPage()
        const page2=await context.newPage()

        await page1.goto("https://sqatools.in/automation-practice-page/")
        await page2.goto("https://sqatools.in/dummy-booking-website/")

        page1.getByPlaceholder("Enter username").fill("Rahul")
        page1.getByPlaceholder("Enter password").fill("Rahul@123")

        page2.locator("#fromcity").fill("mumbai")
        page2.locator("#destcity").fill("pune")

    })

    test("two broswer and two window2",async({browser})=>
    {
        const context1:BrowserContext=await browser.newContext()
        const context2:BrowserContext=await browser.newContext()

        const page1=await context1.newPage()
        const page2=await context2.newPage()

        page1.goto("https://sqatools.in/automation-practice-page/")
        page2.goto("https://sqatools.in/dummy-booking-website/")

        await page1.getByPlaceholder("Enter username").fill("Rahul")
        await page1.getByPlaceholder("Enter password").fill("Rahul@123")

        await page2.locator("#fromcity").fill("Mumbai")
        await page2.locator("#destcity").fill("Pune")
    })
})