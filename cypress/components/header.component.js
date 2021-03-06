/// <reference types="Cypress" />

import { HomePage, ContactUsPage, AuthenticationPage, WomenPage, CasualDressesPage, EveningDressesPage, SummerDressesPage, DressPage } from "../pages";
import { BaseComponent } from ".";
import { Logger } from "../utils";

export default class HeaderComponent extends BaseComponent {
    constructor() {
        super('header#header', 'Header');
        this._contactUsLink = "div#contact-link";        
        this._signInLink = ".login";
        this._logoLink = "div#header_logo";
        this._womenButton = "#block_top_menu a[title='Women']";
        this._dressesButton = 'div#block_top_menu > ul > li:nth-child(2)';
        this._searchBox = 'div#search_block_top >form >input#search_query_top';
        this._searchButton = 'form#searchbox >button';
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
    
    displayDressesMenu() {
        Logger.instance.addStep(`Display or make visible the Dresses Menu using css.`);
        this.find(this._dressesButton + "> ul").then(element => {
          element.css('display', 'block');
        }); 
        return this;
    }

    verifyDressesMenuItemDisplayed(title){
        Logger.instance.addPassStep(`Verify that the option [${title}] in [Dresses] menu is visible.`);
        this.find(this._dressesButton).find(`> ul > li >a[title="${title}"]`).should('be.visible');
        return this;
    }

    clickCasualDresses() {
        Logger.instance.addStep(`Click on [Casual Dresess] in [Dresses] menu.`);
        this.find(this._dressesButton + "> ul  >li:nth-child(1)").click();
        return new GoTo();
    }

    clickEveningDresses(){
        Logger.instance.addStep(`Click on [Evening Dresses] in [Dresses] menu.`);
        this.find(this._dressesButton + "> ul  >li:nth-child(2)").click();
        return new GoTo();
    }

    clickSummerDresses(){
        Logger.instance.addStep(`Click on [Summer Dresses] in [Dresses] menu.`);
        this.find(this._dressesButton + "> ul  >li:nth-child(3)").click();
        return new GoTo();
    }

    typeSearchBox(text){
        Logger.instance.addStep(`Type [${text}] in [Search Box].`);
        this.find(this._searchBox).type(text);
        return this;
    }

    clickSearchButton() {
        Logger.instance.addStep(`Click on [Search] Button.`);
        this.find(this._searchButton).click();
        return new GoTo();
    }

    verifySearchBoxText(text) {
        Logger.instance.addPassStep(`Verify that the [${text}] is present into [Search Box].`);
        this.find(this._searchBox).should('have.value', text);
        return this;
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

    get casualDressesPage(){
        return new CasualDressesPage();
    }

    get eveningDressesPage(){
        return new EveningDressesPage();
    }

    get summerDressesPage(){
        return new SummerDressesPage();
    }

    get dressPage(){
        return new DressPage();
    }
}
