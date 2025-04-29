import * as pages from '../pageObjects/index'
import testData from '../../fixtures/testData.json'

class HomePage {
    //search getters
    get searchBox() { return cy.get('input[id="small-searchterms"]')}
    get searchButton() { return cy.get('input[value="Search"]')}
    get firstProductAddToCartButton() {return cy.get('input[value="Add to cart"]').first()}

    //login getters
    get loginEmailTextBox() {return cy.get("#Email")}
    get loginPasswordTextBox() {return cy.get ("#Password")}
    get loginButton () {return cy.get(".login-button")}
    get loginIcon () {return cy.get(".ico-login")}


//login method
    login()
    {
        pages.homePage.loginEmailTextBox.type(testData.email)
        pages.homePage.loginPasswordTextBox.type(testData.password)
        pages.homePage.loginButton.click()
    }
   
}

export default new HomePage();
