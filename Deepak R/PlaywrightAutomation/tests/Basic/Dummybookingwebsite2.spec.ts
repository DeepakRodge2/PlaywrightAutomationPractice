import{test}from '../../Fixtures/basefixtures.ts'
test.describe("test dummy booking website",async()=>
{
    test("Enter Passwenger details",async({ workerpage})=>
    {
        await workerpage.locator("#firstname").first().fill("rahul")
        await workerpage.locator("#firstname").last().fill("Gupta")
        await workerpage.locator("#birthday").fill("2026-09-20")
        await workerpage.locator("#male").check()

    })
    
    test("Enter travel details",async({ workerpage})=>
    {
        await workerpage.locator("#fromcity").fill("Mumbai")
        await workerpage.locator("#destcity").fill("Pune")

    })
    
    test("Enter billing details",async({ workerpage})=>
    {
        await workerpage.locator("#billing_name").fill("Raj")
        await workerpage.locator("#billing_phone").fill("173737636123")
        await workerpage.locator("#billing_email").fill("Rahul@gmail.com")
        await workerpage.locator("#billing_address").fill("kondhwa road ,pune")
    
    })

})