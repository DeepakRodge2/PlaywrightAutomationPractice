# SQA Tools Playwright + Cucumber Framework

Browser automation for the [SQA Tools Automation Practice Page](https://sqatools.in/automation-practice-page/) using **Cucumber.js**, **Playwright**, and the **Page Object Model (POM)**.

This guide explains how to install and run this project, how its parts fit together, and how to build the same kind of framework from an empty folder.

## Contents

- [What the framework does](#what-the-framework-does)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Run tests](#run-tests)
- [How a test runs](#how-a-test-runs)
- [Project structure](#project-structure)
- [Create a framework from scratch](#create-a-framework-from-scratch)
- [Add a new test](#add-a-new-test)
- [Configuration and troubleshooting](#configuration-and-troubleshooting)
- [Safety notes](#safety-notes)

## What the framework does

The framework opens a real browser, visits the practice page, performs an interaction, and checks the result. Test scenarios are written in plain-language Gherkin, for example:

```gherkin
Scenario: Open the automation practice page
  Given I open the SQA Tools automation practice page
  Then the page title is "Automation Practice Page - SQA Tools"
  And the "Text Fields" section is visible
```

The main pieces work together like this:

1. **Cucumber** reads the scenario.
2. **Step definitions** map each Given/When/Then sentence to JavaScript.
3. **The page object** provides reusable actions and locators for the page.
4. **Playwright** drives the browser and checks the visible result.
5. **Cucumber hooks** create and close the browser page and save failure evidence.

For a five-year-old: the feature is the robot's checklist, the step definition is the interpreter, the page object is the map, and Playwright is the robot's hands and eyes.

## Prerequisites

- **Node.js 20 or later** (required by the installed Cucumber.js version).
- **npm**, installed with Node.js.
- Network access to the target website.
- Permission to install/run Chromium on your machine.

Check Node and npm in PowerShell:

```powershell
node --version
npm --version
```

## Quick start

Open PowerShell in this project folder:

```powershell
cd "C:\GitCode\PlaywrightAutomationPractice\Deepak R\Playwright_BDD_Framework"
```

Install JavaScript dependencies and the Chromium browser:

```powershell
npm install
npx playwright install chromium
```

Run the smoke tests:

```powershell
npm run test:smoke
```

Run the complete suite:

```powershell
npm test
```

The browser runs headless (without a visible window) by default. On Windows, open the browser while testing with:

```powershell
$env:HEADLESS = "false"
npm test
Remove-Item Env:HEADLESS
```

## Run tests

| Command | Purpose |
|---|---|
| `npm test` | Run all Cucumber scenarios. |
| `npm run test:smoke` | Run scenarios tagged `@smoke`. |
| `npm run test:report` | Run all scenarios and write `test-results/cucumber-report.json`. |
| `npm run test:headed` | Run with a visible browser window on Windows. |
| `npm run install:browsers` | Install Playwright's Chromium browser. |

To run a subset by tag, for example all AJAX cases:

```powershell
npx cucumber-js --tags "@AP-AJAX-01 or @AP-AJAX-02"
```

To run a single feature file:

```powershell
npx cucumber-js features/advanced-interactions.feature
```

Run commands from the project root so the feature/config/fixture paths resolve correctly.

## How a test runs

For the example scenario above, the sequence is:

1. Cucumber finds the scenario in `features/page-shell.feature`.
2. The `BeforeAll` hook in `support/hooks.js` launches Chromium.
3. The `Before` hook creates a fresh browser context and page for the scenario, starts a Playwright trace, and creates a `PracticePage` object.
4. Cucumber matches `Given I open the SQA Tools automation practice page` to a step definition in `steps/practice.steps.js`.
5. The step calls `this.practicePage.open(this.baseUrl)`.
6. The method in `pages/practice-page.js` navigates to the page and checks that its main heading is visible.
7. The next steps check the page title and section heading.
8. The `After` hook closes the context. If the scenario failed, it also attaches a screenshot and saves a trace in `test-results/`.
9. The `AfterAll` hook closes Chromium.

Each scenario gets a new page/context, which avoids state leaking from one test into another.

## Project structure

```text
Playwright_BDD_Framework/
  features/       Gherkin scenarios organized by page behavior
  steps/          JavaScript implementations for Given/When/Then sentences
  pages/          Page objects: locators and reusable page actions
  support/        Cucumber World and browser lifecycle hooks
  fixtures/       Small files used as test input (for example, upload-sample.txt)
  test-results/   Generated JSON reports and failure traces (not committed)
  cucumber.js     Cucumber paths, support files, and default target URL
  package.json    Dependencies and npm commands
  package-lock.json
  TEST_PLAN.md    Test scope, coverage matrix, priorities, and assumptions
  README.md       This guide
```

Feature file coverage:

| Feature file | Main coverage |
|---|---|
| `features/page-shell.feature` | Page title and availability of practice sections. |
| `features/form-controls.feature` | Text inputs, radio buttons, checkboxes, dropdowns, and enabled/disabled fields. |
| `features/buttons-dialogs-files.feature` | Buttons, JavaScript alerts/prompts, and file upload. |
| `features/dates-links-table-frame.feature` | Date/time inputs, page links, table rows, and iframe. |
| `features/visibility-hover-suggestions.feature` | Hidden fields, image, hover, and auto-suggestions. |
| `features/advanced-interactions.feature` | AJAX results, stale-element example, drag/drop, keyboard, and shadow DOM. |
| `features/comment-form.feature` | Client-side comment form validation without publishing comments. |

The current feature set expands to **70 scenarios and 208 steps**, including Scenario Outline examples. Test IDs such as `@AP-TF-01` connect scenarios to the test plan. The `@smoke` tag selects the short availability checks.

## Create a framework from scratch

The following steps make a small JavaScript Cucumber + Playwright + POM project in Windows PowerShell. The current repository already contains these files; use this section as a learning guide or to create a separate project.

### 1. Create a folder and initialize npm

```powershell
mkdir "C:\Automation\MyCucumberProject"
cd "C:\Automation\MyCucumberProject"
npm init -y
```

`npm init -y` creates `package.json`, which records project information and dependencies.

### 2. Install Cucumber, Playwright, and browser binaries

```powershell
npm install --save-dev @cucumber/cucumber @playwright/test
npx playwright install chromium
```

- `@cucumber/cucumber` runs Gherkin scenarios.
- `@playwright/test` supplies Playwright browser APIs and assertions such as `expect`.
- `playwright install chromium` downloads the browser binary used by the tests.

### 3. Create the framework folders

```powershell
New-Item -ItemType Directory -Force features, steps, pages, support, fixtures
```

Create this small starter layout:

```text
MyCucumberProject/
  features/example.feature
  steps/example.steps.js
  pages/example-page.js
  support/hooks.js
  support/world.js
  cucumber.js
  package.json
```

### 4. Configure Cucumber

Create `cucumber.js`:

```javascript
module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['support/**/*.js', 'steps/**/*.js'],
    format: ['progress'],
    publishQuiet: true,
    worldParameters: {
      baseUrl: process.env.BASE_URL || 'https://example.com/',
    },
  },
};
```

This tells Cucumber where to find the feature files, hooks, and step definitions, and passes a default URL to each scenario.

### 5. Write a feature in plain language

Create `features/example.feature`:

```gherkin
Feature: Example page check
  Scenario: Open the example page
    Given I open the example page
    Then the page title is "Example Domain"
```

Keep Gherkin focused on user-visible behavior. It should say what the user does and observes, not describe low-level selectors or JavaScript.

### 6. Create a page object

Create `pages/example-page.js`:

```javascript
const { expect } = require('@playwright/test');

class ExamplePage {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async expectTitle(title) {
    await expect(this.page).toHaveTitle(title);
  }
}

module.exports = { ExamplePage };
```

The page object owns page-specific browser actions and locators. As a project grows, add methods like `fillUsername()`, `selectCountry()`, or `submitSearch()` here rather than repeating selectors in every scenario.

### 7. Connect Gherkin to JavaScript

Create `steps/example.steps.js`:

```javascript
const { Given, Then } = require('@cucumber/cucumber');

Given('I open the example page', async function () {
  await this.examplePage.open(this.baseUrl);
});

Then('the page title is {string}', async function (title) {
  await this.examplePage.expectTitle(title);
});
```

Each step's sentence must match the Gherkin wording. `this` is the Cucumber World, which stores data shared by steps in the same scenario.

### 8. Set up browser hooks and the World

Create `support/world.js`:

```javascript
const { setWorldConstructor, World } = require('@cucumber/cucumber');

class TestWorld extends World {
  constructor(options) {
    super(options);
    this.baseUrl = options.parameters.baseUrl;
    this.browser = undefined;
    this.context = undefined;
    this.page = undefined;
    this.examplePage = undefined;
  }
}

setWorldConstructor(TestWorld);
```

Create `support/hooks.js`:

```javascript
const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { ExamplePage } = require('../pages/example-page');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  this.browser = browser;
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.examplePage = new ExamplePage(this.page);
});

After(async function () {
  if (this.context) await this.context.close();
});

AfterAll(async function () {
  if (browser) await browser.close();
});
```

Hooks are lifecycle steps: launch one browser for the run, create a clean context/page for each scenario, then close everything.

### 9. Add npm scripts

In `package.json`, add a test script under `"scripts"`:

```json
"scripts": {
  "test": "cucumber-js"
}
```

The JSON should have valid commas and braces; preserve any other fields created by `npm init`.

### 10. Run the starter test

```powershell
npm test
```

If Cucumber reports an undefined step, check that the step sentence in the `.feature` file exactly matches the text registered in the step definition, and that `cucumber.js` loads the step file.

### 11. Grow the project safely

1. Add a small scenario to an appropriate feature file.
2. Add or reuse a step definition.
3. Put page-specific browser behavior in the page object.
4. Use Playwright assertions to verify a visible result or control state.
5. Run the new scenario first, then the broader suite.
6. Avoid fixed sleeps; wait for an expected state with Playwright's auto-waiting assertions.
7. Use synthetic data and isolate each scenario from others.

## Add a new test to this framework

For example, to add a test for a new practice control:

1. Add a Gherkin scenario to the relevant `features/*.feature` file and give it an ID/tag if it maps to the test plan.
2. Run `npx cucumber-js --dry-run` to check that all scenario steps have definitions.
3. Add matching Given/When/Then implementations to `steps/practice.steps.js`, or reuse existing step patterns.
4. Add reusable page-specific actions or locators to `pages/practice-page.js`.
5. Run the new feature or tag, for example `npx cucumber-js features/form-controls.feature`.
6. Run `npm test` to verify that all scenarios still pass.
7. If behavior, scope, or assumptions changed, update `TEST_PLAN.md`.

Prefer accessible locators such as `getByRole()` and `getByLabel()` when the page provides them. Use stable IDs when necessary. Avoid brittle selectors based on element position or styling.

## Configuration and troubleshooting

### Choose a target URL

The default URL is configured in `cucumber.js`. Override it for one PowerShell session with an approved target:

```powershell
$env:BASE_URL = "https://sqatools.in/automation-practice-page/"
npm test
Remove-Item Env:BASE_URL
```

Do not use production-impacting actions against an environment unless you have permission. This suite deliberately does not submit the public comment form.

### Browser does not launch

Reinstall the Chromium binary:

```powershell
npx playwright install chromium
```

### A locator times out

- Check that the page loaded and that the control still exists.
- Prefer a role, label, or stable ID locator.
- Check whether a dialog is blocking the page.
- Wait for the visible state that signals completion rather than adding a fixed delay.

### A scenario passes alone but fails in the full suite

Scenarios should not depend on earlier scenarios. Make sure the test opens a fresh page, uses its own synthetic data, and does not rely on state left behind in the browser.

### Failure artifacts

The hooks attach screenshots and Playwright traces to failed Cucumber scenarios; trace ZIP files are written to `test-results/`. Open a trace with:

```powershell
npx playwright show-trace "test-results\trace-FILENAME.zip"
```

Generated reports and traces are ignored by Git.

## Safety notes

- Comment scenarios fill and validate fields only; they **do not** publish comments to the public website.
- The external-link scenario checks its URL and target attributes but does not navigate to the external website.
- Use synthetic test values, not personal or sensitive data.
- Keep file-upload fixtures small, benign, and inside the project.
- Ads, analytics, and other third-party content are not part of the core pass/fail criteria.

For the full coverage matrix, priorities, assumptions, and risks, see [TEST_PLAN.md](./TEST_PLAN.md).
