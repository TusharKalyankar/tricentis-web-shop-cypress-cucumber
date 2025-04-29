import * as pages from '../pageObjects/index'

class CheckoutPage {

    get billingContinueButton() { return cy.get("#billing-buttons-container > .new-address-next-step-button") }
    get shippingContinueButton() { return cy.get("#shipping-buttons-container > .button-1") }
    get shippingMethodContinueButton() { return cy.get('#shipping-method-buttons-container > .button-1') }
    get paymentMethodContinueButton() { return cy.get('#payment-method-buttons-container > .button-1') }
    get paymentInfoContinueButton() { return cy.get('#payment-info-buttons-container > .button-1') }
    get confirmOrderContinueButton() { return cy.get('#confirm-order-buttons-container > .confirm-order-next-step-button') }
    get confirmOrderButton() { return cy.get('input[value="Confirm"]'); }
    get orderConfirmationMessage() { return cy.get('.title strong'); }
    get guestCheckoutButton() { return cy.get(".checkout-as-guest-button") }


    confirmOrder() {
        pages.checkOutPage.billingContinueButton.click();
        pages.checkOutPage.shippingContinueButton.click()
        pages.checkOutPage.shippingMethodContinueButton.click()
        pages.checkOutPage.paymentMethodContinueButton.click()
        pages.checkOutPage.paymentInfoContinueButton.click()
        pages.checkOutPage.confirmOrderButton.click()
    }

}

export default new CheckoutPage();
