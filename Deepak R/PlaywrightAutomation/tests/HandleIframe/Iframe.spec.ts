import{test}from '@playwright/test'
test.describe("handle iframes elements",()=>
{
    test("get value from iframe elements",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")
        await page.getByRole("heading",{name:"iframe"}).scrollIntoViewIfNeeded()

        const frame = page.frameLocator("#sampleIframe")
        console.log("para1 :",await frame.locator("p").nth(0).textContent())
        console.log("para2 :", await frame.locator("p").nth(1).textContent())

    })
})