import{test,Page}from '@playwright/test'
import { BasePage } from '../../Common/BasePage'

export class Dashboardpage extends BasePage{


    constructor(page:Page)
    {
        super(page)

    }
    get clickonproduct()
    {
        return this.page.getByRole("link",{name:"Products"})
    }

      get verifycartmodelisvisible()
    {
        return this.page.locator("#cartModal")
    }
    get clickoncontinnueshopping()
    {
        return this.page.getByRole("button",{name:"Continue Shopping"})
    }
    get clickonviewcart()
    {
        return this.verifycartmodelisvisible.getByRole("link",{name:"View Cart"})
    }
    get verifycheckout()
    {
        return this.page.getByText("Proceed To Checkout")
    }
   


    
}