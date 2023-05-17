class PastebinPage {
  constructor() {
    this.url = "https://pastebin.com";
  }

  // Page locators
  get acceptCookieBtn() {
    return $("button=AGREE");
  }
  get newPasteTextArea() {
    return $("#postform-text");
  }
  get codeFormatDropdown() {
    return $("#select2-postform-format-container");
  }
  get expirationDropdown() {
    return $("#select2-postform-expiration-container");
  }
  get dropdownOptions() {
    return $$(".select2-results__options>li");
  }
  get pasteName() {
    return $("#postform-name");
  }
  get submitBtn() {
    return $("button=Create New Paste");
  }
  get codeSourse() {
    return $(".source");
  }
  get codeMatch() {
    return $(".de1");
  }

  // Page Actions
  async open() {
    await browser.url(this.url);
    await browser.maximizeWindow();
    await this.acceptCookieBtn.click();
  }

  async createNewPaste(code, title) {
    await this.newPasteTextArea.setValue(code);
    await this.pasteName.setValue(title);
  }

  async checkPasteSettings(settings) {
    for await (const [dropdown, option] of settings) {
      await dropdown.scrollIntoView({ block: "nearest" });
      await dropdown.click();
      await this.dropdownOptions.find((el) => el.getText(option)).click();
    }
  }

  async submitNewPaste() {
    await this.submitBtn.scrollIntoView({ block: "center" });
    await this.submitBtn.click();
  }
}

module.exports = new PastebinPage();
