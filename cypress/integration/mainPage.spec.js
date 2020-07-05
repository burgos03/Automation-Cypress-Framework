import {HomePage} from '../pages';

describe('Test cases main page', () => {
    it('AP-17: Verify that it is possible to go to the "Customer Service - Contact Us" page.', () => {
        HomePage
            .visit()
            .headerComponent
            .clickContactUsLink()
            
            .contactUsPage
            .verifyTitle();
    });

    it('AP-19: Verify that it is possible to go to the "Authentication" page.', () => {
        HomePage
            .visit()
            .headerComponent
            .clickSignIn()

            .authenticationPage
            .verifyTitle();       
    });

    it('AP-20: Verify that it is possible to go to the main page, clicking on the "Your Logo.', () => {
        HomePage
            .visit()
            .headerComponent
            .clickLogoLink()

            .homePage
            .verifyUrl();        
    });

    it('AP-22: Verify that when you click on the "WOMEN" button you will be directed to the Women page.', () => {
        HomePage
            .visit()
            .headerComponent
            .clickWomenButton()

            .womenPage
            .verifyTitle();
    }); 
    
    it('AP-30: Verify that when the cursor is over the "DRESSES" button, the Dresses type bar will be displayed (CASUAL DRESSES, EVENING DRESSES, SUMER DRESSES)', () => {
        HomePage
            .visit()
            .headerComponent
            .displayDressesMenu()
            .verifyDressesMenuItemDisplayed('Casual Dresses')
            .verifyDressesMenuItemDisplayed('Evening Dresses')
            .verifyDressesMenuItemDisplayed('Summer Dresses')
    });

    it('AP-31: Verify that when you click on the "CASUAL DRESSES" button you go to the Casual Dresses page', () => {
        HomePage
            .visit()
            .headerComponent
            .displayDressesMenu()
            .clickCasualDresses()

            .casualDressesPage
            .verifyTitle();            
    });

    it('AP-32: Verify that when the "EVENING DRESSES" button is clicked it will go to the Evening Dresses page', () => {
        HomePage
            .visit()
            .headerComponent
            .displayDressesMenu()
            .clickEveningDresses()

            .eveningDressesPage
            .verifyTitle();
    });

    it('AP-33: Verify that when you click on the "SUMMER DRESSES" button you go to the Summer Dresses page', () => {
        HomePage
            .visit()
            .headerComponent
            .displayDressesMenu()
            .clickSummerDresses()

            .summerDressesPage
            .verifyTitle();            
    });

    it.only('AP-37: Verify that it is possible to type words into the search box.', () => {
        const text = 'T-shirt'
        
        HomePage
            .visit()
            .headerComponent
            .typeSearchBox(text)
            .verifySearchBoxText(text);
    });

    it.only('AP-38: Verify that when you enter a keyword "e.g.: Dress" it will display all the results related to the keyword.', () => {
        const text = 'Dress'; 

        HomePage
            .visit()
            .headerComponent
            .typeSearchBox(text)
            .clickSearchButton()

            .dressPage
            .verifyTitle();
    });
});
