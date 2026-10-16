import{test}from '@playwright/test'
import {Utilities  } from '../../../utils/utilities'
test.describe("read excel data",async()=>
{
    test("read excel data and print in console",async()=>
    {
        const util=new Utilities()
        const filePath ="test-data/Excel_test_data.xlsx";
        const data=util.readExcelFile(filePath) 
        console.log(data)

    })

})