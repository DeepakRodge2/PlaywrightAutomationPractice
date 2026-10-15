import{test,expect}from'@playwright/test'
test("practice test",async({page})=>
{

    await page.goto("https://www.automationexercise.com/products")

    await  page.getByRole("link",{name:" Products"}).click();
    
    const item1= page.locator(".single-products").filter({hasText:"Blue Top"})
    await item1.hover();
    await item1.locator(".add-to-cart").first().click();
    const cartModal = page.locator("#cartModal");
    await expect(cartModal).toBeVisible();
     await page.getByRole("button",{name:"Continue Shopping"}).click();
    
     const item2=page.locator(".single-products").filter({hasText:"Men Tshirt"})
     await item2.hover();
     await item2.locator(".add-to-cart").first().click();
     const cartModal1 = page.locator("#cartModal");
     await expect(cartModal1).toBeVisible();
      await page.getByRole("button",{name:"Continue Shopping"}).click();
  
     const item3=page.locator(".single-products").filter({hasText:"Summer White Top"})
    await item3.hover();
    await item3.locator(".add-to-cart").first().click();
    const cartModal2 = page.locator("#cartModal");
    await expect(cartModal2).toBeVisible();
    await page.getByRole("button",{name:"Continue Shopping"}).click();

     const item4=page.locator(".single-products").filter({hasText:"Madame Top For Women"})
     await item4.hover();
     await item4.locator(".add-to-cart").first().click();
     const cartModal3 = page.locator("#cartModal");
     await expect(cartModal3).toBeVisible();
      await page.getByRole("button",{name:"Continue Shopping"}).click();
    
     const item5=page.locator(".single-products").filter({hasText:"Fancy Green Top"})
     await item5.hover();
     await item5.locator(".add-to-cart").first().click();
     const cartModal4 = page.locator("#cartModal");
     await expect(cartModal4).toBeVisible();
      await page.getByRole("button",{name:"Continue Shopping"}).click();
  
     const item7=page.locator(".single-products").filter({hasText:"Sleeves Printed Top - White"})
     await item7.hover();
     await item7.locator(".add-to-cart").first().click();
     const cartModal5 = page.locator("#cartModal");
     await expect(cartModal5).toBeVisible();
    await page.getByRole("button",{name:"Continue Shopping"}).click();
    
     const item8=page.locator(".single-products").filter({hasText:"Half Sleeves Top Schiffli Detailing - Pink"})
     await item8.hover();
     await item8.locator(".add-to-cart").first().click();
     const cartModal6 = page.locator("#cartModal");
     await expect(cartModal6).toBeVisible();
      await page.getByRole("button",{name:"Continue Shopping"}).click();
   
     const item9=page.locator(".single-products").filter({hasText:"Frozen Tops For Kids"})
     await item9.hover();
     await item9.locator(".add-to-cart").first().click();
     const cartModal7 = page.locator("#cartModal");
     await expect(cartModal7).toBeVisible();
      await page.getByRole("button",{name:"Continue Shopping"}).click();
    
     const item10=page.locator(".single-products").filter({hasText:"Full Sleeves Top Cherry - Pink"})
     await item10.hover();
     await item10.locator(".add-to-cart").first().click();
     const cartModal8 = page.locator("#cartModal");
     await expect(cartModal8).toBeVisible();
     await cartModal8.getByRole("link", { name: "View Cart" }).click();
     await expect(page).toHaveURL("https://www.automationexercise.com/view_cart");

     await page.waitForTimeout(2000)

     await page.locator("//table[@class='table table-condensed']//tr[2]/td[6]").click();

     await page.locator("//table[@class='table table-condensed']//tr[4]//td[6]").click();

})