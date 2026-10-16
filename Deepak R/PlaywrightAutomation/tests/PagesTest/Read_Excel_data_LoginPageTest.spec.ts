import {  expect } from '@playwright/test'
import{test} from '../../Fixtures/basefixtures.ts'
//import { pagemanager } from '../../Pages/Common/Pagemanager.ts'
import TestData from '../../test-data/test_data.json'
import { Utilities } from '../../utils/utilities.ts'
  test.describe("check login page1", () => {
    test("test login page", async ({ Pagemanager }) => {
      const Excelfile="test-data/Excel_test_data.xlsx"
      const util=new Utilities()
      const data:any=util.readExcelFile(Excelfile) 
      for(var values of data)
{
       // const pageManage = new pagemanager(page)
        await Pagemanager.suceapploginpg.navigate(TestData.suacelaburl);
        await Pagemanager.suceapploginpg.loginfunction2(values.username,values.password)
        await expect(Pagemanager.suceapploginpg.dashboardheding).toBeVisible()
}
    })
  })
