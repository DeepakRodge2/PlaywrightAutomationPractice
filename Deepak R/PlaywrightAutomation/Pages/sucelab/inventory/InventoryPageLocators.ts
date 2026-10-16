import{Page,Locator}from '@playwright/test'
import { BasePage } from '../../Common/BasePage'

export class inventorypagelocator extends BasePage{
    

    constructor(page:Page)
    {
        super(page)
    }

    get clickshoppingcartbadge()
    {
        return this.page.locator(".shopping_cart_link")
    }
  
}