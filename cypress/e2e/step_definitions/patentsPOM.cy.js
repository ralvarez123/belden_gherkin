// Import the BeldenPOM_BF class
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { BeldenPOM_BF } from "../../pageObject/Beldens_POM_BF.js";

const beldenPOM = new BeldenPOM_BF();

Given('the user is on the patents page POM', () => {
  beldenPOM.patentsPage();
});

Given('the user accepts cookies POM', () => {
  beldenPOM.Cookies().click();
});

Then('the user should see the patents hero title POM', () => {
  beldenPOM.patentsHero().should('be.visible');
});

When('the user clicks on "Read More" POM', () => {
  beldenPOM.patentsReadMore().click();
});

Then('the user should see the body of the read more section POM', () => {
  beldenPOM.patentsRMbody().should('be.visible');
});

When('the user expands all sections POM', () => {
  beldenPOM.patentsExpandAllB().click();
});

Then('the user should see the first DCX patent POM', () => {
  beldenPOM.patentsDCXPatent().should('be.visible');
});

When('the user applies a filter POM', () => {
  beldenPOM.patentsFilter().click();
  beldenPOM.patentsChoose().click();
});

Then('the user should see the first result POM', () => {
  beldenPOM.patentsResult().should('be.visible');
});

When('the user expands all sections for card', () => {
  beldenPOM.patentsExpandAllB().click();
});

When('the user closes the filter POM', () => {
  beldenPOM.patentsClose();
});

Then('the user should see the patents page without the filter POM', () => {
  beldenPOM.patentsCard().should('be.visible');
});