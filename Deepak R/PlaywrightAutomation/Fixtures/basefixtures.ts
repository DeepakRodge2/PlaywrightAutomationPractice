import { test as base,Page } from '@playwright/test';
import { pagemanager } from '../Pages/Common/Pagemanager';

type MyFixtures = {
     Pagemanager: pagemanager;
         mypage:    Page
         workerpage: Page
};

export const test = base.extend<MyFixtures>({
    //fixture to initiate the pagemanager object
    Pagemanager: async ({ page }, use) => {
        await use(new  pagemanager(page));
    },
    //fixture to intitate the page context
    //this fixture will reload browser after extcuting one test
  mypage :async({browser},use) =>
  {
    const context=await browser.newContext()//created browser context
    const Page=await context.newPage()//created new page
    await Page.goto("https://sqatools.in/dummy-booking-website/")//lunch url
    await use(Page)

    //teardown to close the broswer context
     await context.close()

  },
    //this fixture will run all test files without reloading browser
  workerpage :[async({browser},use) =>
  {
    const context=await browser.newContext()//created browser context
    const Page=await context.newPage()//created new page
    await Page.goto("https://sqatools.in/dummy-booking-website/")//lunch url
    await use(Page)

    //teardown to close the broswer context
     await context.close()
  },{scope:'worker'}]
});