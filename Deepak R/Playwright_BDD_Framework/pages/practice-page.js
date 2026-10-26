const { expect } = require('@playwright/test');

class PracticePage {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await expect(this.page.getByRole('heading', { name: 'Automation Practice Page', level: 1, exact: true })).toBeVisible();
  }

  async expectSectionVisible(name) {
    await expect(this.page.getByRole('heading', { name, exact: true })).toBeVisible();
  }

  field(id) {
    return this.page.locator(`#${id}`);
  }

  async fillField(id, value) {
    await this.field(id).fill(value);
  }

  async typeField(id, value) {
    await this.field(id).pressSequentially(value);
  }

  async selectRadio(id) {
    await this.field(id).check();
  }

  async toggleCheckbox(id, checked) {
    await this.field(id).setChecked(checked);
  }

  async selectOption(id, label) {
    await this.field(id).selectOption({ label });
  }

  async selectOptions(id, labels) {
    const options = await this.field(id).locator('option').all();
    const values = [];
    for (const option of options) {
      const label = (await option.innerText()).trim();
      if (labels.includes(label)) values.push(await option.getAttribute('value') || label);
    }
    expect(values).toHaveLength(labels.length);
    await this.field(id).selectOption(values);
  }

  async selectedLabels(id) {
    return this.field(id).locator('option:checked').allInnerTexts();
  }

  button(name) {
    return this.page.getByRole('button', { name, exact: true });
  }

  async clickButton(name) {
    await this.button(name).click();
  }

  async openDialog(buttonName, action, promptValue) {
    const dialogEvent = this.page.waitForEvent('dialog');
    const clickPromise = this.button(buttonName).click();
    const dialog = await dialogEvent;
    this.lastDialog = { type: dialog.type(), message: dialog.message() };
    if (action === 'accept') {
      await dialog.accept(promptValue);
    } else {
      await dialog.dismiss();
    }
    await clickPromise;
    return this.lastDialog;
  }

  async setFile(filePath) {
    await this.field('fileUpload').setInputFiles(filePath);
  }

  async expectInputValue(id, value) {
    await expect(this.field(id)).toHaveValue(value);
  }

  async expectChecked(id, checked = true) {
    await expect(this.field(id)).toBeChecked({ checked });
  }
}

module.exports = { PracticePage };
