@regression
Feature: Happy path - Home Page

 Background:
    Given The user visits the Belden Home page7
    And The user has accepted the cookie policy on Home7

Scenario: facebook icon
    Then The user should see footer section

Scenario: Quick links - contact us
    When The user click on quick link
    Then The user should see contact us page - from that link


Scenario: About belden - News
     When The user clicks on about belden
    Then The user should see news page - from that link

Scenario: Privacy Policy
     When The user clicks on Privacy Policy
    Then The user should see privacy policy page










