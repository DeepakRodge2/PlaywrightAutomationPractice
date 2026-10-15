import{BrowserContext, test}from'@playwright/test'
test.describe("handle broswer windows",()=>
{
    test("Scenario1:one browser and two tabs",async({browser})=>
    {
        test.setTimeout(60_000)
        const context:BrowserContext=await browser.newContext()
        const page1=await context.newPage()
        const page2=await context.newPage()
        await Promise.all([
            page1.goto("https://sqatools.in/automation-practice-page/"),
            page2.goto("https://sqatools.in/dummy-booking-website/")
        ])

        await page1.getByPlaceholder("Enter username").fill("Rahul")
        await page1.getByPlaceholder("Enter password").fill("Rahul@123")

        await page2.locator("#fromcity").fill("Mumbai")
        await page2.locator("#destcity").fill("Pune")

    })

    test("Scenario2:two browser window and two tabs",async({browser})=>
    {
        test.setTimeout(60_000)
        const context1:BrowserContext=await browser.newContext()
        const context2:BrowserContext=await browser.newContext()
        const page1=await context1.newPage()
        const page2=await context2.newPage()
        await Promise.all([
            page1.goto("https://sqatools.in/automation-practice-page/"),
            page2.goto("https://sqatools.in/dummy-booking-website/")
        ])

        await page1.getByPlaceholder("Enter username").fill("Rahul")
        await page1.getByPlaceholder("Enter password").fill("Rahul@123")

        await page2.locator("#fromcity").fill("Mumbai")
        await page2.locator("#destcity").fill("Pune")


    })
     test("Scenario3:one browser click on link and nevigate on onother page",async({browser})=>
    {
      const context:BrowserContext=await browser.newContext()
      const page1=await context.newPage()
      await page1.goto("https://sqatools.in/automation-practice-page/")
             const [newPage]=await Promise.all([
                page1.waitForEvent("popup"),
                page1.getByRole("link",{name:"Login Page"}).first().click()

             ])
             const page2=newPage
             await page2.getByPlaceholder("Email address or phone number").fill("john")
             await page2.getByPlaceholder("Password").fill("123456")
             await page2.getByRole("button",{name:"Log in"}).click();


    })

})