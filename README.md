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


/////////


Scenario: User sees the hero title
    When I check the hero title
    Then it should display "Patents"

  Scenario: User reads more about C3 Statement
    When I click on the "Read More" button
    Then I should see the C3 Statement body containing "third parties"

  Scenario: User expands all patents in the filter table
    When I expand all patents
    Then I should see "DCX and ECX Optical fiber distribution"

  Scenario: User interacts with the filter table
    When I expand all patents
    And I click on the first filter
    And I choose a result
    And I close the filter
    Then I should see "Belden | REVConnect®"

/////////

Scenario: Verify News Page
    Given Launch the News url
    When The user clicks the cookies pop up on News
    Then The user should see the News hero

  Scenario: Verify Contact Us Page
    Given Launch the Contact Us url
    When The user clicks the cookies pop up on Contact Us
    Then The user should see the Contact Us hero

  Scenario: Verify Capabilities Page
    Given Launch the Capabilities url
    When The user clicks the cookies pop up on Capabilities
    Then The user should see the Capabilities hero

  Scenario: Verify Page Industries
    Given Launch the Page Industries url
    When The user clicks the cookies pop up on Page Industries
    Then The user should see the Page Industries hero

  Scenario: Verify Page PCP
    Given Launch the Page PCP url
    When The user clicks the cookies pop up on Page PCP
    Then The user should see the Page PCP hero

  Scenario: Verify PLP Page
    Given Launch the PLP url
    When The user clicks the cookies pop up on PLP
    Then The user should see the PLP hero

  Scenario: Verify PDP Page
    Given Launch the PDP url
    When The user clicks the cookies pop up on PDP
    Then The user should see the PDP hero

  Scenario: Verify Services Page
    Given Launch the Services url
    When The user clicks the cookies pop up on Services
    Then The user should see the Services hero

  Scenario: Verify Page Distributors
    Given Launch the Page Distributors url
    When The user clicks the cookies pop up on Page Distributors
    Then The user should see the Page Distributors hero

  Scenario: Verify Knowledge Hub Page
    Given Launch the Knowledge Hub url
    When The user clicks the cookies pop up on Knowledge Hub
    Then The user should see the Knowledge Hub hero

  Scenario: Verify Page Locations
    Given Launch the Page Locations url
    When The user clicks the cookies pop up on Page Locations
    Then The user should see the Page Locations hero

  Scenario: Verify Automotive Manufacturing Page
    Given Launch the Automotive Manufacturing url
    When The user clicks the cookies pop up on Automotive Manufacturing
    Then The user should see the Automotive Manufacturing hero

  Scenario: Verify Sustainability Page
    Given Launch the Sustainability url
    When The user clicks the cookies pop up on Sustainability
    Then The user should see the Sustainability hero

  Scenario: Verify Patents Page
    Given Launch the Patents url
    When The user clicks the cookies pop up on Patents
    Then The user should see the Patents hero

  Scenario: Verify Events Page
    Given Launch the Events url
    When The user clicks the cookies pop up on Events
    Then The user should see the Events hero

  Scenario: Verify Blogs Page
    Given Launch the Blogs url
    When The user clicks the cookies pop up on Blogs
    Then The user should see the Blogs hero

  Scenario: User views a blog page
    Given Launch the Blogs url
    When I click on a blog
    Then I should see the blog page