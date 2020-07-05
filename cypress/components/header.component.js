/// <reference types="Cypress" />

import { HomePage, ContactUsPage, AuthenticationPage, WomenPage } from "../pages";
import { BaseComponent } from ".";
import { Logger } from "../utils";

export default class HeaderComponent extends BaseComponent {
    constructor() {
        super('header#header', 'Header');
        this._contactUsLink = "div#contact-link";        
        this._signInLink = ".login";
        this._logoLink = "div#header_logo";
        this._womenButton = "#block_top_menu a[title='Women']";
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

    clickLogoLink() {
        Logger.instance.addStep(`Click on [Logo] link/image.`);
        this.find(this._logoLink).click();
        return new GoTo();
    }

    clickWomenButton() {
        Logger.instance.addStep(`Click on [Women] button.`);
        this.find(this._womenButton).click();
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

    get womenPage(){
        return new WomenPage();
    }

    get authenticationPage(){
        return new AuthenticationPage();
    }
}
