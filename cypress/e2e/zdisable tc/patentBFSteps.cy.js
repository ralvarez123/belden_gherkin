import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { convertToObject } from 'typescript';

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { BeldenPOM_BF } from "../../pageObject/Beldens_POM_BF.js";

const BeldensPOM_BF = new BeldenPOM_BF();

Given('I am on the patents page', () => {
  BeldensPOM_BF.patentsPage();
});

Given('I have accepted the cookie policy', () => {
  BeldensPOM_BF.Cookies().click();
});
/*
When('I check the hero title', () => {
  BeldensPOM_BF.patentsHero().should('have.text', 'Patents');
});

When('I click on the "Read More" button', () => {
  BeldensPOM_BF.patentsReadMore().click();
});

Then('I should see the C3 Statement body containing {string}', (text) => {
  BeldensPOM_BF.patentsRMbody().should('include.text', text);
});

When('I expand all patents', () => {
  BeldensPOM_BF.patentsExpandAllB().click();
});

Then('I should see {string}', (text) => {
  BeldensPOM_BF.patentsDCXPatent().should('have.text', text);
});

When('I click on the first filter', () => {
  BeldensPOM_BF.patentsFilter().first().click();
});

When('I choose a result', () => {
  BeldensPOM_BF.patentsChoose().should('be.visible');
  BeldensPOM_BF.patentsResult().click();
});

When('I close the filter', () => {
  BeldensPOM_BF.patentsClose().first().click();
});

Then('I should see {string}', (text) => {
  BeldensPOM_BF.patentsOther().should('have.text', text);
});
*/
//User views a patent card

When('I expand all patents', () => {
  cy.get('[data-toggle="expand"]').click();
});

When('I click on a patent card', () => {
  cy.get('.cardIcon__container').click();
});

Then('I should see the header on the PPC Online page', () => {
  cy.origin('https://www.ppc-online.com', () => {
    cy.get('.Header-Col2-Outer').should('be.visible');
  });
});