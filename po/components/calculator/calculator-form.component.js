class CalculatorFormComponent {
  constructor() {
    browser.switchToFrame(0);
    const iframe = browser.$('#myFrame');
    browser.pause(3000);
    browser.switchToFrame(iframe);
  }

  get devsiteIframe() {
    return this.rootEl.$("devsite-iframe");
  }

  get calculatorIframe() {
    return this.rootEl.$("#myFrame");
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

  switchToIframe(frame) {
    browser.switchToFrame(1);
    const iframe = browser.$(frame);
    browser.switchToFrame(iframe);
  }
}

module.exports = CalculatorFormComponent;