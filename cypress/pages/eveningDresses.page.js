import { BasePage } from ".";

export default class EveningDressesPage extends BasePage {
    constructor(){
        super("Evening Dresses", "index.php?id_category=10&controller=category");
    }
}