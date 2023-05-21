const BaseComponent = require("../common/base.component");

class CalculatorFormComponent extends BaseComponent {
  constructor() {
    super("#mainForm");
  }

  get computeEngineBtn() {
    return this.rootEl.$(".compute").selectByAttribute('title', 'Compute Engine');
  }
  get addGPUBtn() {
    return this.rootEl.$("md-checkbox").selectByAttribute('area-label', 'Add GPUs');
  }
  get addToEstimateBtn() {
    return this.rootEl.$('//div[normalize-space(text())="Add to Estimate"]');
  }

  input(label) {
    return this.rootEl.$(`//label[normalize-space(text())="${label}"]`).nextElement();
  }

  option(text) {
    return this.rootEl.$(`//md-option/div[normalize-space(text())="${text}"]`);
  }
}

module.exports = CalculatorFormComponent;