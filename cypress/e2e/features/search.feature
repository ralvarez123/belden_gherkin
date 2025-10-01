Feature: Verify search suggestions

  Scenario: Search Sugesstions
    Given Launch the home url
    When The user clicks the cookies pop up
    And Go to Global Search
    And Type "cable" on search field
    Then The search suggestions are available


 