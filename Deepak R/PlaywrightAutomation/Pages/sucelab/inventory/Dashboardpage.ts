import{test,Page}from'@playwright/test'
import { Dashboardpage } from './Dashboardpagelocator'

export class selectproduct extends Dashboardpage{

    constructor(page:Page)
    {
        super(page)
    }
    async clickonprodcutlink()
    {
        this.clickonproduct.click()
    }

    async product1()
    {
       const item1= this.page.locator(".single-products").filter({hasText:"Blue Top"}).first()
       await item1.hover()
        await item1.locator(".add-to-cart").nth(0).click()
    }
    async verifycartmodel()
    {
        return(this.verifycartmodelisvisible.isVisible)
    }
    async continueshopping1()
    {
        await this.clickoncontinnueshopping.click()
    }

    async product2()
    {
        const item2= this.page.locator(".single-products").filter({hasText:"Sleeveless Dress"}).first()
        await item2.hover()
        await item2.locator(".add-to-cart").first().click()
    }
    async continueshopping2()
    {
        await this.clickoncontinnueshopping.click()
    }

    async product3()
    {
        const item2= this.page.locator(".single-products").filter({hasText:"Stylish Dress"}).first()
        await item2.hover()
        await item2.locator(".add-to-cart").first().click()
    }
    // async continueshopping3()
    // {
    //     await this.clickoncontinnueshopping.click()
    // }
    
    async clickonviewcartlink()
    {
        await this.clickonviewcart.click()
    }
    async verifycheckoutpage()
    {
        return this.verifycheckout.isVisible()
        
    }
        
}