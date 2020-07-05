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
});
