import{expect, test}from '@playwright/test'
test.describe("handle alerts popups",()=>
{
    test("simple alert,Accept it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         page.on('dialog',async dialog=>{console.log(dialog.message())

            await dialog.accept();
         })
        await page.locator("#alertBtn").click(); 
    })

    test("confirmation alert,accept it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         page.on('dialog',async dialog=>{console.log(dialog.message())

            await dialog.accept();
         })
        await page.locator("#confirmBtn").click(); 
        const msg= await page.locator("#demo").textContent()
        console.log(msg)
        expect(msg).toEqual("You pressed OK!")
 
    })
    
    test("confirmation alert, dismiss it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         page.on('dialog',async dialog=>{console.log(dialog.message())

            await dialog.dismiss();
         })
        await page.locator("#confirmBtn").click(); 
        const msg=await page.locator("#demo").textContent()
        console.log(msg)
       expect(msg).toEqual("You pressed Cancel!")
    })
    test("prompt alert,accpet it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         page.on('dialog',async dialog=>{console.log(dialog.message())

            await dialog.accept("Deepak");
         })

        await page.locator("#promptBtn").click()
        const msg=await page.locator("#demo").textContent()
        console.log(msg)
       expect(msg).toEqual("Hello Deepak! How are you today?")

    })
    test("prompt alert,dismiss it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
         page.on('dialog',async dialog=>{console.log(dialog.message())

            await dialog.dismiss();
         })

        await page.locator("#promptBtn").click()
        const msg=await page.locator("#demo").textContent()
        console.log(msg)
       expect(msg).toEqual("User cancelled the prompt.")

    })
})