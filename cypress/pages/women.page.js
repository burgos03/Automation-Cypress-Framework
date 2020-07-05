import { BasePage } from ".";

export default class WomenPage extends BasePage {
    constructor() {
        super('Women', 'index.php?id_category=3&controller=category');        
    }

    static visit() {
        cy.visit("?id_category=3&controller=category");
        return new WomenPage();
    }
}