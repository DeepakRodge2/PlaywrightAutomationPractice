import{test,}from '@playwright/test'
test("test dummy website", async({page})=>
{

    await page.goto("https://sqatools.in/dummy-booking-website/")

    await page.locator("#firstname").nth(0).fill("Rahul")
    
    await page.locator("#firstname").nth(1).fill("gupta")

    await page.screenshot({path: "dummywebsite.png"})


})


