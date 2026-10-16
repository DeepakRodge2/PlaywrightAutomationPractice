import {  expect } from '@playwright/test'
import{test} from '../../Fixtures/basefixtures.ts'
//import { pagemanager } from '../../Pages/Common/Pagemanager.ts'
import TestData from '../../test-data/test_data.json'
  test.describe("check login page", () => {
    test("test login page", async ({ Pagemanager }) => {
       // const pageManage = new pagemanager(page)
        await Pagemanager.suceapploginpg.navigate(TestData.suacelaburl);
        await Pagemanager.suceapploginpg.loginfunction2(TestData.username,TestData.password)
        await expect(Pagemanager.suceapploginpg.dashboardheding).toBeVisible()
    });

       // const items = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie']
        test("add and remove item from cart and verify",async({Pagemanager})=>{
        await Pagemanager.suceapploginpg.navigate(TestData.suacelaburl);
        await Pagemanager.suceapploginpg.loginfunction2(TestData.username,TestData.password)
        await expect(Pagemanager.suceapploginpg.dashboardheding).toBeVisible()
        await Pagemanager.inventorypg.additemtocart(TestData['shopping items'])
        await Pagemanager.inventorypg.nevigatetoshoppingcart()

        const cartItemsVisible = await Pagemanager.inventorypg.verifyItem(TestData['shopping items'])
        expect(cartItemsVisible).not.toContain(false)

        await Pagemanager.inventorypg.removeitemfromcart(TestData['shopping items'])
        const removedItemsVisible = await Pagemanager.inventorypg.verifycartnotavailable(TestData['shopping items'])
        expect(removedItemsVisible).not.toContain(true)

        await Pagemanager.logoutpg.clickonlogout()
       })
       test("read test data",()=>
       {
        console.log(TestData)

       })
      
      })