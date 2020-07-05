import { BasePage } from ".";

export default class SummerDressesPage extends BasePage{
    constructor(){
        super("Summer Dresses", "index.php?id_category=11&controller=category");
    }
}