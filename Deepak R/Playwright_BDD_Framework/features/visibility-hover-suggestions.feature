Feature: Visibility, hover, and suggestions
  @AP-STATE-01
  Scenario: Verify the hidden practice field
    Given I open the SQA Tools automation practice page
    Then the hidden field is not visible and retains its default value

  @AP-IMG-01
  Scenario: Verify the practice image
    Given I open the SQA Tools automation practice page
    Then the sample image has loaded with alternative text "Sample Image"

  @AP-HOV-01
  Scenario: Verify hover tooltip
    Given I open the SQA Tools automation practice page
    When I hover over the hover practice button
    Then the hover button exposes the tooltip "Hover text"

  @AP-SUG-01
  Scenario: Select an auto-suggestion
    Given I open the SQA Tools automation practice page
    When I enter "play" into the suggestions search box
    Then the suggestions include "Playwright"
    When I choose the "Playwright" suggestion
    Then the search box contains the selected suggestion "Playwright"

  @AP-SUG-02
  Scenario: No-match search returns no suggestions
    Given I open the SQA Tools automation practice page
    When I enter "no-such-suggestion" into the suggestions search box
    Then the suggestions list is empty
