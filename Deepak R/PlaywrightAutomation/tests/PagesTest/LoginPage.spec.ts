import {  expect } from '@playwright/test'
import{test} from '../../Fixtures/basefixtures.ts'
//import { pagemanager } from '../../Pages/Common/Pagemanager.ts'
import * as TestData from '../../test-data/Test_data.ts';
test.describe("check login page", () => {
    test("test login page", async ({ Pagemanager }) => {
       // const pageManage = new pagemanager(page)
        await Pagemanager.suceapploginpg.navigate(TestData.SAUCELAB_URL);
        await Pagemanager.suceapploginpg.loginfunction2(TestData.SAUCELAB_Username,TestData.SAUCELAB_Password)
        await expect(Pagemanager.suceapploginpg.dashboardheding).toBeVisible()

       // const items = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie']
        await Pagemanager.inventorypg.additemtocart(TestData.Shopping_item)
        await Pagemanager.inventorypg.nevigatetoshoppingcart()

        const cartItemsVisible = await Pagemanager.inventorypg.verifyItem(TestData.Shopping_item)
        expect(cartItemsVisible).not.toContain(false)

        await Pagemanager.inventorypg.removeitemfromcart(TestData.Shopping_item)
        const removedItemsVisible = await Pagemanager.inventorypg.verifycartnotavailable(TestData.Shopping_item)
        expect(removedItemsVisible).not.toContain(true)

        await Pagemanager.logoutpg.clickonlogout()
    })
})