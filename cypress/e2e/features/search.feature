Feature: Verify search suggestions

  Scenario: Search Sugesstions
    Given Launch the home url
    And The user clicks the cookies pop up
    When Go to Global Search
    And Type "cable" on search field
    Then The search suggestions are available
    And Explore more products
    And The user can see the results related
    And Product tab is activated
    And the user clicks on all tab
    And all tab is activated
    And the user clicks on resources tab
    And resources tab is activated
    And the user clicks on other tab
    And other tab is activated
    And the user clicks on blogs tab
    And blogs tab is activated

   


