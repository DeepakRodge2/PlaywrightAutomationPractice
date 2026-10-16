import{Page,Locator,Expect, expect}from '@playwright/test'
import { inventorypagelocator } from './InventoryPageLocators';
export class inventorypage extends inventorypagelocator{

    constructor(page:Page)
    {
        super(page)
    }

    async additemtocart(itemnames:string[])
    {
        for(const item of itemnames)
        {
           const itemlocator = this.page.locator(`.inventory_item:has-text("${item}")` );
           const clickonaddtocartbutton=itemlocator.locator('button:has-text("Add to cart")')
           await this.click(clickonaddtocartbutton)
         }
    }
    async nevigatetoshoppingcart()
    {
          await this.clickshoppingcartbadge.click();

    }
    async removeitemfromcart(itemnames:string[])
    {
        for(const item of itemnames)
        {
           const itemlocator = this.page.locator(`.cart_item:has-text("${item}")` );
           const clickonRemovebtn=itemlocator.locator('button:has-text("Remove")')
           await this.click(clickonRemovebtn)
         }
        }
        
    async verifyItem(itemnames:string[]):Promise<boolean[]>
    {
        const status:boolean[]=[]
        for(const item of itemnames)
        {
           const itemlocator = this.page.locator(`.cart_item:has-text("${item}")` );
           const itemstatus=await itemlocator.isVisible()
           status.push(itemstatus)
         }
         return status

        }

        async verifycartnotavailable(itemnames:string[]) :Promise<boolean[]>
    {
        const statusArr:boolean[]=[]
        for(const item of itemnames)
        {
           const itemlocator = this.page.locator(`.cart_item:has-text("${item}")` );
            const st= await itemlocator.isVisible()
            statusArr.push(st)
         }
         return statusArr


   }

}