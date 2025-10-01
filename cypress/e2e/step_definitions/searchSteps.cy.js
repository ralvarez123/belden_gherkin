import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};


// Verify hero under Patents Page
Given('Launch the home url', () => {
cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

When('The user clicks the cookies pop up', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click() 
});

When('Go to Global Search', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('.header__search-mobile-trigger')
    .click() 
});

When('Type "cable" on search field', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('.SearchModal__search-box')
  .click().type('cable');
});

Then('The search suggestions are available', () => {
  // More comprehensive hero section verification
  cy.get('.SearchModal__box--right > .SearchModal__heading')
  .should('include.text', 'cable');
});

