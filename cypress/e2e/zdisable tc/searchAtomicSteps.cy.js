import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from '../../support/page_objects/searchPage';

const searchPage = new SearchPage();

Given('Launch the news atomic url', () => {
  cy.visit('/', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

Given('The user clicks the cookies pop up on news atomic page', () => {
  searchPage.clickCookiesPopup();
});

When('Go to atomic Search and look for cable', () => {
  searchPage.goToGlobalSearch();
});

When('Type {string} on search field - atomic', (searchTerm) => {
  searchPage.typeInSearchField(searchTerm);
});

Then('The search suggestions are available on other tab', () => {
  searchPage.verifySearchSuggestions();
});

When('The users clicks on the first item result', () => {
  // Click on the first search result item
  cy.get('.CoveoResult').first().click();
});

Then('The user validate the info for it', () => {
  // Validate that we're on a product/result page
  cy.url().should('not.contain', '/search');
  cy.get('body').should('be.visible');
});
