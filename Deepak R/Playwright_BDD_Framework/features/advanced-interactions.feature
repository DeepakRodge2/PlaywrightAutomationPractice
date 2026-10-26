Feature: Advanced browser interactions
  @AP-AJAX-01 @AP-AJAX-02
  Scenario Outline: Display the AJAX action result
    Given I open the SQA Tools automation practice page
    When I trigger the "<action>" AJAX action
    Then the AJAX result is "<result>"

    Examples:
      | action | result |
      | Load Success | Data loaded successfully! |
      | Simulate Network Failure | Network Error (500) |

  @AP-STALE-01
  Scenario: Replace the stale-element simulation button
    Given I open the SQA Tools automation practice page
    When I replace the stale-element button
    Then the replacement button is present with text "New Button (Old is Stale)"

  @AP-DRAG-01
  Scenario: Drag the source item into the drop target
    Given I open the SQA Tools automation practice page
    When I drag the source item into the drop target
    Then the source item is inside the drop target

  @AP-KEY-01
  Scenario: Report the key pressed in the keyboard example
    Given I open the SQA Tools automation practice page
    When I press the "x" key in the keyboard practice field
    Then the keyboard result is "Key Pressed: x"

  @AP-SHADOW-01
  Scenario: Read and interact with nested shadow DOM content
    Given I open the SQA Tools automation practice page
    Then the nested shadow DOM text is "Nested Shadow DOM Text"
    When I enter text into the nested shadow input
    Then the nested shadow input contains "Shadow value"
