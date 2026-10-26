const { setWorldConstructor, World } = require('@cucumber/cucumber');

class AutomationWorld extends World {
  constructor(options) {
    super(options);
    this.baseUrl = options.parameters.baseUrl;
    this.browser = undefined;
    this.context = undefined;
    this.page = undefined;
    this.practicePage = undefined;
    this.dialogMessage = undefined;
  }
}

setWorldConstructor(AutomationWorld);
