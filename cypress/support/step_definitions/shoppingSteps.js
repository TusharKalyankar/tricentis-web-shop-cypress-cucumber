import * as pages from '../../support/pageObjects/index';
import testData from '../../fixtures/testData.json';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Demo Web Shop website', () => {
  cy.visit('https://demowebshop.tricentis.com/');
});

When('I login the application', () => {
  pages.homePage.loginIcon.click()
  pages.homePage.login()
});

When('I search for a product', () => {
  pages.homePage.searchBox.type(testData.searchProduct);
  pages.homePage.searchButton.click();
});

When('I add the product to the cart', () => {
  pages.homePage.firstProductAddToCartButton.click();
  pages.cartPage.verifyProductAdded();
});

When('I proceed to checkout', () => {
  pages.cartPage.proceedToCheckout();
  pages.checkOutPage.confirmOrder();
});

Then('I should see the order place successfully', () => {
  pages.checkOutPage.orderConfirmationMessage.should('contain', 'Your order has been successfully processed!');
});
