Feature: Comment form validation without publishing public content
  @AP-CMT-01
  Scenario: Fill valid synthetic comment values without submitting
    Given I open the SQA Tools automation practice page
    When I fill the comment form with safe test data
    Then the comment form accepts the valid test values without submission

  @AP-CMT-03
  Scenario: Reject malformed email input
    Given I open the SQA Tools automation practice page
    When I enter an invalid email address into the comment form
    Then the comment email field is invalid
    And the comment form remains unsubmitted

  @AP-CMT-02
  Scenario: Validate missing required comment fields without submitting
    Given I open the SQA Tools automation practice page
    Then the required comment fields are invalid and the form remains unsubmitted

  @AP-CMT-04
  Scenario: Toggle the save-details checkbox
    Given I open the SQA Tools automation practice page
    When I toggle the save-details checkbox
    Then the save-details checkbox reflects the changed state
