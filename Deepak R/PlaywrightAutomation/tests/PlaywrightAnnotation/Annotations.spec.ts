import { expect, test } from '@playwright/test';
//command to run 
// npx playwright test --grep "@sanity" Annotations.spec.ts --headed
test.describe("playwright Annotations", () => {

    test("test cases1", {
        tag: '@smoke'
    }, async ({ page,browser,browserName }) => {

       test.info().annotations.push({type: 'browser version',description: browser.version(),});
       test.info().annotations.push({type: 'browser name',description: browserName});
       test.info().annotations.push({type: 'issue',description: "https//JIRA-8687"});

       await test.step("Lunch URL",async()=>
        {
         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         });

         await test.step("Enter username and password and click on login",async()=>
        {
         await page.getByPlaceholder("Username").fill("Admin")

         await page.getByPlaceholder("Password").fill("admin123")

         await page.getByRole("button",{name:" Login "}).click()
        });

        await test.step("varify login succesfull",async()=>
        {
          await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible()
        });

    });
        
    test("test cases2", {
        tag: '@smoke'
    }, async ({ page,browser,browserName }) => {

       test.info().annotations.push({type: 'browser version',description: browser.version(),});
       test.info().annotations.push({type: 'browser name',description: browserName});
       test.info().annotations.push({type: 'issue',description: "https//JIRA-8687"});

       console.log("test case 2")
    });


    
    test("test cases3", {
        tag: '@sanity'
    }, async ({ page,browser,browserName }) => {

       test.info().annotations.push({type: 'browser version',description: browser.version(),});
       test.info().annotations.push({type: 'browser name',description: browserName});
       test.info().annotations.push({type: 'issue',description: "https//JIRA-8687"});

       console.log("testcase3")
    })


    test("test cases4", {
        tag: '@sanity'
    }, async ({ page,browser,browserName }) => {

       test.info().annotations.push({type: 'browser version',description: browser.version(),});
       test.info().annotations.push({type: 'browser name',description: browserName});
       test.info().annotations.push({type: 'issue',description: "https//JIRA-8687"});

       console.log("test case 4")
    });


    test("test cases5", {
        tag: '@regression'
    }, async ({ page,browser,browserName }) => {

       test.info().annotations.push({type: 'browser version',description: browser.version(),});
       test.info().annotations.push({type: 'browser name',description: browserName});
       test.info().annotations.push({type: 'issue',description: "https//JIRA-8687"});

       console.log("test case 5")

    });

    
    test("test cases6", {
        tag: '@regression'
    }, async ({ page,browser,browserName }) => {

       test.info().annotations.push({type: 'browser version',description: browser.version(),});
       test.info().annotations.push({type: 'browser name',description: browserName});
       test.info().annotations.push({type: 'issue',description: "https//JIRA-8687"});

       console.log("test case 6")
    })

});

