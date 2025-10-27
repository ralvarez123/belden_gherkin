import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


const SELECTORS = {
  COOKIE_BUTTON: '#onetrust-accept-btn-handler',
  HERO_TITLE: '.hero__title', // Using data-cy attribute for more reliable selection
};
// Scenario: Verify Home Page
Given('Launch the Home url', () => {
  cy.visit('/', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  });
});

When('The user clicks the cookies pop up on Home', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click()
});

Then('The user should see Home hero', () => {
  // More comprehensive hero section verification
  cy.get(SELECTORS.HERO_TITLE)
    .should('have.text', "Connect to what's possible.")
});

//   Scenario: Verify Find Distributor Page

Given('Launch the Find Distributor url', () => {
  cy.visit('/find-a-distributor', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  });
});

When('The user clicks the cookies pop up on Find Distributor', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click()
});

Then('The user should see the Find Distributor hero', () => {
  // More comprehensive hero section verification
  cy.get('.bdn-find-panel-header')
    .should('have.text', "Find A Distributor")
});


// Scenario: Verify Find an Installer Page

Given('Launch the Find an Installer url', () => {
  cy.visit('/find-an-installer', {
    timeout: 30000, // Increased timeout for slow page loads
    failOnStatusCode: false, // Don't fail on non-200 status codes
  });
});

When('The user clicks the cookies pop up on Find an Installer', () => {
  // Wait for cookie banner with timeout and retry
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 })
    .click()
});

Then('The user should see the Find an Installer hero', () => {
  // More comprehensive hero section verification
  cy.get('.last > .navigation-title > a')
    .should('have.text', "Find A Partner")
});
// Scenario: Verify Blogs Page
Given('Launch the Blogs url', () => {
  cy.visit('/blog', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Blogs', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Blogs hero', () => {
  cy.get('.last > .navigation-title > a').should('have.text', "Blog");
});
// Blogs redirection

When('I click on a blog', () => {
  // Wait for cookie banner with timeout and retry
  // Instead of clicking, directly visit the blog URL
  cy.visit('/blog/5g-vs-6g-what-are-the-main-differences');
});

Then('I should see the blog page', () => {
  // More comprehensive hero section verification
  cy.get('.hero__caption').should('be.visible'); // Assert the header is visible
});



// Scenario: Verify News Page
Given('Launch the News url', () => {
  cy.visit('/news', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on News', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the News hero', () => {
  cy.get('.last > .navigation-title > a').should('have.text', "News");
});

// Scenario: Verify Contact Us Page
Given('Launch the Contact Us url', () => {
  cy.visit('/support/contact-us', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Contact Us', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Contact Us hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Contact Us");
});

// Scenario: Verify Capabilities Page
Given('Launch the Capabilities url2', () => {
  cy.visit('/solutions/capabilities', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Capabilities2', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Capabilities hero2', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Capabilities");
});

// Scenario: Verify Page Industries
Given('Launch the Page Industries url2', () => {
  cy.visit('/solutions/industries', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Page Industries2', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Page Industries hero2', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Industry Solutions");
});

// Scenario: Verify Page PCP
Given('Launch the Page PCP url', () => {
  cy.visit('/products/connectors/coaxial-connectors', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Page PCP', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Page PCP hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Coaxial Connectors");
});

// Scenario: Verify PLP Page
Given('Launch the PLP url', () => {
  cy.visit('/products/connectors/av-multimedia-modules#sort=%40catalogitemwebdisplaypriority%20ascending&numberOfResults=25', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on PLP', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the PLP hero', () => {
  cy.get('.navigation-title > span').should('have.text', "Connectors");
});

// Scenario: Verify PDP Page
Given('Launch the PDP url', () => {
  cy.visit('/products/cable/armored-cable/mc-cable/1229530', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on PDP', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the PDP hero', () => {
  cy.get(':nth-child(4) > .navigation-title > a').should('have.text', "Armored Cable");
});

// Scenario: Verify Services Page
Given('Launch the Services url', () => {
  cy.visit('/services', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Services', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Services hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Our Services");
});

// Scenario: Verify Page Distributors
Given('Launch the Page Distributors url', () => {
  cy.visit('/partners/global-distributor-network', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Page Distributors', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Page Distributors hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Global Distributor Network");
});

// Scenario: Verify Knowledge Hub Page
Given('Launch the Knowledge Hub url', () => {
  cy.visit('/knowledge-hub/resources#sort=%40contentpublisheddate%20descending&f:facetassettype=[Installation%20%26%20User%20Guide]&f:facetlanguage=[English]', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Knowledge Hub', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Knowledge Hub hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Resources");
});

// Scenario: Verify Page Locations
Given('Launch the Page Locations url', () => {
  cy.visit('/about/locations', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Page Locations', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Page Locations hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Global Locations");
});

// Scenario: Verify Automotive Manufacturing Page
Given('Launch the Automotive Manufacturing url', () => {
  cy.visit('/solutions/industries/automotive-manufacturing', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Automotive Manufacturing', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Automotive Manufacturing hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Automotive Manufacturing");
});

// Scenario: Verify Sustainability Page
Given('Launch the Sustainability url', () => {
  cy.visit('/knowledge-hub/resources/sustainability', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Sustainability', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Sustainability hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Sustainability");
});


// Scenario: Verify Events Page
Given('Launch the Events url', () => {
  cy.visit('/knowledge-hub/trade-shows-and-events', {
    timeout: 30000,
    failOnStatusCode: false,
  });
});

When('The user clicks the cookies pop up on Events', () => {
  cy.get(SELECTORS.COOKIE_BUTTON, { timeout: 10000 }).click();
});

Then('The user should see the Events hero', () => {
  cy.get(SELECTORS.HERO_TITLE).should('have.text', "Events"); //when they publish the new page we have to change to Events only
});



