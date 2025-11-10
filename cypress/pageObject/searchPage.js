// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export class SearchPage {
  SELECTORS = {
    COOKIE_BUTTON: '#onetrust-accept-btn-handler',
    SEARCH_TRIGGER: '.header__search-mobile-trigger',
    SEARCH_FIELD: '.SearchModal__search-box',
    SEARCH_SUGGESTIONS: '.SearchModal__box--right > .SearchModal__heading',
    PRODUCT_TAB: '.tabs__content__inner__actions__item.active',
    ALL_TAB: '[tabindex="0"][data-ref=""]',
    RESOURCES_TAB: '[tabindex="0"][data-ref="Resources"]',
    OTHER_TAB: '[tabindex="0"][data-ref="Other"]',
    BLOGS_TAB: '[tabindex="0"][data-ref="Blogs"]',
  };

  clickCookiesPopup() {
    cy.get(this.SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
  }

  goToGlobalSearch() {
    cy.get(this.SELECTORS.SEARCH_TRIGGER).click();
  }

  typeInSearchField(searchTerm) {
    cy.get(this.SELECTORS.SEARCH_FIELD).click().type(searchTerm);
  }

  verifySearchSuggestions() {
    cy.get(this.SELECTORS.SEARCH_SUGGESTIONS).should('include.text', 'cable');
  }

  exploreMoreProducts() {
    cy.visit("/search#q=cable&t=all-search&sort=relevancy");
  }

  verifyRelatedResults() {
    cy.get('.col-xl-3 > .row > .component > .CoveoQuerySummary > :nth-child(2)')
      .should('include.text', ' matching results');
  }

  verifyProductTabActivated() {
    cy.get(this.SELECTORS.PRODUCT_TAB).should('have.css', 'background-color', 'rgb(132, 50, 155)');
  }

  clickAllTab() {
    cy.get(this.SELECTORS.ALL_TAB).click();
  }

  verifyAllTabActivated() {
    cy.get(this.SELECTORS.PRODUCT_TAB).should('have.css', 'background-color', 'rgb(132, 50, 155)');
  }

  clickResourcesTab() {
    cy.get(this.SELECTORS.RESOURCES_TAB).click();
  }

  verifyResourcesTabActivated() {
    cy.get(this.SELECTORS.PRODUCT_TAB).should('have.css', 'background-color', 'rgb(132, 50, 155)');
  }

  clickOtherTab() {
    cy.get(this.SELECTORS.OTHER_TAB).click();
  }

  verifyOtherTabActivated() {
    cy.get(this.SELECTORS.PRODUCT_TAB).should('have.css', 'background-color', 'rgb(132, 50, 155)');
  }

  clickBlogsTab() {
    cy.get(this.SELECTORS.BLOGS_TAB).click();
  }

  verifyBlogsTabActivated() {
    cy.get(this.SELECTORS.PRODUCT_TAB).should('have.css', 'background-color', 'rgb(132, 50, 155)');
  }
}

