 Feature: Patents Page

Background:
    Given the user is on the patents page POM
    When the user accepts cookies POM

  Scenario: User visits the patents page and interacts with elements1
    Then the user should see the patents hero title POM

Scenario: User visits the patents page and interacts with elements2
    When the user clicks on "Read More" POM
    Then the user should see the body of the read more section POM

Scenario: User visits the patents page and interacts with elements3
    When the user expands all sections POM
    Then the user should see the first DCX patent POM
    When the user applies a filter POM
    Then the user should see the first result POM

Scenario: User visits the patents page and interacts with elements4
    When the user expands all sections for card
    When the user closes the filter POM
    Then the user should see the patents page without the filter POM

