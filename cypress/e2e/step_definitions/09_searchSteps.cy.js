import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from '../../support/page_objects/searchPage';

const searchPage = new SearchPage();

Given('Launch the home url', () => {
  cy.visit('/', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

Given('The user clicks the cookies pop up', () => {
  searchPage.clickCookiesPopup();
});

When('Go to Global Search', () => {
  searchPage.goToGlobalSearch();
});

When('Type {string} on search field', (searchTerm) => {
  searchPage.typeInSearchField(searchTerm);
});

Then('The search suggestions are available', () => {
  searchPage.verifySearchSuggestions();
});

When('Explore more products', () => {
  searchPage.exploreMoreProducts();
});

When('The user can see the results related', () => {
  searchPage.verifyRelatedResults();
});

Then('Product tab is activated', () => {
  searchPage.verifyProductTabActivated();
});

When('the user clicks on all tab', () => {
  searchPage.clickAllTab();
});

Then('all tab is activated', () => {
  searchPage.verifyAllTabActivated();
});

When('the user clicks on resources tab', () => {
  searchPage.clickResourcesTab();
});

Then('resources tab is activated', () => {
  searchPage.verifyResourcesTabActivated();
});

When('the user clicks on other tab', () => {
  searchPage.clickOtherTab();
});

Then('other tab is activated', () => {
  searchPage.verifyOtherTabActivated();
});

When('the user clicks on blogs tab', () => {
  searchPage.clickBlogsTab();
});

Then('blogs tab is activated', () => {
  searchPage.verifyBlogsTabActivated();
});
