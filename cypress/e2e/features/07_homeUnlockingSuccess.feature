@regression
Feature: Happy path - Home Page

 Background:
    Given The user visits the Belden Home page6
    And The user has accepted the cookie policy on Home6

Scenario: Unlocking success component
    Then The user should see the Unlocking success component

Scenario: Explore all
    When The user click on  explore all button
    Then The user should see resources page


Scenario: Click on new hospitality card 
     When The user clicks on new hospitality card
    Then The user should see the new hospitality page











