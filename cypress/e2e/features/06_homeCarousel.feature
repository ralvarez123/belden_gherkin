@regression
Feature: Happy path - Home Page

 Background:
    Given The user visits the Belden Home page5
    And The user has accepted the cookie policy on Home5

Scenario: carousel component
    Then The user should see the carousel

Scenario: carousel cta link
    When The user click on read more
    Then The user should see the read more info


Scenario: Carousel navigation
     When The user click on the right arrow
    Then The user should see the second card











