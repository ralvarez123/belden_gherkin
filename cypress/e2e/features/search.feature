@regression
Feature: Verify search suggestionsnn

Scenario: Search Sugesstions
    Given Launch the home url
    And The user clicks the cookies pop up
    When Go to Global Search
    And Type "cable" on search field
    Then The search suggestions are available
    And Explore more products
    And The user can see the results related
    Then Product tab is activated
    When the user clicks on all tab
    Then all tab is activated
    When the user clicks on resources tab
    Then resources tab is activated
    When the user clicks on other tab
    Then other tab is activated
    When the user clicks on blogs tab
    Then blogs tab is activated

   
