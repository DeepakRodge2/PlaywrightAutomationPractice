import{test,Page}from '@playwright/test'
import { BasePage } from '../../Common/BasePage'

export class LoginpageLocator2 extends BasePage{
    
    constructor(page:Page)
    {
        super(page)

    }
    get clickonheading()
    {
        return this.page.getByRole("link",{name: "Signup / Login"}).first()
    }
    get enterusername()
    {
        return this.page.getByPlaceholder("Name")
    }
    get enteremail()
    {
        return this.page.getByPlaceholder("Email Address").nth(1)
    }
    get clickonsignup()
    {
        return this.page.getByRole("button",{name:"Signup"})
    }
    get selectgender()
    {
        return this.page.locator("#id_gender1")
    }
    get entername()
    {
        return this.page.locator("#name")
    }
    get enterpassword()
    {
        return this.page.locator("#password")
    }

    get selectdays()
    {
        return this.page.locator("#days")
    }
    get selectmonth()
    {
        return this.page.locator("#months")
    }
    get selectyear()
    {
        return this.page.locator("#years")
    }
    get selectcheckbox()
    {
        return this.page.locator("#newsletter")
    }
    get enterfirstname()
    {
        return this.page.locator("#first_name")
    }
    get enterlastname()
    {
        return this.page.locator("#last_name")
    }
    get entercompany()
    {
        return this.page.locator("#company")
    }
    get enteraddress()
    {
        return this.page.locator("#address1")
    }
    get selectcountry()
    {
        return this.page.locator("#country")
    }
    get enterstate()
    {
        return this.page.locator("#state")
    }
    get entercity()
    {
        return this.page.locator("#city")
    }
    get enterzipcode()
    {
        return this.page.locator("#zipcode")
    }
    get entermobilenumber()
    {
        return this.page.locator("#mobile_number")
    }
    get clickoncreateaccount()
    {
        return this.page.getByRole("button",{name:"Create Account"})
    }
    get clickoncontinue()
    {
       return this.page.getByRole("link",{name:"Continue"})
    }
    get verifylogoutbuttondisplayed()
    {
        return this.page.getByRole("link",{name:" Logout"})
    }
    
} 