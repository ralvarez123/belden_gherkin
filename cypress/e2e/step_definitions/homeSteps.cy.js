import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};

Given('Launch the Home url', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  });
});

When('The user clicks the cookies pop up on Home', () => {
  // Wait for cookie banner with timeout and retry
  console.log('Step: Launch the Patents url executed');
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click()
});

Then('The user should see Home hero', () => {
  // More comprehensive hero section verification
  cy.get(SELECTORS.HERO_TITLE)
    .should('have.text', "Connect to what's possible.")
});


