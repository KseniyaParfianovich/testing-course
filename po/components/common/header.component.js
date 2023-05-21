const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
  constructor() {
    super("devsite-header");
  }

  get searchBtn() {
    return this.rootEl.$(".devsite-search-button");
  }

  get searchField() {
    return this.rootEl.$(".devsite-search-field");
  }

  get searchResultBtn() {
    return this.rootEl.$(".devsite-suggest-all-results");
  }
}

module.exports = HeaderComponent;
