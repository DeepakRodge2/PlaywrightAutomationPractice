import{test}from'@playwright/test'
test.describe("locators Method :",()=>
{
  test.skip("get element with tagname",async({page})=>
{
    await page.goto("https://sqatools.in/dummy-booking-website/")

    for(var i=0;i<=7;i++)
    {
     
    const alltext=await page.locator(" tr ").nth(i).allTextContents()

    console.log(alltext)
    }

})

 test("get radio element with tagname",async({page})=>
{
    await page.goto("https://sqatools.in/dummy-booking-website/")

    await page.locator("div[align='left'] ul li input").first().click()

    await page.waitForTimeout(2000)
})





})
