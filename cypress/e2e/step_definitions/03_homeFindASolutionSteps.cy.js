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
Given('The user visits the Belden Home page2', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user has accepted the cookie policy on Home2', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});


// Find a solution
Then('The user should see find a solution section', () => {
  cy.get('.tab-template__card__header__text__title')
    .should('have.text', "Find a Solution")
});

When('The user click on explore all capabilities', () => {
  cy.visit('/solutions/capabilities');
});

Then('The user should see capabilities page from all capabilities', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Capabilities");
});

// change tab under find a solution

When('The user click on network resilience tab', () => {
  cy.get('.tabs-heading > :nth-child(2) > :nth-child(1) > .row > .component').click();
});

Then('The user should see network resilience info', () => {
  cy.get('.active > .row > .tabs__content__inner__main__content > .tabs__content__inner__main__content__texts > .tabs__content__inner__main__content__texts__title')
  .should('have.text', "Stay connected 24/7");
});

// learn more of network resilience

When('The user click on learn more button', () => {
  cy.visit('/solutions/capabilities/network-resilience');
});


Then('The user should see network resilience page', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Network Resilience");
}); 