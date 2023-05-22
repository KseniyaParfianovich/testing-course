const BaseComponent = require("../common/base.component");

class CalculatorFormComponent extends BaseComponent {
  constructor() {
    super("#mainForm");
  }

  get computeEngineBtn() {
    return this.rootEl.$("#tab-item-1");
  }
  get addGPUBtn() {
    return this.rootEl.$$("//md-checkbox [@aria-label='Add GPUs']")[0];
  }
  get addToEstimateBtn() {
    return this.rootEl.$$('//button[normalize-space(text())="Add to Estimate"]')[0];
  }

  input(label) {
    return this.rootEl.$(`//label[normalize-space(text())="${label}"]`).nextElement();
  }

  option(text) {
    return this.rootEl.$(`//md-option/div[normalize-space(text())="${text}"]`);
  }
}

module.exports = CalculatorFormComponent;