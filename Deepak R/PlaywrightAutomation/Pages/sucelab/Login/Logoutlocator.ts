import{Page}from '@playwright/test'
import { BasePage } from '../../Common/BasePage'

export class Logoutpage extends BasePage{
    

    constructor(page:Page){
        super(page)

    }
     get clickonopenmenu()
    {
        return this.page.getByRole("button",{name:"Open Menu"});

    }
    get clickonlogoutbutton()
    {
        return this.page.locator("#logout_sidebar_link")
    }




}
