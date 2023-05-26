const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
  constructor() {
    super("devsite-header");
  }

  get searchBtn() {
    return this.rootEl.$("//button[@aria-label='Open search']");
  }

  get searchField() {
    return this.rootEl.$(".devsite-search-field");
  }

  get searchResultBtn() {
    return this.rootEl.$(".devsite-suggest-all-results");
  }
}

module.exports = HeaderComponent;
