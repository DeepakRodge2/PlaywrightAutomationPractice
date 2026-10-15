import{test,Page, Locator}from "@playwright/test"
import { Logoutpage } from "./Logoutlocator"


export class logoutpage extends Logoutpage {
    // readonly page:Page;
    // readonly openmenu :Locator
    // readonly logoutlink:Locator

    constructor(page:Page)
    {
       super(page)
        // this.openmenu=page.getByRole("button",{name:"Open Menu"})
        // this.logoutlink=page.locator("#logout_sidebar_link")
        
    }

    async clickonlogout()
    {
        await this.clickonopenmenu.click();
        await this.clickonlogoutbutton.click();
    }

}