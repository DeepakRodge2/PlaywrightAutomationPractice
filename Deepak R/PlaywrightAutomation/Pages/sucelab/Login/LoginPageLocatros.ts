import{Page,Locator}from'@playwright/test'
import { BasePage } from '../../Common/BasePage';
export class LoginPageLocators extends BasePage
{
    constructor(page:Page)
    {
        super(page)
    }

    get usernamefield()
    {
         return this.page.getByPlaceholder("Username")
    }
    get passwordfield()
    {
        return this.page.getByPlaceholder("Password")
    }
    get clickonloginbutton()
    {
        return this.page.locator("#login-button")
    }
    get  dashboardheding()
    {
        return this.page.locator(".app_logo")
    }

}