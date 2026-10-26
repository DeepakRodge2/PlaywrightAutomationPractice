@smoke
Feature: Practice page availability
  As an automation engineer
  I want to verify the practice page is available
  So that the interaction scenarios have a reliable starting point

  @AP-PG-01
  Scenario: Open the automation practice page
    Given I open the SQA Tools automation practice page
    Then the page title is "Automation Practice Page - SQA Tools"
    And the "Text Fields" section is visible
    And the "Nested Shadow DOM" section is visible

  @AP-PG-02
  @AP-PG-02
  Scenario Outline: Verify the primary practice sections
    Given I open the SQA Tools automation practice page
    Then the "<section>" section is visible

    Examples:
      | section |
      | Radio Buttons |
      | Checkboxes |
      | Dropdown (Select) |
      | Multi Select Dropdown |
      | Buttons |
      | JavaScript Alerts |
      | File Upload |
      | Date and Time Pickers |
      | Links |
      | Web Table |
      | Iframe |
      | Hidden Element |
      | Enabled & Disabled Fields |
      | Image |
      | Mouse Hover |
      | Auto Suggestions (Google Style) |
      | AJAX Success & Network Failure |
      | Stale Element Simulation |
      | Drag and Drop |
      | Keyboard Actions |
      | Leave a Comment |
