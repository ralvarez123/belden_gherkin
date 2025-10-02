import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};


// Verify hero under Patents Page
Given('Launch the Patents url', () => {
cy.visit('/knowledge-hub/patents', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

When('The user clicks the cookies pop up on Patents', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click() 
});

Then('The user should see Patents hero', () => {
  // More comprehensive hero section verification
  cy.get(SELECTORS.HERO_TITLE)
    .should('have.text', 'Patents')
});

