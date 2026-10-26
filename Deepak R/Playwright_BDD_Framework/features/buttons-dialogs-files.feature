Feature: Buttons, dialogs, and file upload
  @AP-BTN-01 @AP-BTN-02 @AP-BTN-03
  Scenario Outline: Practice buttons do not leave the page
    Given I open the SQA Tools automation practice page
    When I click the "<button>" button
    Then the practice page remains open

    Examples:
      | button |
      | Normal Button |
      | Submit |
      | Reset |

  @AP-BTN-03
  Scenario: Reset button does not reset fields outside its form
    Given I open the SQA Tools automation practice page
    When I enter "keep-this-value" into the "username" field
    And I click the "Reset" button
    Then the "username" field contains "keep-this-value"
    And the practice page remains open

  @AP-DLG-01
  Scenario: Accept the simple alert
    Given I open the SQA Tools automation practice page
    When I accept the "Simple Alert" dialog
    Then the dialog message is "This is a simple alert!"
    And the practice page remains open

  @AP-DLG-02
  Scenario Outline: Respond to the confirmation dialog
    Given I open the SQA Tools automation practice page
    When I <action> the "Confirm Alert" dialog
    Then the dialog message is "Do you want to continue?"
    And the practice page remains open

    Examples:
      | action |
      | accept |
      | dismiss |

  @AP-DLG-03
  Scenario: Enter text in the prompt dialog
    Given I open the SQA Tools automation practice page
    When I enter "BDD Tester" and accept the "Prompt Alert" prompt
    Then the dialog message is "Enter your name:"
    And the practice page remains open

  @AP-FILE-01
  Scenario: Upload a small text fixture
    Given I open the SQA Tools automation practice page
    When I upload the sample fixture
    Then the file input contains "upload-sample.txt"
