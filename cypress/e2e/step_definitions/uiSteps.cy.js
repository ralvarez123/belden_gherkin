import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';


Given('xxxxxx', () => {
  cy.visit('/solutions/industries/automotive-manufacturing', {
      timeout: 30000, // Increased timeout for slow page loads
      failOnStatusCode: false, // Don't fail on non-200 status codes
    }); 
  });

When('I look for the image with alt text {string}', (altText) => {
  cy.get(`img[alt="${altText}"]`).as('targetImage');
});

Then('the image should exist', () => {
  cy.get('@targetImage').should('exist');
});

Then('the image should have the src attribute {string}', (src) => {
  cy.get('@targetImage').should('have.attr', 'src', src);
});

Then('the image should have the alt attribute {string}', (alt) => {
  cy.get('@targetImage').should('have.attr', 'alt', alt);
});

Then('the image should have the fetchpriority attribute {string}', (fetchPriority) => {
  cy.get('@targetImage').should('have.attr', 'fetchpriority', fetchPriority);
});

Then('the image should have a width of {string}', (width) => {
  cy.get('@targetImage').should('have.css', 'width').and('match', new RegExp(width));
});

Then('the image should have a height of {string}', (height) => {
  cy.get('@targetImage').should('have.css', 'height').and('match', new RegExp(height));
});

// .should('have.attr', 'damformat', 'webp');