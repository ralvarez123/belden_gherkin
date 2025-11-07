@regression
Feature: Happy path - Home Page

Background:
    Given The user visits the Belden Home page1
    And The user has accepted the cookie policy on Home1

Scenario: Hero validation on home page
    Then The user should see hero home

Scenario: Why work with us - Lets connect
    Then The user should see Why work with us section
    When The user click on let s connect 
    Then The user should see let s connect page

Scenario: Why work with us - cta find a solution
    When The user click on find a solution CTA
    Then The user should see capabilities page from home









