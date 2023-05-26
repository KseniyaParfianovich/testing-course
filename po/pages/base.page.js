class BasePage {
  constructor(url) {
    this.url = url;
  }

  async open() {
    await browser.maximizeWindow();
    return browser.url(this.url);
  }
}

module.exports = BasePage;
