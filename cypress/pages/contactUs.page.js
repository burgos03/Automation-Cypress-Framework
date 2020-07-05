import {BasePage} from "."

export default class ContactUsPage extends BasePage{
    constructor(){    
      super('Customer service - Contact us', 'index.php?controller=contact');
    }  
}