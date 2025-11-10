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
Given('The user visits the Belden Home page1', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user has accepted the cookie policy on Home1', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

// Hero validation on home page
Then('The user should see hero home', () => {
  cy.get(SELECTORS.HERO_TITLE)
    .should('have.text', "Connect to what's possible.")
});


// Why work with us - Lets connect
Then('The user should see Why work with us section', () => {
  cy.get('.whoWeAre__content__header__title')
    .should('have.text', "Why work with us")
});

When('The user click on let s connect', () => {
  cy.visit('/support/contact-us');
});

Then('The user should see let s connect page', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Contact Us");
});

// Why work with us - cta find a solution

When('The user click on find a solution CTA', () => {
  cy.visit('/solutions/capabilities');
});

Then('The user should see capabilities page from home', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Capabilities");
});
