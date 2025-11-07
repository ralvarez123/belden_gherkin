@regression
Feature: Happy path - Home Page

 Background:
    Given The user visits the Belden Home page2
    And The user has accepted the cookie policy on Home2

Scenario: Find a solution
    Then The user should see find a solution section
    When The user click on explore all capabilities
    Then The user should see capabilities page from all capabilities 


Scenario: change tab under find a solution
    When The user click on network resilience tab
    Then The user should see network resilience info


Scenario: learn more of network resilience
    When The user click on learn more button
    Then The user should see network resilience page








