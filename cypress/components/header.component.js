/// <reference types="Cypress" />

import { HomePage, ContactUsPage, AuthenticationPage } from "../pages";
import { BaseComponent } from ".";
import { Logger } from "../utils";

export default class HeaderComponent extends BaseComponent {
    constructor() {
        super('header#header', 'Header');
        this._contactUsLink = "div#contact-link";
        this._signInLink = ".login";
    }

    clickContactUsLink() {
        Logger.instance.addStep(`Click on [Contact Us] link.`);
        this.find(this._contactUsLink).click();
        return new GoTo();
    }

    clickSignIn() {
        Logger.instance.addStep(`Click on [Sign In] button.`);
        this.find(this._signInLink).click();
        return new GoTo();
    }
}

class GoTo{
    get homePage(){
        return new HomePage();
    }

    get contactUsPage(){
        return new ContactUsPage();
    }

    get authenticationPage(){
        return new AuthenticationPage();
    }
}
