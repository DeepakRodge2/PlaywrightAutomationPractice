import{Page}from '@playwright/test'
import { Suceapplogin } from '../sucelab/Login/LoginPage'
import { inventorypage } from '../sucelab/inventory/Inventorypage'
import { logoutpage } from '../sucelab/Login/Logout'

export class pagemanager{
    readonly Page:Page
    readonly suceapploginpg :Suceapplogin
    readonly inventorypg: inventorypage
    readonly logoutpg: logoutpage

    constructor(Page:Page)
    {
        this.Page=Page;
        this.suceapploginpg = new Suceapplogin(this.Page)
        this.inventorypg=new inventorypage(this.Page)
        this.logoutpg=new logoutpage(this.Page)
    }
}