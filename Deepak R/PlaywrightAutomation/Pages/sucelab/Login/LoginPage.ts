import { expect, Locator, Page } from '@playwright/test'
import { LoginPageLocators } from './LoginPageLocatros';
export class Suceapplogin extends LoginPageLocators {
  // //readonly page: Page;
  // readonly username: Locator;
  // readonly password: Locator;
  // readonly loginbutton: Locator;
  // readonly dashboardtext: Locator;

   constructor(page: Page) {
    super(page)
    // this.username = page.locator("#user-name");
    // this.password = page.locator("#password");
    // this.loginbutton = page.locator("#login-button");
    // this.dashboardtext = page.locator(".app_logo");
  }

  async loginfunction2(user: string, pass: string) {
   await this.usernamefield.fill(user)
   await this.passwordfield.fill(pass);
   await this.clickonloginbutton.click();
  }
  async verifydashboard1() {
    return(this.dashboardheding).isVisible()
  }
}
