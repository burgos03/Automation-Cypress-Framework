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
});
