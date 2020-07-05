import { BasePage } from ".";

export default class HomePage extends BasePage {
    constructor() {
      super('Home', 'index.php');
    }
  
    static visit() {
      cy.visit("index.php");
      return new HomePage();
    }
}