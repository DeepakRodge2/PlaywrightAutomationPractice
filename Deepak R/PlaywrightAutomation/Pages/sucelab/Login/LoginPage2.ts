import{test,Page}from '@playwright/test'
import { LoginpageLocator2 } from './LoginPageLocators2'

export class Loginpage extends LoginpageLocator2 {

    constructor(page:Page)
    {

        super(page)
    }
    async clickheadingbutton()
    {
        await this.clickonheading.click()
    }

    async Loginfunction(username:string,useremail:string)
    {
        await this.enterusername.fill(username)
        await this.enteremail.fill(useremail)
        await this.clickonsignup.click()
    }
    async useraddinformation(user:string,Pass:string,firstname:string,lastname:string,compname:string,
     address:string,state:string,city:string,zipcode:string,mobileno:string
    )
    {
        await this.selectgender.click()
        await this.entername.fill(user)
        await this.enterpassword.fill(Pass)
        await this.selectdays.selectOption({value:"2"})
        await this.selectmonth.selectOption({label:"February"})
        await this.selectyear.selectOption({value:"2020"})
        await this.selectcheckbox.click()
        await this.enterfirstname.fill(firstname)
        await this.enterlastname.fill(lastname)
        await this.entercompany.fill(compname)
        await this.enteraddress.fill(address)
        await this.selectcountry.selectOption({value:"India"})
        await this.enterstate.fill(state)
        await this.entercity.fill(city)
        await this.enterzipcode.fill(zipcode)
        await this.entermobilenumber.fill(mobileno)
        await this.clickoncreateaccount.click()
        await this.clickoncontinue.click()
    }
    async verifylogoutbuttton()
    {
        await this.verifylogoutbuttondisplayed.isVisible()
    }

    

}
