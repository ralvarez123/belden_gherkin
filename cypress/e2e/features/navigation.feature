Feature: Happy path - Navigation

Background:
    Given I visit the home
    And I have accepted the cookie policyy
    And go to menu option

  Scenario: Go home
    Then The user should see home

Scenario: Go find a distributor
    When The user clicks on find a distributor tab
    Then The user should see find a distributor page


Scenario: Go find an installer
    When The user clicks on find an installer tab
    Then The user should see find an installer page


Scenario: Go blogs
    When The user clicks on blogs tab
    Then The user should see blog page


Scenario: Go news
    When The user clicks on news tab
    Then The user should see news page

Scenario: Go contact us
    When Close hamburger menu
    And The user clicks on support menu
    Then The user should see contact us page

Scenario: Go Capbilities
    When The user clicks on solutions tab
    When The user clicks on capabilities
    When The user clicks on explore all capabilities
    Then The user should see capabilities page