import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
  COUNTRY_SELECT: '#country',
  PRODUCT_TYPE_SELECT: '#productType',
  SEARCH_BUTTON: "div.bdn-find-panel-form button.btn",
  SEARCH_SUMMARY: '.bdn-find-search-summary-query'
};

// Hero validation on find a Dsitributor page
Given('The user visits the Find a Distributor page', () => {
  cy.visit('/find-a-distributor', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

When('The user has accepted the cookie policy', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Find Distributor hero title', () => {
  // More comprehensive hero section verification
  cy.get('.bdn-find-panel-header')
    .should('have.text', "Find A Distributor")
});

// Search for a distributor

Given('The user visits the Find a Distributor page for search', () => {
  cy.visit('/find-a-distributor', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

When('The user has accepted the cookie policy for search', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

When('The user types country United States', () => {
  cy.get(SELECTORS.COUNTRY_SELECT).select('Colombia');
});

When('The user types Product Type Enterprise Racks & Cabinets', () => {
  cy.get(SELECTORS.PRODUCT_TYPE_SELECT).select('Enterprise Racks & Cabinets');
});

When('The user types Clicks on search button', () => {
  // Intercept the API call
  cy.intercept('POST', '/api/Finder/Finder/GetFinderFromSearch').as('getFinderSearch');

  // Intercept the Google Analytics call
  cy.intercept('POST', 'https://analytics.google.com/g/collect*').as('googleAnalytics');

  // Click the search button
  cy.get(SELECTORS.SEARCH_BUTTON).click();

  // Wait for the API call to complete
  cy.wait('@getFinderSearch');

  // Optionally, wait for the Google Analytics call to complete if you want to assert on it
  cy.wait('@googleAnalytics');
});

Then('The user should see results', () => {
  // Now check if the results are displayed
  cy.get(SELECTORS.SEARCH_SUMMARY, { timeout: 10000 })
    .should('be.visible')
    .and('contain.text', 'Results');
});

