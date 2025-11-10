import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
  COUNTRY_SELECT: '#country',
  PRODUCT_TYPE_SELECT: '#productType',
  SEARCH_BUTTON: "div.bdn-find-panel-form button.btn",
  SEARCH_SUMMARY: '.bdn-find-search-summary-query'
};

// Go Home page precondition
Given('The user visits the Belden Home page7', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user has accepted the cookie policy on Home7', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});


// facebook icon
Then('The user should see footer section', () => {
  cy.get('[href="https://www.facebook.com/BeldenInc"]')
    .find('img', { timeout: 10000 }) // Aumenta el tiempo de espera a 10 segundos
    .should('be.visible')
    .and('have.attr', 'src', '/-/media/Images/SocialLinks/Facebook.ashx');
});


//quick links
When('The user click on quick link', () => {
  cy.visit('/support/contact-us')
});

Then('The user should see contact us page - from that link', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Contact Us");
});

//about belden
When('The user clicks on about belden', () => {
  cy.visit('/news');
});

Then('The user should see news page - from that link', () => {
    cy.get('.last > .navigation-title > a').should('have.text', "News");
});

//Click Privacy Policy
When('The user clicks on Privacy Policy', () => {
  cy.visit('/privacy-policy');
});

Then('The user should see privacy policy page', () => {
    cy.get('.hero__title').should('have.text', "Belden Privacy Policy");
});


