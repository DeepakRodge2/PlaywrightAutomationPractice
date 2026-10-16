import{test}from '../../Fixtures/basefixtures.ts'
test.describe("test dummy booking website",async()=>
{
    test("Enter Passwenger details",async({ mypage})=>
    {
        await mypage.locator("#firstname").first().fill("rahul")
        await mypage.locator("#firstname").last().fill("Gupta")
        await mypage.locator("#birthday").fill("2026-09-20")
        await mypage.locator("#male").check()

    })
    
    test("Enter travel details",async({ mypage})=>
    {
        await mypage.locator("#fromcity").fill("Mumbai")
        await mypage.locator("#destcity").fill("Pune")

    })
    
    test("Enter billing details",async({ mypage})=>
    {
        await mypage.locator("#billing_name").fill("Raj")
        await mypage.locator("#billing_phone").fill("173737636123")
        await mypage.locator("#billing_email").fill("Rahul@gmail.com")
        await mypage.locator("#billing_address").fill("kondhwa road ,pune")
    
    })

})