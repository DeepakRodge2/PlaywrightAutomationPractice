# Cucumber Automation Test Plan

## 1. Purpose

Define a browser-automation test plan for the [SQA Tools Automation Practice Page](https://sqatools.in/automation-practice-page/) using Cucumber-style Gherkin scenarios and Playwright browser automation.

This is a practice page, not a single end-to-end business workflow. The suite should validate the page's individual interaction patterns independently, with small cohesive scenarios and deterministic test data.

## 2. System under test

| Item | Details |
|---|---|
| Application | SQA Tools - Automation Practice Page |
| Base URL | `https://sqatools.in/automation-practice-page/` |
| Page title observed | `Automation Practice Page - SQA Tools` |
| Observation date | 2026-10-26 |
| Browser automation | Playwright |
| BDD runner | Cucumber.js (recommended) |
| Test environment | Public website; no dedicated test tenant or test data reset API was identified |

The page currently exposes sections for text fields, radio buttons, checkboxes, single- and multi-select dropdowns, buttons, JavaScript alerts, file upload, date/time pickers, links, a web table, iframe, hidden element, enabled/disabled fields, image, hover, auto suggestions, AJAX success/failure, stale-element simulation, drag and drop, keyboard actions, nested shadow DOM, and a comment form. Treat this inventory as subject to change.

## 3. Objectives

1. Verify that the page loads and its practice controls are available and usable.
2. Verify the expected browser interaction semantics for each control type.
3. Exercise positive, negative, boundary, and reset/reload behavior where applicable.
4. Keep scenarios independent, readable to non-developers, and traceable to a feature.
5. Detect regressions without depending on advertising, analytics, third-party availability, or unstable implementation details.

## 4. Scope

### In scope

- Page navigation, title, key sections, and primary controls.
- Input, selection, buttons, alerts/dialogs, upload, date/time, and comment-form behavior.
- Table content and navigation/scroll links.
- Frame access, hidden/disabled state, image presence, and hover behavior.
- Advanced interactions: suggestions, asynchronous success/failure, stale-element simulation, drag/drop, keyboard actions, and nested shadow DOM.
- Basic desktop Chromium regression coverage, with additional browser/device runs where supported by the target page and project setup.
- Accessibility-oriented checks for labels, keyboard reachability, focus, and meaningful accessible names on controls covered by the scenarios.

### Out of scope

- Testing SQA Tools account, login, booking, or other pages as independent applications.
- Validating third-party ad content, analytics delivery, CAPTCHA internals, or external sites' functionality.
- Load, stress, penetration, or destructive testing of the public site.
- Verifying server-side comment persistence or email delivery unless an explicitly approved test account/data-reset strategy is provided.
- Assertions against unstable ads, exact styling/pixels, or implementation-specific CSS/XPath structure.

## 5. Test approach and priorities

| Priority | Purpose | Suggested coverage |
|---|---|---|
| P0 - Smoke | Confirm the target page is reachable and core controls render | Page shell, main heading, representative form controls, primary buttons |
| P1 - Core regression | Validate each practice control's main interaction and result | All sections listed in the coverage matrix |
| P2 - Robustness/accessibility | Boundary values, keyboard/focus, viewport, reload/reset, and error paths | Applicable scenarios after stable P0/P1 coverage |

- Run scenarios independently; do not rely on execution order or previous scenario state.
- Use explicit waits for user-visible state changes and dialog events, not fixed sleeps.
- Use accessible roles/names or stable IDs where available. Avoid brittle positional selectors and page-wide text matching.
- For any behavior not specified by the page, first observe and record the intended result manually, then make the expected result explicit in the scenario. Do not encode guesses as acceptance criteria.
- A timeout, browser crash, navigation failure, unexpected dialog, or uncaught page error should fail with useful diagnostic output rather than silently pass.

## 6. Feature coverage and candidate scenarios

The IDs below are test-plan identifiers for traceability; use them in scenario names or tags, for example `@AP-TF-01`.

### A. Page shell and text fields

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-PG-01 | Open the practice page | URL resolves to the target page; title and primary heading are correct; no blocking error state is shown. |
| AP-PG-02 | Inspect the practice sections | Each in-scope section heading and its representative control is visible and enabled when expected. |
| AP-TF-01 | Enter username and password | Each field accepts input; password characters are masked; entered values remain in their respective fields. |
| AP-TF-02 | Enter multiline address | Text area accepts multiline input and preserves entered line breaks. |
| AP-TF-03 | Clear and replace field values | Fields can be cleared and re-entered; values do not leak between controls. |
| AP-TF-04 | Submit form with representative valid values | Submission/result behavior matches the page's observed contract; verify the exact result before finalizing the assertion. |

### B. Radio buttons, checkboxes, and dropdowns

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-SEL-01 | Select each gender radio option | Exactly one option in the radio group is checked at a time. |
| AP-SEL-02 | Toggle each skill checkbox independently | Each checkbox toggles independently; other checkbox states are unchanged. |
| AP-SEL-03 | Choose each country in the single-select dropdown | The selected option is reflected as the current value; placeholder/default state is available on a fresh page if present. |
| AP-SEL-04 | Select multiple skills | Each requested option can be selected; selected values match the requested set. |
| AP-SEL-05 | Change and clear selections | Selection state updates correctly; reset/reload behavior matches the page's native or documented behavior. |

### C. Buttons, dialogs, and file upload

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-BTN-01 | Activate Normal Button | The documented/observed page effect occurs once without unintended navigation. |
| AP-BTN-02 | Submit the practice form | The form's observed validation/submission result is shown; do not assume a server-side success message. |
| AP-BTN-03 | Reset the practice form | Native form controls return to their initial values/states, subject to confirmation of actual page behavior. |
| AP-DLG-01 | Accept the simple JavaScript alert | The dialog message is captured and the alert is dismissed; subsequent page interaction remains possible. |
| AP-DLG-02 | Accept and dismiss the confirmation dialog | Both confirm and cancel paths produce their respective observed page outcomes. |
| AP-DLG-03 | Enter text in the prompt dialog | The entered value and a dismissed/empty prompt path produce the correct observed outcomes. |
| AP-FILE-01 | Upload a supported small fixture | The file input receives the intended file; any visible filename/result is correct. |
| AP-FILE-02 | Upload an unsupported or absent file | Rejection/validation behavior is as observed; no machine-specific path is asserted. |

### D. Date/time controls, navigation, table, and frame

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-DATE-01 | Choose a valid date | The date input contains the selected date in its browser value format. |
| AP-DATE-02 | Choose a valid time and date-time | The time and local date-time values are accepted and independently represented. |
| AP-DATE-03 | Attempt invalid or out-of-range date/time values | Native validation or the page's explicit validation prevents or reports invalid input. Confirm browser-specific constraints before asserting. |
| AP-LINK-01 | Follow the page's Open Google link | Link destination and target behavior match the rendered link; external page content is not a release gate. |
| AP-LINK-02 | Use Go to Bottom and return to the page top | The fragment/scroll position reaches the expected target; navigation does not break the page. |
| AP-TBL-01 | Read the web table | Headers and row/column structure are correct; current sample rows are `1 / Deepesh / Trainer`, `2 / Rahul / Tester`, and `3 / Anita / Developer`. |
| AP-TBL-02 | Verify table data without row-order assumptions | Locate rows by stable cell values and confirm each expected row's fields. |
| AP-FR-01 | Inspect and interact with the practice iframe | Identify the intended practice iframe (not advertising frames); verify its load/accessibility and content only after confirming the expected frame contract. |

### E. Visibility, enabled state, image, hover, and suggestions

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-STATE-01 | Inspect the hidden-element example | The designated hidden element is not user-visible; verify any paired reveal action only if one exists. |
| AP-STATE-02 | Compare enabled and disabled fields | Enabled field accepts input; disabled field does not accept user edits and exposes the correct disabled state. |
| AP-IMG-01 | Verify the practice image | Intended image is present, loads successfully, and has suitable alternative text where applicable. |
| AP-HOV-01 | Hover over the hover control | The expected hover-only feedback/content appears; moving the pointer away restores the baseline state if applicable. |
| AP-SUG-01 | Enter a query in the auto-suggestion field | Suggestions appear for a matching query; selecting one populates the field/result as observed. |
| AP-SUG-02 | Enter a query with no matches and dismiss suggestions | Empty/no-match state and dismissal behavior are stable and do not select an unintended value. |

### F. Asynchronous behavior and advanced interactions

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-AJAX-01 | Trigger Load Success | A success result appears within a bounded wait and is associated with the success action. |
| AP-AJAX-02 | Trigger Simulate Network Failure | Failure is surfaced in the intended UI/result; automation reports the scenario outcome rather than masking the error. |
| AP-STALE-01 | Activate the stale-element simulation | The replacement/state change occurs; the test reacquires the current element before the next action and verifies the new state. |
| AP-DRAG-01 | Drag the source into the drop target | The target reports the expected drop/accepted state; invalid drop behavior is captured if the page supports it. |
| AP-KEY-01 | Exercise supported keyboard actions | Keyboard input/shortcuts produce the expected visible state; focus and key handling are verified without relying on a specific physical keyboard layout. |
| AP-SHADOW-01 | Read or interact with nested shadow DOM content | The intended nested element is reachable through supported Playwright locators and its visible result is correct. |

### G. Comment form

| ID | Scenario | Expected result / oracle |
|---|---|---|
| AP-CMT-01 | Submit the comment form with valid required fields | Required fields accept valid data and the observed confirmation/result appears. Use reserved, non-personal test data. |
| AP-CMT-02 | Submit with each required field missing | Validation identifies required input and submission is prevented or rejected as observed. |
| AP-CMT-03 | Enter malformed email or URL values | Browser/page validation behaves as expected; invalid values are not represented as successful submission. |
| AP-CMT-04 | Toggle the save-details checkbox and reload | Checkbox state and any persistence behavior match the user's selection and the site's actual policy. Avoid assertions that require retaining personal data. |

## 7. Cucumber feature-file organization

Recommended feature files:

```text
features/
  page-shell.feature
  form-controls.feature
  buttons-and-dialogs.feature
  file-and-date-controls.feature
  navigation-table-and-frame.feature
  visibility-hover-and-suggestions.feature
  asynchronous-and-advanced-interactions.feature
  comment-form.feature
```

Keep scenarios behavioral. Reuse step definitions for shared actions such as opening the practice page, selecting a named option, accepting/dismissing a dialog, and checking a visible result. Keep Playwright locator details in page objects or focused helper methods rather than in Gherkin.

### Example Gherkin

```gherkin
@smoke @AP-PG-01
Feature: Practice page availability
  Scenario: Open the automation practice page
    Given I open the SQA Tools automation practice page
    Then the page title is "Automation Practice Page - SQA Tools"
    And the "Text Fields" section is visible

@regression @AP-SEL-04
Feature: Multi-select dropdown
  Scenario: Select multiple skills
    Given I open the SQA Tools automation practice page
    When I select "Python" and "Playwright" from the skills list
    Then the selected skills are "Python" and "Playwright"

@regression @AP-DLG-02
Feature: Confirmation dialog
  Scenario Outline: Respond to the confirmation dialog
    Given I open the SQA Tools automation practice page
    When I activate the confirm alert and choose "<choice>"
    Then the page shows the result for "<choice>"

    Examples:
      | choice |
      | accept |
      | dismiss |
```

Replace any example assertion with the exact observed page result before treating the scenario as an acceptance test.

## 8. Test data and isolation

- Use synthetic values such as `bdd.user@example.test`, `QA Test User`, and non-sensitive comments.
- Keep file fixtures small, checked into the test project, and limited to approved benign formats. Do not use a developer's personal files or absolute local paths.
- Use fixed valid dates/times and separate boundary cases; avoid dates relative to the current day unless the behavior specifically requires it.
- Reset page state by opening a fresh page or reloading between scenarios. Do not depend on cookie/comment persistence unless that behavior is explicitly under test.
- Give each scenario its own browser context where feasible. Clean up created files and close dialogs/contexts even on failure.
- Do not submit repeated or personal comments to the public site. Confirm whether comment submission is safe/approved before enabling those scenarios in routine CI.

## 9. Cucumber/Playwright framework expectations

- Configure a single explicit base URL and environment-specific settings; never embed secrets in feature files or code.
- Use Cucumber hooks for browser/context/page setup and teardown, with teardown guaranteed after failures.
- Use page objects/components to group locators by page section; expose user-level actions and observable outcomes rather than raw selectors in feature steps.
- Use locator auto-waiting and assertions on visible state. For dynamic actions, wait for the specific result/state change with a timeout appropriate to the public site.
- Attach screenshots, Playwright traces, and relevant logs on failure; avoid attaching personal data or unnecessary page content.
- Keep browser dialogs handled explicitly within the scenario that triggers them.
- Use a small, stable smoke suite on pull requests; run the broader regression suite on a schedule or approved CI run. Mark unreliable/third-party-dependent checks explicitly rather than silently skipping them.
- Suggested tags: `@smoke`, `@regression`, `@forms`, `@dialogs`, `@async`, `@accessibility`, `@external`, and feature-specific IDs such as `@AP-AJAX-02`.

## 10. Browser, viewport, and compatibility coverage

1. Begin with desktop Chromium as the baseline.
2. Add Firefox and WebKit once each feature is stable in Chromium and cross-browser execution is supported.
3. Include one narrow/mobile viewport pass for responsive layout, page scrolling, and touch-relevant interactions; do not assume every advanced desktop interaction applies on mobile.
4. Validate native date/time inputs separately across browsers because presentation and accepted formats vary.
5. Record browser/version, viewport, operating system, and test run ID for failures.

## 11. Non-functional checks

- **Usability/accessibility:** meaningful labels/names, keyboard operability, visible focus, correct checked/selected/disabled semantics, and no keyboard trap in covered controls.
- **Responsive behavior:** primary controls remain reachable and usable at desktop and narrow viewport sizes; page sections do not overlap or become inaccessible.
- **Reliability:** asynchronous state completes or fails within an explicit timeout; no fixed-delay dependence.
- **Performance baseline:** record navigation and selected interaction timings as diagnostic data only initially. Define thresholds only after agreeing on a controlled environment and service-level objective.
- **Stability:** ignore third-party ad/analytics requests in test assertions; report first-party navigation or application errors distinctly.

## 12. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Public page content, markup, or sample table data changes | Treat locator and data changes as application changes; use semantic locators and review failures before updating expectations. |
| Ads, analytics, and external links are flaky or blocked | Exclude those services from core pass/fail criteria; assert only the practice page's own link target/behavior. |
| Async controls have variable response time | Wait on a specific user-visible result with a bounded timeout; capture trace and console/network diagnostics on failure. |
| Native date/time controls vary by browser | Assert normalized input values and run browser-specific checks rather than matching picker UI pixels. |
| Comment submission may create public content | Keep disabled in unattended CI until approved; use synthetic data and avoid repeated submissions. |
| Iframe locator may match ads instead of the practice example | Scope to the intended section and verify frame identity before interacting. |
| Unsupported file fixture or browser permission prompts | Use a known small fixture and explicitly handle expected browser UI; do not depend on host files. |

## 13. Entry, exit, and completion criteria

### Entry

- Target URL and test environment are reachable.
- Intended expected outcomes for dynamic/unspecified controls have been manually confirmed.
- Test fixture files and any public-site submission policy are approved.
- Cucumber, Playwright, browser binaries, and CI configuration are available.

### Exit

- All P0 smoke scenarios pass.
- All in-scope P1 scenarios pass or have a documented, approved exclusion.
- No open critical/high-priority defects remain for the covered behavior.
- Failures provide sufficient scenario, browser, screenshot/trace, and diagnostic context to reproduce.
- Flaky, third-party-dependent, and intentionally excluded cases are identified and not silently counted as passing.

## 14. Reporting and defect details

For each run, record the commit/build, target URL, browser/version, viewport, Cucumber scenario ID, result, duration, and links/paths to failure artifacts. A defect report should include:

- Scenario ID and feature file.
- Preconditions and synthetic test data (redacted where needed).
- Exact reproduction steps and expected versus actual result.
- Browser/OS/version and timestamp.
- Screenshot/trace and relevant console/network error details.
- Whether the issue reproduces manually and whether it is first-party or third-party related.

## 15. Traceability checklist

- [ ] Page shell and section availability (`AP-PG-*`)
- [ ] Text fields and form actions (`AP-TF-*`)
- [ ] Radio, checkbox, and select controls (`AP-SEL-*`)
- [ ] Buttons, dialogs, and file upload (`AP-BTN-*`, `AP-DLG-*`, `AP-FILE-*`)
- [ ] Date/time, links, table, and frame (`AP-DATE-*`, `AP-LINK-*`, `AP-TBL-*`, `AP-FR-*`)
- [ ] Visibility, enabled state, image, hover, and suggestions (`AP-STATE-*`, `AP-IMG-*`, `AP-HOV-*`, `AP-SUG-*`)
- [ ] AJAX, stale element, drag/drop, keyboard, and shadow DOM (`AP-AJAX-*`, `AP-STALE-*`, `AP-DRAG-*`, `AP-KEY-*`, `AP-SHADOW-*`)
- [ ] Comment form and validation (`AP-CMT-*`)
- [ ] Agreed browser/viewports, artifacts, and CI tag strategy
