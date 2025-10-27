Feature: Happy path  Find A Dsitributor

Scenario: Search for a distributor
    Given The user visits the Find a Distributor page
    When The user has accepted the cookie policy
    Then The user should see the Find Distributor hero title

Scenario: Search for a distributor / sort by
    Given The user visits the Find a Distributor page for search
    When The user has accepted the cookie policy for search
    When The user types country United States
    When The user types Product Type Enterprise Racks & Cabinets
    When The user types Clicks on search button
    Then The user should see results

    When The user choose A-Z
    Then The user should see results sorted by A-Z









