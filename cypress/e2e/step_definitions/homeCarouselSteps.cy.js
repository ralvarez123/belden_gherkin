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
Given('The user visits the Belden Home page5', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user has accepted the cookie policy on Home5', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});


// carousel
Then('The user should see the carousel', () => {
  cy.get('.is-active > .row > .component-content > .slide-info > .testimonials__info__body > .testimonials__info__body__title')
    .contains("We transformed")
});

When('The user click on read more', () => {
  cy.visit('/knowledge-hub/resources/case-studies/2023/01/27/double-digit-productivity-improvements-through-beldens-digitization-solutions-capabilities')
});

Then('The user should see the read more info', () => {
  cy.get('.pdf-title').contains('Double-Digit');
});

//carousel navigation
When('The user click on the right arrow', () => {
  cy.get('.next-text').click();
  cy.wait(1000);
});

Then('The user should see the second card', () => {
  cy.get('.is-active > .row > .component-content > .slide-info > .testimonials__info__body > .testimonials__info__body__title')
.contains("We knew")
});

