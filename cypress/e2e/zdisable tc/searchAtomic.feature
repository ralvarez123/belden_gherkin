@atomic
Feature: Verify search suggestionsnn



Background:
    Given Launch the news atomic url
    And The user clicks the cookies pop up on news atomic page
    And Go to atomic Search and look for cable
    And Type "cable" on search field - atomic

Scenario: Search result for cable
    Then The search suggestions are available on other tab

Scenario: Search Sugesstions coveo item one
    When The users clicks on the first item result
    And The user validate the info for it


   
