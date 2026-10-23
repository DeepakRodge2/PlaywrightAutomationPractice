import {test}from '@playwright/test'
test.describe("playwright hooks practice",()=>{

    //Execute on test suit level
    test.beforeAll(()=>
    {
        console.log("test suit execution started")
    })
    test.afterAll(()=>
    {
        console.log("test suit excution ended")
    }
    )
   //this hook will execute the before each of the testcase
    test.beforeEach(()=>
    {
        console.log("Test Execution started")
    })
    //this hook will execute the after the each of the testcases
    test.afterEach(()=>{
        console.log("Test Execution completed")
    })


    test("test case1",async({page})=>
    {
        console.log("test case1 execution in progress")
    })

    test("test case2",async({page})=>
    {
        console.log("test case1 execution in progress")
    })

    test("test case3",async({page})=>
    {
        console.log("test case1 execution in progress")
    })
    
    test("test case4",async({page})=>
    {
        console.log("test case1 execution in progress")
    })

})