import { getDatetimeFormat } from "./date.util"
import * as path from 'path';

export default class Logger {

    constructor() {
        this._isActive = Cypress.config().logger || (Cypress.config().logger === "true");
        this._loggerPath = Cypress.config().loggerPath;
        this._currentLogPath = path.join(this._loggerPath + "/current.log");
        this._errorMessage = "";
        this._testPassed = true;
    }

  static _instance;

  static get instance() {
        return Logger._instance = Logger._instance ? Logger._instance : new Logger();
    }
  
  createLog(specName){
        if(this._isActive) {
        let spec = specName.replace('.js', '');
        let logName = path.join(this._loggerPath, spec + ".log");
        cy.task('fsCreateDir', {dir: this._loggerPath});
        cy.task('fsWriteFile', {filename: this._currentLogPath, data: logName});
        cy.task('fsWriteFile', {filename: logName, data: ''});
        }
    }

  addTest(testName) {
        this._addStep(`[${getDatetimeFormat()}] NEW TEST :: ${testName}`);
        this._errorMessage = "";
        this._testPassed = true;
    }

  setErrorMessage(message){
        this._errorMessage = message;
        this._testPassed = false;
    }

  finishTest() {
        let message = this._testPassed 
        ? `[${getDatetimeFormat()}] TEST FINISHED :: PASSED SUCCESSFULLY` 
        : `[${getDatetimeFormat()}] FAILED :: ${this._errorMessage}`;

        this._addStep(message)
    }

  addStep(message) {
        this._addStep(`[${getDatetimeFormat()}] STEP :: ${message}`)
    }

  addPassStep(message) {
        this._addStep(`[${getDatetimeFormat()}] PASSED :: ${message}`)
    }

  addInformationStep(message) {
        this._addStep(`[${getDatetimeFormat()}] INFO :: ${message}`)
    }

    _addStep(message) {
        if(this._isActive) {
            cy.readFile(this._currentLogPath).then(logName => {
                cy.task('fsAppendFile', {filename: logName, data: message});
            });
        }
    }
}
