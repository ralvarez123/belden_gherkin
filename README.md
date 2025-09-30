# belden_gherkin
# for executing just on test case npx cypress run --spec "cypress/e2e/features/home.feature" 



 Scenario: Verify M4 Filter Table- expand all
    Given Launch the Patents url
    When The user clicks the cookies pop up on Patents
    Then The user should see Patents hero

  Scenario: Verify M4 Filter Table- Filter interaction
    Given Launch the Patents url
    When The user clicks the cookies pop up on Patents
    Then The user should see Patents hero

  Scenario: Verify M4 Filter Table- patent card
    Given Launch the Patents url
    When The user clicks the cookies pop up on Patents
    Then The user should see Patents hero




    import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};


// Verify hero under Patents Page
Given('Launch the Patents url', () => {
 // This step can be empty since the beforeEach handles the navigation 
 /*cy.visit('/knowledge-hub/patents', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); */
});

When('The user clicks the cookies pop up on Patents', () => {
  // Wait for cookie banner with timeout and retry
 /* console.log('Step: Launch the Patents url executed');
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click() */
});

Then('The user should see Patents hero', () => {
  // More comprehensive hero section verification
  cy.get(SELECTORS.HERO_TITLE)
    .should('have.text', 'Patents')
});


// Verify C3 Statement Read More
Given('Launch the Patents url', () => {
 /*  cy.visit('/knowledge-hub/patents', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); */
});

When('The user clicks the cookies pop up on Patents', () => {
  // Wait for cookie banner with timeout and retry
  console.log('Step: Launch the Patents url executed');
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click()
});

Then('The user should see Patents hero', () => {
  // More comprehensive hero section verification
  cy.get(SELECTORS.HERO_TITLE)
    .should('have.text', 'Patents')
}); 

