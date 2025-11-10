Feature: Patents Page Functionality

  Background:
    Given I am on the patents page
    And I have accepted the cookie policy

  
  Scenario: User views a patent card
    When I expand all patents
    And I click on a patent card
    Then I should see the header on the PPC Online page