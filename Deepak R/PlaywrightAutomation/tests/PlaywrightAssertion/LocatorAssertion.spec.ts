import { expect, Expect,test } from "@playwright/test";
test.describe("Locators Assertions methods",()=>
{
    test("Locator assertions",async({page})=>
    {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForLoadState("load")
       const usernameinput=page.getByPlaceholder("Username")
       await expect(usernameinput).toBeAttached()
       await expect(usernameinput).toBeEditable()
       await expect(usernameinput).not.toBeHidden()
       await expect(usernameinput).toBeEmpty()
       await expect(usernameinput).toBeFocused()
       await expect(usernameinput).not.toBeDisabled()
       await expect(usernameinput).toBeVisible()

       const logbtn=await page.locator("button[type='submit']")
       await expect(logbtn).toContainText(" Login ")
       await expect(logbtn).toHaveAttribute("class")

    })
})