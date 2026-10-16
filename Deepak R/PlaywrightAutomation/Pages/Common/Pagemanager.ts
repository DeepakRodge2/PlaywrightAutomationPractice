import{Page}from '@playwright/test'
import { Suceapplogin } from '../sucelab/Login/LoginPage'
import { inventorypage } from '../sucelab/inventory/Inventorypage'
import { logoutpage } from '../sucelab/Login/Logout'
import { Loginpage } from '../sucelab/Login/LoginPage2'
import { Dashboardpage } from '../sucelab/inventory/Dashboardpagelocator'
import { selectproduct } from '../sucelab/inventory/Dashboardpage'

export class pagemanager{
    readonly Page:Page
    readonly suceapploginpg :Suceapplogin
    readonly inventorypg: inventorypage
    readonly logoutpg: logoutpage
    readonly Loginpg:Loginpage 
    readonly dashboardpg: selectproduct

    constructor(Page:Page)
    {
        this.Page=Page;
        this.suceapploginpg = new Suceapplogin(this.Page)
        this.inventorypg=new inventorypage(this.Page)
        this.logoutpg=new logoutpage(this.Page)
        this.Loginpg=new Loginpage (this.Page)
        this.dashboardpg=new  selectproduct(this.Page)
    }
}