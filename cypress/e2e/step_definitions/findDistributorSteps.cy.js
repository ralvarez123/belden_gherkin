import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title',
  COUNTRY_SELECT: '#country',
  PRODUCT_TYPE_SELECT: '#productType',
  SEARCH_BUTTON: "div.bdn-find-panel-form button.btn",
  SEARCH_SUMMARY: '.bdn-find-search-summary-query'
};

// Hero validation on find a Distributor page
Given('The user visits the Find a Distributor page', () => {
  cy.visit('/find-a-distributor', {
    timeout: 30000,
    failOnStatusCode: false,
  });
  cy.wait(1000); // Wait for 1 second after visiting the page
});

When('The user has accepted the cookie policy', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
  cy.wait(1000); // Wait for 1 second after clicking the cookie button
});

Then('The user should see the Find Distributor hero title', () => {
  cy.get('.bdn-find-panel-header')
    .should('have.text', "Find A Distributor");
  cy.wait(1000); // Wait for 1 second after checking the hero title
});

// Search for a distributor
When('The user types country United States', () => {
  cy.get(SELECTORS.COUNTRY_SELECT).select('United States');
  cy.wait(1000); // Wait for 1 second after selecting the country
});

When('The user types Product Type Enterprise Racks & Cabinets', () => {
  // Check if the product type select is enabled
  cy.get(SELECTORS.PRODUCT_TYPE_SELECT).should('not.be.disabled').then(($select) => {
    if ($select.is(':disabled')) {
      cy.log('Product Type select is disabled, waiting for it to be enabled...');
      // Optionally, you can wait for a specific condition or timeout
      cy.wait(2000); // Adjust the wait time as necessary
    }
    // Attempt to select the option
    cy.get(SELECTORS.PRODUCT_TYPE_SELECT).select('Enterprise Racks & Cabinets', { force: true });
  });
});

When('The user submits the search form', () => {
  cy.get(SELECTORS.SEARCH_BUTTON).click();
  cy.wait(1000); // Wait for 1 second after clicking the search button
});

Then('The user should see results', () => {
  cy.get(SELECTORS.SEARCH_SUMMARY)
    .should('be.visible')
    .and('contain.text', 'Results');
  cy.wait(1000); // Wait for 1 second after checking the results
});


//change search parameters
When('The user clicks on change option', () => {
  cy.get('.bdn-find-location-compact-link').click();
  cy.wait(1000); // Wait for 1 second after selecting the country
});

When('The user types Product Type Industrial cable', () => {
  // Check if the product type select is enabled
  cy.get(SELECTORS.PRODUCT_TYPE_SELECT).should('not.be.disabled').then(($select) => {
    if ($select.is(':disabled')) {
      cy.log('Product Type select is disabled, waiting for it to be enabled...');
      // Optionally, you can wait for a specific condition or timeout
      cy.wait(2000); // Adjust the wait time as necessary
    }
    // Attempt to select the option
    cy.get(SELECTORS.PRODUCT_TYPE_SELECT).select('Industrial Cable', { force: true });
  });
});

When('The user submits the search form2', () => {
  cy.get(SELECTORS.SEARCH_BUTTON).click();
  cy.wait(1000); // Wait for 1 second after clicking the search button
});

Then('The user should see results2', () => {
  cy.get(SELECTORS.SEARCH_SUMMARY)
    .should('be.visible')
    .and('contain.text', 'Results');
  cy.wait(1000); // Wait for 1 second after checking the results
});


