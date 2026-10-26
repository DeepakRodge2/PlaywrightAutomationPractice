Feature: Practice form controls
  @AP-TF-01 @AP-TF-02
  Scenario: Enter values into the text fields
    Given I open the SQA Tools automation practice page
    When I enter "bdd-user" into the "username" field
    And I enter "secret-value" into the "password" field
    And I enter "First line\nSecond line" into the "address" field
    Then the "username" field contains "bdd-user"
    And the "password" field contains "secret-value"
    And the "password" field is masked
    And the "address" field contains "First line\nSecond line"

  @AP-TF-03
  Scenario: Replace and clear text field values
    Given I open the SQA Tools automation practice page
    When I enter "first value" into the "username" field
    And I enter "replacement value" into the "username" field
    Then the "username" field contains "replacement value"
    When I enter "" into the "username" field
    Then the "username" field contains ""

  @AP-SEL-01
  Scenario Outline: Select one radio option at a time
    Given I open the SQA Tools automation practice page
    When I select the "<id>" radio option
    Then the "<id>" radio option is selected

    Examples:
      | id |
      | male |
      | female |
      | other |

  @AP-SEL-01
  Scenario: Selecting another radio option replaces the previous selection
    Given I open the SQA Tools automation practice page
    When I select the "male" radio option
    And I select the "female" radio option
    Then the "female" radio option is selected
    And the "male" radio option is not selected

  @AP-SEL-02
  Scenario: Toggle skill checkboxes independently
    Given I open the SQA Tools automation practice page
    When I set the "java" checkbox to "checked"
    And I set the "python" checkbox to "checked"
    Then the "java" checkbox is "checked"
    And the "python" checkbox is "checked"
    And the "selenium" checkbox is "unchecked"

  @AP-SEL-05
  Scenario: Clear a previously selected checkbox
    Given I open the SQA Tools automation practice page
    When I set the "java" checkbox to "checked"
    And I set the "java" checkbox to "unchecked"
    Then the "java" checkbox remains unchecked

  @AP-SEL-03
  Scenario Outline: Choose a country from the dropdown
    Given I open the SQA Tools automation practice page
    When I choose "<country>" in the "country" dropdown
    Then the "country" dropdown has the selected value "<value>"

    Examples:
      | country | value |
      | India | india |
      | USA | usa |
      | UK | uk |
      | Australia | australia |

  @AP-SEL-05
  Scenario: Country selection returns to its default after reload
    Given I open the SQA Tools automation practice page
    When I choose "India" in the "country" dropdown
    And I reload the practice page
    Then the "country" dropdown has the selected value ""

  @AP-SEL-04
  Scenario: Select multiple skills
    Given I open the SQA Tools automation practice page
    When I select "Python" and "Playwright" from the "skills" list
    Then the "skills" list has selected values "Python" and "Playwright"

  @AP-STATE-02
  Scenario: Verify enabled and disabled fields
    Given I open the SQA Tools automation practice page
    Then the enabled field accepts text and the disabled field cannot be edited
