import * as pages from '../pageObjects/index'
import testData from '../../fixtures/testData.json'

class CartPage {
    get barNotification() { return cy.get('.bar-notification.success') }
    get shoppingCartLink() { return cy.get("ul #topcartlink") }
    get termsCheckbox() { return cy.get('#termsofservice') }
    get checkoutButton() { return cy.get('#checkout'); }

    verifyProductAdded() {
        pages.cartPage.barNotification.should('contain', 'The product has been added to your shopping cart');
        pages.cartPage.shoppingCartLink.click();
    }

    proceedToCheckout() {
        pages.cartPage.termsCheckbox.check();
        pages.cartPage.checkoutButton.click();
    }
}

export default new CartPage();
