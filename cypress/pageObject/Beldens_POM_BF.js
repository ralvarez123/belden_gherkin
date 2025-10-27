// type definitions for Cypress object "cy"
/// <reference types="cypress" />

export class BeldenPOM_BF {


   // Patents Locators

   patentsPage(){
      return cy.visit("https://redesign.belden.com/knowledge-hub/patents");
     }

   /* patentsPageSTG(){
      return cy.visit("https://stage102.belden.com/knowledge-hub/patents");
     } 
   
    patentsPageProd(){
      return cy.visit("https://www.belden.com/knowledge-hub/patents");
     } */


   Cookies(){
      return cy.get('#onetrust-accept-btn-handler')
     }
      
   patentsHero(){
      return cy.get('.hero__title')
     }
      
   patentsReadMore(){
      return cy.get('.C3StatementContentReadMore__more')
     }

   patentsRMbody(){
      return cy.get('.C3StatementContentReadMore__body')
     }

        
   patentsExpandAllB(){
      return cy.get('[data-toggle="expand"]')
     }

   patentsDCXPatent(){
      return cy.get(':nth-child(1) > .AA1Acordion__content > .M4AccordionGroupTable__accordions__tableWrapper > [data-refselect="DCX and ECX Optical fiber distribution"] > .M4AccordionGroupTable__accordions__tableWrapper__table__title')
     }

   patentsFilter(){
      return cy.get('.active > .AA1Acordion__content > .M4AccordionGroupTable__accordions__buttonWrapper > .button')
     }
   patentsChoose(){
      return cy.get('.M4AccordionGroupTable__accordions__buttonWrapper > ol > :nth-child(1)')
     }
   
   patentsResult(){
      return cy.get('ol > :nth-child(1) > input')
     }

   patentsClose(){
      return cy.get('.active > .AA1Acordion__content > .M4AccordionGroupTable__accordions__buttonWrapper > .button')
      .first().click()
      
     }
     patentsOther(){
      return cy.get('[data-refselect="Belden | REVConnect®"] > .M4AccordionGroupTable__accordions__tableWrapper__table__title')
     }
     
     patentsCard(){
      return cy.get('.cardIcon__container')
     }

   }


   
        
   
    
   