/*
-test timeout:defualt time out for each of the tetscases is 30 sec
              -within 30 sec each test case execuetion has to be completed
              -we can update default timeout in config file timeout:40_000
              -we can update test time out for one specific testcases
                e.g test.settimeout(60000)

-Assertion timeout or expect timeout:-this timeout we requere ti aseert any value 
                                   -user can specify the validation specific time
                    e.g expect(msg_locator).toBevisible({timeout:20_000})
                user can also specify global assertion timeout in config file
                e.g expect:{timeout:20_0000},

-global timeout:-this is the maximum timeout to be specified to make sure all testcases excution 
is completed within given period of time
this we can only use in config file
 e.g  expect:{globaltimeout:20_0000},


-action timeout:-timeout requred for each of the testcases 
                await page.locator(#demo).click({timeout:10_000})
                use:
                {
                actiontimeout:10*100,
                }
                
-nevigation timeout:- timout is taken by website to load the website
                     we can use in config file and also in tescase with url
                      use:
                      {
                      neviagationtimeout:10*100}
-statis wait timeout
-locator timeout
*/

import{expect, test}from '@playwright/test'
test.describe("handle alerts popups",()=>
{
    test("simple alert,Accept it",async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        //await page.waitForTimeout(30_000)//test timeout
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
        test.setTimeout(50_000)//specific timeout for this testcase only
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