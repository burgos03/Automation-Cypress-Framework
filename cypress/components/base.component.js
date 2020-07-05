/// <reference types="Cypress" />
import { Logger } from '../utils'

export default class BaseComponent {
    constructor(locator, title){
      this._locator = locator;
      this._title = title;
      Logger.instance.addStep(`New Component: ${title}`);
    }
  
    get element() {
      return cy.get(this._locator);
    }
  
    find(locator) {
      Logger.instance.addStep(`Find Element [${locator}] in [${this._title}] component.`);
      return this.element.find(locator);
    }
  }