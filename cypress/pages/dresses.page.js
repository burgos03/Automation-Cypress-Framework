import { BasePage } from ".";

export default class DressPage extends BasePage{
    constructor(){
        super("Dress", "index.php?controller=search&orderby=position&orderway=desc&search_query=dress&submit_search=");
    }
}