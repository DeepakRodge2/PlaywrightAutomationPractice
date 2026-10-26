const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const path = require('node:path');

Given('I open the SQA Tools automation practice page', async function () {
  await this.practicePage.open(this.baseUrl);
});

Then('the page title is {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});

Then('the {string} section is visible', async function (section) {
  await this.practicePage.expectSectionVisible(section);
});

When('I enter {string} into the {string} field', async function (value, id) {
  await this.practicePage.fillField(id, value);
});

Then('the {string} field contains {string}', async function (id, value) {
  await this.practicePage.expectInputValue(id, value);
});

When('I reload the practice page', async function () {
  await this.page.reload({ waitUntil: 'domcontentloaded' });
});

Then('the {string} field is masked', async function (id) {
  await expect(this.practicePage.field(id)).toHaveAttribute('type', 'password');
});

When('I select the {string} radio option', async function (id) {
  await this.practicePage.selectRadio(id);
});

Then('the {string} radio option is selected', async function (id) {
  await this.practicePage.expectChecked(id);
  await expect(this.page.locator('input[name="gender"]:checked')).toHaveCount(1);
});

When('I set the {string} checkbox to {string}', async function (id, state) {
  await this.practicePage.toggleCheckbox(id, state === 'checked');
});

Then('the {string} checkbox is {string}', async function (id, state) {
  await this.practicePage.expectChecked(id, state === 'checked');
});

When('I choose {string} in the {string} dropdown', async function (label, id) {
  await this.practicePage.selectOption(id, label);
});

Then('the {string} dropdown has the selected value {string}', async function (id, value) {
  await this.practicePage.expectInputValue(id, value);
});

When('I select {string} and {string} from the {string} list', async function (first, second, id) {
  await this.practicePage.selectOptions(id, [first, second]);
});

Then('the {string} list has selected values {string} and {string}', async function (id, first, second) {
  const labels = (await this.practicePage.selectedLabels(id)).map((label) => label.trim());
  expect(labels).toEqual(expect.arrayContaining([first, second]));
  expect(labels).toHaveLength(2);
});

When('I click the {string} button', async function (name) {
  await this.practicePage.clickButton(name);
});

Then('the practice page remains open', async function () {
  await expect(this.page).toHaveURL(this.baseUrl);
  await this.practicePage.expectSectionVisible('Buttons');
});

When('I accept the {string} dialog', async function (buttonName) {
  this.dialogMessage = (await this.practicePage.openDialog(buttonName, 'accept')).message;
});

When('I dismiss the {string} dialog', async function (buttonName) {
  this.dialogMessage = (await this.practicePage.openDialog(buttonName, 'dismiss')).message;
});

When('I enter {string} and accept the {string} prompt', async function (value, buttonName) {
  this.dialogMessage = (await this.practicePage.openDialog(buttonName, 'accept', value)).message;
});

Then('the dialog message is {string}', async function (message) {
  expect(this.dialogMessage).toBe(message);
});

When('I upload the sample fixture', async function () {
  await this.practicePage.setFile(path.resolve(process.cwd(), 'fixtures', 'upload-sample.txt'));
});

Then('the file input contains {string}', async function (fileName) {
  await expect.poll(() => this.practicePage.field('fileUpload').evaluate((element) => element.files?.[0]?.name)).toBe(fileName);
});

When('I set the {string} input to {string}', async function (id, value) {
  await this.practicePage.fillField(id, value);
});

When('I click the Go to Bottom link', async function () {
  await this.page.locator('#internalLink').click();
});

When('I return to the top of the page', async function () {
  await this.page.keyboard.press('Home');
});

Then('the bottom of the practice page is visible', async function () {
  await expect(this.page.locator('#bottom')).toBeInViewport();
});

Then('the main content is visible', async function () {
  await expect(this.page.locator('#content')).toBeInViewport();
});

Then('the Open Google link points to {string} and opens a new tab', async function (url) {
  const link = this.page.locator('#googleLink');
  await expect(link).toHaveAttribute('href', url);
  await expect(link).toHaveAttribute('target', '_blank');
});

Then('the practice table contains the row {string}, {string}, {string}', async function (id, name, role) {
  const row = this.page.getByRole('row').filter({ has: this.page.getByRole('cell', { name: id, exact: true }) });
  await expect(row).toContainText(name);
  await expect(row).toContainText(role);
});

Then('the practice iframe is present and loaded', async function () {
  const frameElement = this.page.locator('#sampleIframe');
  await expect(frameElement).toBeAttached();
  await expect(frameElement).toHaveAttribute('src', 'about:blank');
  await expect(this.page.frameLocator('#sampleIframe').locator('body')).toBeVisible();
});

Then('the hidden field is not visible and retains its default value', async function () {
  await expect(this.practicePage.field('hiddenField')).toBeHidden();
  await this.practicePage.expectInputValue('hiddenField', 'Hidden Value');
});

Then('the enabled field accepts text and the disabled field cannot be edited', async function () {
  await this.practicePage.fillField('enabledInput', 'Editable value');
  await this.practicePage.expectInputValue('enabledInput', 'Editable value');
  await expect(this.practicePage.field('disabledInput')).toBeDisabled();
});

Then('the sample image has loaded with alternative text {string}', async function (alt) {
  const image = this.page.getByRole('img', { name: alt });
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate((element) => element.naturalWidth)).toBeGreaterThan(0);
});

When('I hover over the hover practice button', async function () {
  await this.practicePage.button('Hover Over Me').hover();
});

Then('the hover button exposes the tooltip {string}', async function (tooltip) {
  await expect(this.practicePage.field('hoverButton')).toHaveAttribute('title', tooltip);
});

When('I enter {string} into the suggestions search box', async function (query) {
  await this.practicePage.typeField('searchBox', query);
});

Then('the suggestions include {string}', async function (suggestion) {
  await expect(this.page.locator('#suggestions')).toContainText(suggestion);
});

When('I choose the {string} suggestion', async function (suggestion) {
  await this.page.locator('#suggestions').getByText(suggestion, { exact: true }).click();
});

Then('the search box contains the selected suggestion {string}', async function (suggestion) {
  await this.practicePage.expectInputValue('searchBox', suggestion);
  await expect(this.page.locator('#suggestions')).toBeHidden();
});

Then('the suggestions list is empty', async function () {
  await expect(this.page.locator('#suggestions')).toBeEmpty();
});

When('I trigger the {string} AJAX action', async function (action) {
  await this.practicePage.clickButton(action);
});

Then('the AJAX result is {string}', async function (result) {
  await expect(this.page.locator('#loader')).toHaveText(result, { timeout: 8000 });
});

When('I replace the stale-element button', async function () {
  await this.practicePage.clickButton('Click to Replace Me');
});

Then('the replacement button is present with text {string}', async function (text) {
  await expect(this.page.locator('#staleContainer #staleBtn')).toHaveText(text);
});

When('I drag the source item into the drop target', async function () {
  await this.page.locator('#drag1').dragTo(this.page.locator('[ondrop]'));
});

Then('the source item is inside the drop target', async function () {
  await expect(this.page.locator('[ondrop] #drag1')).toBeAttached();
});

When('I press the {string} key in the keyboard practice field', async function (key) {
  const input = this.page.getByPlaceholder('Press any key');
  await input.focus();
  await input.press(key);
});

Then('the keyboard result is {string}', async function (result) {
  await expect(this.page.locator('#keyOutput')).toHaveText(result);
});

Then('the nested shadow DOM text is {string}', async function (text) {
  await expect(this.page.locator('#shadow-host').locator('#inner-host').locator('#shadowText')).toHaveText(text);
});

When('I enter text into the nested shadow input', async function () {
  await this.page.locator('#shadow-host').locator('#inner-host').locator('#shadowInput').fill('Shadow value');
});

Then('the nested shadow input contains {string}', async function (value) {
  await expect(this.page.locator('#shadow-host').locator('#inner-host').locator('#shadowInput')).toHaveValue(value);
});

When('I fill the comment form with safe test data', async function () {
  await this.practicePage.fillField('comment', 'Automated test comment - not submitted.');
  await this.practicePage.fillField('author', 'BDD Test User');
  await this.practicePage.fillField('email', 'bdd.user@example.test');
  await this.practicePage.fillField('url', 'https://example.test/');
});

Then('the comment form accepts the valid test values without submission', async function () {
  const form = this.page.locator('#commentform');
  expect(await form.evaluate((element) => element.checkValidity())).toBe(true);
  await expect(this.page).toHaveURL(this.baseUrl);
});

When('I enter an invalid email address into the comment form', async function () {
  await this.practicePage.fillField('email', 'not-an-email');
});

Then('the comment email field is invalid', async function () {
  expect(await this.practicePage.field('email').evaluate((element) => element.checkValidity())).toBe(false);
});

Then('the required comment fields are invalid and the form remains unsubmitted', async function () {
  for (const id of ['comment', 'author', 'email']) {
    expect(await this.practicePage.field(id).evaluate((element) => element.validity.valueMissing)).toBe(true);
  }
  expect(await this.page.locator('#commentform').evaluate((form) => form.checkValidity())).toBe(false);
  await expect(this.page).toHaveURL(this.baseUrl);
});

When('I toggle the save-details checkbox', async function () {
  const checkbox = this.practicePage.field('wp-comment-cookies-consent');
  await checkbox.setChecked(!(await checkbox.isChecked()));
});

Then('the save-details checkbox reflects the changed state', async function () {
  await expect(this.practicePage.field('wp-comment-cookies-consent')).toBeChecked();
});

Then('the {string} radio option is not selected', async function (id) {
  await this.practicePage.expectChecked(id, false);
});

Then('the {string} checkbox remains unchecked', async function (id) {
  await this.practicePage.expectChecked(id, false);
});

Then('the comment form remains unsubmitted', async function () {
  await expect(this.page).toHaveURL(this.baseUrl);
  await expect(this.page.locator('#commentform')).toBeVisible();
});
