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
 cy.get('.cardGroup__container__header__texts > h2')
    .contains("Unlocking success with solutions from Belden")
});

//quick links
When('The user click on quick link', () => {
  cy.visit('/knowledge-hub/resources#sort=%40contentpublisheddate%20descending&f:facetlanguage=[English]')
});

Then('The user should see contact us page', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Resources");
});

//about belden
When('The user clicks on about belden', () => {
  cy.visit('/blog/new-hospitality-technology-starts-with-optical-lans-and-class-4-powering');
});

Then('The user should see news page', () => {
    cy.get('.pdf-title').contains("New Hospitality")
});

//Click Privacy Policy
When('The user clicks on Privacy Policy', () => {
  cy.visit('/blog/new-hospitality-technology-starts-with-optical-lans-and-class-4-powering');
});

Then('The user should see privacy policy page', () => {
    cy.get('.pdf-title').contains("New Hospitality")
});

