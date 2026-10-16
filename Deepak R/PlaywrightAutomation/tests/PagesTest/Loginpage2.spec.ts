import{expect}from'@playwright/test'
import * as TestData from '../../test-data//Test_data2.ts'
import{test} from '../../Fixtures/basefixtures.ts'
//import { pagemanager } from '../../Pages/Common/Pagemanager.ts'
test.describe("check login page2", () => {
    test("test login page2", async ({ Pagemanager }) => {
      
    test.setTimeout(100_000)
    //const pageManage = new pagemanager(page) 
    await Pagemanager.Loginpg.navigate(TestData.Web_URL)
    await Pagemanager.Loginpg.clickheadingbutton()
    await Pagemanager.Loginpg.Loginfunction(TestData.username,TestData.email)
    await Pagemanager .Loginpg.useraddinformation("Test3","Test@123","Sam","Curren","infosys","connect enterises Pune","Maharastra","Pune","431203","2162363223")
    await expect(Pagemanager.Loginpg.verifylogoutbuttondisplayed).toBeVisible()
      //  await Pagemanager.dashboardpg.navigate(TestData.Web_URL)
    await Pagemanager.dashboardpg.clickonprodcutlink()
    await Pagemanager.dashboardpg.product1()
    await expect( Pagemanager.dashboardpg.verifycartmodelisvisible).toBeVisible()
    await Pagemanager.dashboardpg.continueshopping1()
    await Pagemanager.dashboardpg.product2()
    await Pagemanager.dashboardpg.continueshopping2()
    await Pagemanager.dashboardpg.product3()
    await Pagemanager.dashboardpg.clickonviewcartlink()
    await expect(Pagemanager.dashboardpg.verifycheckout).toBeVisible();
    
    })
})