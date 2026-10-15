import{test,expect}from '@playwright/test'
test.describe("page assertion",()=>
{
    test("page assertion methods",async({page})=>
    {
        await page.goto("https://www.saucedemo.com/")
        expect(page).toHaveURL("https://www.saucedemo.com/")
        expect(page).toHaveTitle("Swag Labs")
    })
})