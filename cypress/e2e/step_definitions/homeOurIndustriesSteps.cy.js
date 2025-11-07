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
Given('The user visits the Belden Home page3', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user has accepted the cookie policy on Home3', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});


// Our Industries
Then('The user should see our industries section', () => {
  cy.get('#desk > .ourIndustries__actions > .ourIndustries__actions__header > .ourIndustries__actions__title')
    .should('have.text', "Our industries")
});


When('The user click on healthcare tab', () => {
  cy.get('.ourIndustries__actions__links > #Healthcare').click();
});

Then('The user should see healthcare info', () => {
  cy.get('.ourIndustries__content > .ourIndustries__content__element--active > .ourIndustries__content__element__texts > .ourIndustries__content__element__texts__title')
    .invoke('text') // Get the text content
    .then((text) => {
      expect(text.trim()).to.equal('Healthcare'); // Trim and compare
    });
});

// learn more about healthcare

When('The user click on learn more about healthcare', () => {
  cy.visit('/solutions/industries/healthcare');
});

Then('The user should see healthcare page', () => {
  cy.get('.hero__title').should('have.text', "Healthcare");
});


// Our industries - Explore all industries

When('The user click on explore all industries', () => {
  cy.visit('/solutions/industries');
});

Then('The user should see industries pages', () => {
  cy.get('.hero__title').should('have.text', "Industry Solutions");
});  

