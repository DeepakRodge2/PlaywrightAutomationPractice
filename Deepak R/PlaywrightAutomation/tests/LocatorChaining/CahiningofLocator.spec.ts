import{test}from '@playwright/test'
test.describe("Locator chaining",()=>
{
    test.skip("first test cases",async({page})=>
{

    await page.goto("https://sqatools.in/dummy-booking-website/")
    
    await page.locator("table#cities").locator("tr").locator("input").nth(0).check();

    //select the row with the help of of getByRole

    await page.getByRole("row",{name:"Kolkata	5000"}).getByRole("checkbox").click()

    //get the row vlaue with the help of filter

    await page.locator("tr").filter({hasText:"Orangabad"}).getByRole("checkbox").check()


})
test("add item to the list",async ({page})=>
{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("problem_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole("button",{name:"Login"}).click();

    const itemdiv=page.locator(".inventory_item").filter({hasText:"Sauce Labs Backpack"})
   await  itemdiv.getByRole("button",{name:"Add to cart"}).click();
    
    const itemdivage2=page.locator(".inventory_item").filter({hasText:"Sauce Labs Bolt T-Shirt"})
   await  itemdivage2.getByRole("button",{name:"Add to cart"}).click();
    
    const itemdiv3=page.locator(".inventory_item").filter({hasText:"Sauce Labs Onesie"})
   await  itemdiv3.getByRole("button",{name:"Add to cart"}).click();

  await page.waitForTimeout(2000)

})

})