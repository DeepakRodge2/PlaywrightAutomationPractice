Feature: Dates, navigation, table, and iframe
  @AP-DATE-01 @AP-DATE-02
  Scenario Outline: Set native date and time inputs
    Given I open the SQA Tools automation practice page
    When I set the "<id>" input to "<value>"
    Then the "<id>" field contains "<value>"

    Examples:
      | id | value |
      | datePicker | 2026-06-15 |
      | timePicker | 13:45 |
      | dateTimePicker | 2026-06-15T13:45 |

  @AP-LINK-02
  Scenario: Navigate to the bottom of the page
    Given I open the SQA Tools automation practice page
    When I click the Go to Bottom link
    Then the bottom of the practice page is visible
    When I return to the top of the page
    Then the main content is visible

  @AP-LINK-01
  Scenario: Verify the external link target without navigating away
    Given I open the SQA Tools automation practice page
    Then the Open Google link points to "https://www.google.com" and opens a new tab

  @AP-TBL-01 @AP-TBL-02
  Scenario Outline: Verify practice table rows
    Given I open the SQA Tools automation practice page
    Then the practice table contains the row "<id>", "<name>", "<role>"

    Examples:
      | id | name | role |
      | 1 | Deepesh | Trainer |
      | 2 | Rahul | Tester |
      | 3 | Anita | Developer |

  @AP-FR-01
  Scenario: Locate the practice iframe without using advertising frames
    Given I open the SQA Tools automation practice page
    Then the practice iframe is present and loaded
