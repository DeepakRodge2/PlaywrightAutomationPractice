import{test}from '@playwright/test'
test.describe("excute playwright action testcases",()=>
{
    test("Fill method to enter text",async({page})=>
    {

        await page.goto("https://sqatools.in/automation-practice-page/")
        var namevalue:string="rahul"
        var password:string="rahul@123"
        await page.getByPlaceholder("Enter username").fill(namevalue)
        await page.getByPlaceholder("Enter password").fill(password)


        //enter date to field
        await page.locator("#datePicker").fill("2020-02-02")
        //enter time to time field with 24hr oclock
        await page.locator("#timePicker").fill("12:30")
        //enter date for date time in one go

        await page.locator("#dateTimePicker").fill("2026-10-01T05:15")

    })

    test("intract with checkbox and radiobuttons",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")

        const radioelem=page.getByRole("radio",{name:"Male",exact:true})
        console.log( radioelem.isChecked)
        await radioelem.check()
         console.log( radioelem.isChecked)

        const radioelem2=page.getByRole("radio",{name:"Female",exact:true})
        console.log( radioelem2.isChecked)
        await radioelem2.check()
         console.log( radioelem2.isChecked)

    })

    test("select dropdwon valua",async({page})=>
    {

        await page.goto("https://sqatools.in/automation-practice-page/")
        const DropDown= page.locator("#country")
        await DropDown.scrollIntoViewIfNeeded();
        await  DropDown.selectOption("India")
        //select value by lable
        await DropDown.selectOption({label:"USA"})
    })

    test("select multiple opetion from dropdown",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const selectmultiplevalue=await page.locator("#skills")
        selectmultiplevalue.selectOption(['Python','Selenium','Playwright','API Testing'])
    })

    test("click opearations",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")

        //control+click
        await page.getByRole("link",{name:"Dummy Page"}).click({modifiers:['ControlOrMeta']})
        //shift+click
       await page.getByRole("link",{name:"Dummy Page"}).click({modifiers:['Shift']})
        //hover action
         const tlink=page.getByRole("link",{name:"Tutorials"}).first()
         await tlink.hover();

    })
    test("keyboard actions",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const usernameinput= page.getByPlaceholder("Enter username")
        await usernameinput.fill("facebookuser@gmail.com")
       await  usernameinput.press("Control+A")
       await usernameinput.press("Control+C");
       //text area pest  the values
        const textarea= page.locator("#address")
        await textarea.clear()
        await textarea.press("Control+V")

    })
    test("upload files using path of the file",async({page})=>
    {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const uploadelement= page.locator("#fileUpload")
        uploadelement.scrollIntoViewIfNeeded()
        uploadelement.setInputFiles("C:/Users/HP/Downloads/receipt-NGOFVJB4QB.pdf")
        await page.waitForTimeout(2000)
    })




})