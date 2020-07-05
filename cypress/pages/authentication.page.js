/// <reference types="Cypress" />
import  { BasePage } from "."

export default class AuthenticationPage extends BasePage {
    constructor() {
        super('Authentication', 'index.php?controller=authentication&back=my-account');
        this._emailAddressTextbox = "#email";
        this._passwordTextbox = "#passwd";
        this._signInButton = "#SubmitLogin";    
    }

    static visit() {
        cy.visit("index.php?controller=authentication&back=my-account");
        return new AuthenticationPage();
    }
}