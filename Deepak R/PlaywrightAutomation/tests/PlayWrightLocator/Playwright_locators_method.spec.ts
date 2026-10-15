import{test,expect}from '@playwright/test'

test.describe('playwright locators methods',()=>
{

    test.skip("get by role method",async({page})=>
    {

        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

        const primarybutton= page.getByRole("button",{name:"Primary Action"})
        expect(primarybutton).toBeEnabled()
        expect(primarybutton).not.toBeDisabled()
        expect(primarybutton).toBeAttached()
        expect(primarybutton).not.toBeHidden()

        await primarybutton.click();
        await page.getByRole("textbox",{name:"Username:"}).fill("rahul")
      await page.getByRole("checkbox",{name:" Accept terms"}).click()
      await page.waitForTimeout(2000)
    })

    test.skip("get by text method",async({page})=>
    {

        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

       await expect( page.getByText("important")).toBeVisible();
       await expect(page.getByText("Submit Form")).toBeEnabled();
       await expect(page.getByText("colored text")).toBeVisible();

    })

    
    test.skip("get by label method",async({page})=>
    {

        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

      const email= page.getByLabel("Email Address:")

       await email.fill("rahul@gmail.com")

      const age=await page.getByLabel("Your Age:").fill("25")

      await page.getByLabel(" Standard").check();

      await page.getByLabel(" Express").check();

    })

     
    test.skip("get by placeholder method",async({page})=>
    {

        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

        await page.getByPlaceholder("Enter your full name").fill("rahul")

        await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("12633737")

        await page.getByPlaceholder("Type your message here...").fill("we are learning javascript")

        await page.getByPlaceholder("Search products...").fill("abc")

    })

     test.skip("getbyalttext method",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

        const img=await page.getByAltText("logo image")

        expect(img).toBeVisible();



    })

    
     test.skip("get by title method",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

        const homelink= page.getByTitle("Home page link")
        console.log(await homelink.textContent())

       const laguagelink= page.getByTitle("HyperText Markup Language")

       console.log(await laguagelink.textContent() )

    })

     test.skip("get by test id method",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")

        await page.getByRole("link",{name:"PlaywrightPractice"}).click()

        console.log(await page.getByTestId("profile-name").textContent())

         console.log(await page.getByTestId("profile-email").textContent())

         console.log(await page.getByTestId("edit-profile-btn").textContent())

       const products = await page.getByTestId("product-name").allTextContents();

       console.log(products);

    })

    test("combine all methods",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")

        await page.getByPlaceholder("Enter username").fill("rahul")

        await page.getByPlaceholder("Enter password").fill("Rahul@123")

       const textarea= await page.getByText("Enter address")
       await textarea.clear()
       await textarea.fill("we are learning javascript fundametals")
       

      const radiobutton= page.locator("#male")
      await radiobutton.click()

      const checkbox=( page.locator("#java"))
      await checkbox.click()
      await expect(checkbox).toBeChecked()

      await page.locator("#country").selectOption("india")

      await page.locator("#skills").selectOption([
       { label:"Python"},
       {label:"Selenium"},
      { label:"Playwright"},
      {label:"API Testing"}

      ])


      await page.locator("#fileUpload").setInputFiles("C:/Users/HP/Downloads/receipt-NGOFVJB4QB.pdf")

      await page.waitForTimeout(3000)
    
    
    })

})