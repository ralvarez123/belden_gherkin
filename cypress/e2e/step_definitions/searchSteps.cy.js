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

Given('The user clicks the cookies pop up', () => {
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
// results

When('Explore more products', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('.SearchModal__box--right > .SearchModal__link')
  .click()
});

When('The user can see the results related', () => {
  // More comprehensive hero section verification
  cy.get('.col-xl-3 > .row > .component > .CoveoQuerySummary > :nth-child(2)')
  .should('include.text', ' matching results');
  
});

Then('Product tab is activated', () => {
  // More comprehensive hero section verification
  cy.get('.tabs__content__inner__actions__item.active')
  .should('have.css', 'background-color', 'rgb(132, 50, 155)');
  
});


//all
When('the user clicks on all tab', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('[tabindex="0"][data-ref=""]')
  .click()
});

Then('all tab is activated', () => {
  // More comprehensive hero section verification
  cy.get('.tabs__content__inner__actions__item.active')
  .should('have.css', 'background-color', 'rgb(132, 50, 155)');
});

//resources
When('the user clicks on resources tab', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('[tabindex="0"][data-ref="Resources"]')
  .click()
});

Then('resources tab is activated', () => {
  // More comprehensive hero section verification
  cy.get('.tabs__content__inner__actions__item.active')
  .should('have.css', 'background-color', 'rgb(132, 50, 155)');
});

//other
When('the user clicks on other tab', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('[tabindex="0"][data-ref="Other"]')
  .click()
});

Then('other tab is activated', () => {
  // More comprehensive hero section verification
  cy.get('.tabs__content__inner__actions__item.active')
  .should('have.css', 'background-color', 'rgb(132, 50, 155)');
});

//blogs
When('the user clicks on blogs tab', () => {
  // Wait for cookie banner with timeout and retry
  cy.get('[tabindex="0"][data-ref="Blogs"]')
  .click()
});

Then('blogs tab is activated', () => {
  // More comprehensive hero section verification
  cy.get('.tabs__content__inner__actions__item.active')
  .should('have.css', 'background-color', 'rgb(132, 50, 155)');
});
