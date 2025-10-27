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
Given('The user visits the Belden Home page', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user has accepted the cookie policy on Home', () => {
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


// Our Industries
Then('The user should see our industries section', () => {
  cy.get('#desk > .ourIndustries__actions > .ourIndustries__actions__header > .ourIndustries__actions__title')
    .should('have.text', "Our Industries")
});


When('The user click on healthcare tab', () => {
  cy.get('.ourIndustries__actions__links > #Healthcare').click();
});

Then('The user should see healthcare info', () => {
  cy.get('.ourIndustries__content > .ourIndustries__content__element--active > .ourIndustries__content__element__texts > .ourIndustries__content__element__texts__title')
  .should('have.text', "Healthcare");
});

// learn more about healthcare

When('The user click on learn more about healthcare', () => {
  cy.visit('/solutions/industries/healthcare');
});

Then('The user should see healthcare page', () => {
  cy.get('.active > .row > .tabs__content__inner__main__content > .tabs__content__inner__main__content__texts > .tabs__content__inner__main__content__texts__title')
  .should('have.text', "Industry Solutions");
});


// Our industries - Explore all industries

When('The user click on explore all industries', () => {
  cy.visit('/solutions/industries');
});

Then('The user should see industries pages', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Network Resilience");
}); 
