@regression
Feature: Happy path - Home Page

Background:
    Given The user visits the Belden Home page3
    And The user has accepted the cookie policy on Home3

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





