import{test}from '@playwright/test'

var ENV = "PROD";

test.describe("playwright Annotations", ()=>
    {
        //unconditional skip
    test.skip("test case 1",async({page})=>
    {
        console.log("test case 1")

    })
    //conditional skip

     test("test case 2",async({page})=>
    {
        test.skip(ENV=="PROD","Feature is not availabe in the enviornment")
        console.log("test case 2")

    })

    //add fix me marker:when automation code required some fixes

      test.fixme("test case 3",async({page})=>
    {
        console.log("test case 3")

    })
    // add failure marker to the testcase due to production issue
      test.fail("test case 4",async({page})=>
    {
        console.log("test case 4")

    })
    //

      test("test case 5",async({page})=>
    {
        //it will increase total timeout is equal to 3x
        test.slow()
        console.log("test case 5")

    })
       //set focus on specific test case
     /* test.only("test case 6",async({page})=>
    {
       console.log("test case 6")

    })
*/
 
})