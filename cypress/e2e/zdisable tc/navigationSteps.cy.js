import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};

// Go Home

Given('I visit the home', () => {
cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  }); 
});

Given('The user clicks the cookies pop up - home', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click() 
});

Given ('go to menu option', () => {
  cy.get('.menu-main-trigger',{ timeout: 10000 }).click();
    }); 

Then('The user should see home', () => {
  // More comprehensive hero section verification
  cy.get(SELECTORS.HERO_TITLE)
  .should('have.text', "Connect to what's possible.")
});

 // Scenario: Go find a Distributor

  
  When('The user clicks on find a distributor tab', () => {
    // Wait for cookie banner with timeout and retry
    cy.get('.menu-utility-mobile__menu > :nth-child(1) > .link')
      .click() 
  });
  
  Then('The user should see find a distributor page', () => {
      cy.get('.bdn-find-panel-header').should('be.visible')
         .and('have.text', "Find A Distributor")
  });

  // Scenario: Go find an installer

When('The user clicks on find an installer tab', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('.menu-utility-mobile__menu > :nth-child(2) > .link') // Adjust the selector as needed
    .click();
});

Then('The user should see find an installer page', () => {
  cy.get('.last > .navigation-title > a')
  .should('have.text', "Find A Partner")
});

// Scenario: Go blogs

When('The user clicks on blogs tab', () => {
  cy.get('.menu-utility-mobile__menu > :nth-child(4) > .link')
.click();
});

Then('The user should see blog page', () => {
  cy.get('.last > .navigation-title > a').should('have.text', "Blog");
});

// Scenario: Go news


When('The user clicks on news tab', () => {
  cy.get('.menu-utility-mobile__menu > :nth-child(5) > .link').click();
});

Then('The user should see news page', () => {
  cy.get('.last > .navigation-title > a').should('have.text', "News");
});


// Scenario: Go contact Us

When('Close hamburger menu', () => {
  cy.get('.menu-main__close__button').click();
});


When('The user clicks on support menu', () => {
  cy.get('.button-support > span').click();
});

Then('The user should see contact us page', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Contact Us");
});



