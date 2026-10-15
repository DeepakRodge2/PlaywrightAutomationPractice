import{test}from'@playwright/test'

test.skip("test xpath locator",async({page})=>
{
     await page.goto('https://www.goibibo.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await page.locator('.logSprite.icClose').click();

    await page.locator("#fromCity").click()

    await page.locator("[placeholder='From']").fill("mumbai")

    await page.locator("//span[text()='Mumbai, India']").click()

    await page.locator("#toCity").click()

    await page.locator("[placeholder='To']").fill("pune")

    await page.locator("//span[text()='Pune, India']").click();

   await page.locator("[data-cy='departureDate']").click();

    await page.locator(".todayPrice").click();

});

test.skip("add to cart examples",async({page})=>
{

    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState("load")
    await page.locator("[placeholder=Username]").fill("standard_user")
    await page.locator("//input[@data-test='password']").fill("secret_sauce")
    await page.locator("#login-button").click();
    const productarry=[
        "Sauce Labs Backpack",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Onesie",
        "Sauce Labs Bike Light",
        "Sauce Labs Fleece Jacket",
        "Test.allTheThings() T-Shirt (Red)"
    ]
    for(var item of productarry)
    {
      await page.locator(
    `//div[text()='${item}']/ancestor::div[contains(@class,'inventory_item')]//button`
).click();
        await page.waitForTimeout(2000)
    }


})

test.skip("get college names", async ({ page }) => {

    await page.goto("https://www.mahaadmission.in/top-colleges");

    const rows = page.locator(
        "//table[@class='w-full text-left border-collapse']//tbody//tr"
    );

    // Wait until at least one row appears
    await rows.first().waitFor({ state: "visible", timeout: 30000 });

    const rowCount = await rows.count();

    console.log("Total rows:", rowCount);

    for (let i = 1; i <= rowCount; i++) {

        const collgesname = await page.locator(
            `//table[@class='w-full text-left border-collapse']//tbody//tr[${i}]//td[2]`
        ).textContent();

        console.log(collgesname)
    }
});

test.skip("check all checkboxes", async ({ page }) => {

    await page.goto("https://sqatools.in/dummy-booking-website/");

    const checkboxes = page.locator('input[type="checkbox"]');

    const count = await checkboxes.count();

    console.log("Total checkboxes:", count);

    for (let i = 0; i < count; i++) {
        await checkboxes.nth(i).check();

        await page.waitForTimeout(2000)
    }
});

test("click on radion button",async({page})=>
{

    await page.goto("https://sqatools.in/dummy-booking-website/")

    const radiobutton =await page.locator("input[type='radio']")
   const count = await radiobutton.count()
   console.log("total radio button :", count)

   for(var i=0;i<count;i++)
    {
        await radiobutton.nth(i).check()


    }
    

})