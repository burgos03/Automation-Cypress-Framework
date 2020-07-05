import { HeaderComponent } from "../components";
import { Logger } from "../utils";

export default class BasePage {
    constructor(title, url) {
        this._titleLocator = ".page-heading";    
        this._title = title;
        this._url = url;

        Logger.instance.addStep(`Page [${title}] created.`)
    }

    get headerComponent () {
        return new HeaderComponent();
    }

    verifyTitle() {
        cy.get(this._titleLocator).should('contains.text', this._title);
        return this;
    }

    verifyUrl(){
        cy.url().should('eq', Cypress.config().baseUrl + this._url);
        return this;
    }
}