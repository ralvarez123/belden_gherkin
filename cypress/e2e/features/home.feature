Feature: Happy path - Home Page

Background:
    Given The user visits the Belden Home page
    And The user has accepted the cookie policy on Home

Scenario: Hero validation on home page
    Then The user should see hero home

Scenario: Why work with us - Lets connect
    Then The user should see Why work with us section
    When The user click on let s connect 
    Then The user should see let s connect page

Scenario: Why work with us - cta find a solution
    When The user click on find a solution CTA
    Then The user should see capabilities page from home

Scenario: Find a solution
    Then The user should see find a solution section
    When The user click on explore all capabilities
    Then The user should see capabilities page from all capabilities 


Scenario: change tab under find a solution
    When The user click on network resilience tab
    Then network resilience info


Scenario: learn more of network resilience
    When The user click on learn more button
    Then The user should see network resilience page

Scenario: Our Industries
    Then The user should see our industries section
    When The user click on healthcare tab
    Then The user should see healthcare info


Scenario: learn more about healthcare
    When The user click on learn more about healthcare
    Then The user should see healthcare page


Scenario: Our industries - Explore all industries
    When The user click on explore all industries
    Then The user should see industries pages






