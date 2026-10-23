import{test}from '../../Fixtures/basefixtures.ts'
test.describe("test sucelab website",async()=>
{
    test("test login page",async({ myPage1})=>
    {
        await myPage1.locator("#user-name").fill("problem_user")
        await myPage1.locator("#password").fill("secret_sauce")
        await myPage1.locator("#login-button").click()
        

    })
})