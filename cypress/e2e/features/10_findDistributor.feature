@regression2
Feature: Happy path Find A Distributor

   Background:
    Given The user visits the Find a Distributor page
    When The user has accepted the cookie policy
  
  Scenario: Search for a distributor
    Then The user should see the Find Distributor hero title

  Scenario: Search for a distributor / sort by
    When The user types country United States
    When The user types Product Type Enterprise Racks & Cabinets
    When The user submits the search form
    Then The user should see results
    When The user clicks on change option
    When The user types Product Type Industrial cable
    When The user submits the search form2
    Then The user should see results2
   









