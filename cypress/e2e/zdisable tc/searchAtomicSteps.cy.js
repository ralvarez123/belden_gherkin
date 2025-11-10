import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};


// Verify hero under Patents Page
Given('Launch the news atomic url', () => {
cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user clicks the cookies pop up on news atomic page', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click() 
});
//ok
Given('Go to atomic Search and look for cable', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('[section="search"] > .hydrated')
  .click()
});

When('Type "cable" on search field - atomic', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('[section="search"] > .hydrated')
  .type('cable');
});

Then('The search suggestions are available on other tab', () => {
  // More comprehensive hero section verification
  cy.get('.SearchModal__box--right > .SearchModal__heading')
  .should('include.text', 'cable')
});


When('The users clicks on the first item result', () => {
  // Wait for cookie banner with timeout and retry
  //cy.get('200000')
  cy.visit("/search#q=cable&t=all-search&sort=relevancy")
});

When('The user validate the info for it', () => {
  // More comprehensive hero section verification
  cy.get('.col-xl-3 > .row > .component > .CoveoQuerySummary > :nth-child(2)')
  .should('include.text', ' matching results');
  
});



/*
Then('all tab is activated', () => {
  // More comprehensive hero section verification
  cy.get('.tabs__content__inner__actions__item.active')
  .should('have.css', 'background-color', 'rgb(132, 50, 155)');
});

Scenario: Search Sugesstions coveo item five
    And The users clicks on the fifth item result 
    And The user validate the info for it - five
    And The users clicks on the Fifth item result
    Then The user validate the info for the fifth one

    filed search cy.get('[section="search"] > .hydrated')
    hidde enter
    result for assertion cy.get('[section="summary"] > .atomic-filter-results')

    //
    describe("atomic", () => {
  it("tests atomic", () => {
    cy.viewport(1792, 657);
    cy.visit("https://condor-qa.belden.com/news-atomic");
    cy.visit("https://condor-qa.belden.com/news-atomic");
    cy.get("atomic-search-box").click();
    cy.get("atomic-search-box").type("cable");
    cy.get("atomic-search-box").click();
    cy.location("href").should("eq", "https://condor-qa.belden.com/search-atomic#tab=other");
    cy.get("atomic-result-list.list-view").click();
    cy.location("href").should("eq", "https://condor-qa.belden.com/products/racks-cabinets-cable-management/cable-management");
  });
});

*/
