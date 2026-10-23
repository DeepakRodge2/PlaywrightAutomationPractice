import {  expect } from '@playwright/test'
import{test} from '../../Fixtures/basefixtures.ts'
//import { pagemanager } from '../../Pages/Common/Pagemanager.ts'
import * as TestData from '../../test-data/Test_data.ts';
import { pagemanager } from '../../Pages/Common/Pagemanager.ts';
  test.describe("check login page", () => {
    test.beforeAll("test login page", async ({  PageM }) => {
       // const pageManage = new pagemanager(page)
        await PageM.suceapploginpg.navigate(TestData.SAUCELAB_URL);
        await PageM.suceapploginpg.loginfunction2(TestData.SAUCELAB_Username,TestData.SAUCELAB_Password)
        await expect(PageM.suceapploginpg.dashboardheding).toBeVisible()
    });

     test.afterAll("logout page",async({PageM})=>
    {
      await PageM.logoutpg.clickonlogout()

    })

       // const items = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie']
        test("add item to cart",async({PageM})=>{
        // await Pagemanager.suceapploginpg.navigate(TestData.SAUCELAB_URL);
        // await Pagemanager.suceapploginpg.loginfunction2(TestData.SAUCELAB_Username,TestData.SAUCELAB_Password)
        // await expect(Pagemanager.suceapploginpg.dashboardheding).toBeVisible()
        await PageM.inventorypg.additemtocart(TestData.Shopping_item)
        })
        test("verify item in cart",async({PageM})=>{
        await PageM.inventorypg.nevigatetoshoppingcart()
        const cartItemsVisible = await PageM.inventorypg.verifyItem(TestData.Shopping_item)
        expect(cartItemsVisible).not.toContain(false)
        })

        test("remove item from cart",async({PageM})=>{
        await PageM.inventorypg.removeitemfromcart(TestData.Shopping_item)
        const removedItemsVisible = await PageM.inventorypg.verifycartnotavailable(TestData.Shopping_item)
        expect(removedItemsVisible).not.toContain(true)
        })
        })
      