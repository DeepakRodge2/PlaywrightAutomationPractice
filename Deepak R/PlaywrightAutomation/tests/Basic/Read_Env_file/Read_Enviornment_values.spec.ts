import{test} from '@playwright/test'
test.describe("read value from envirnmant",()=>
{
    test("read data from envionrnment",async()=>
    {
    console.log(process.env.BASE_URL)
    console.log(process.env.USERNAME_VALUE)
    console.log(process.env.PASSWORD)
    console.log(process.env.ENV)

    })
})