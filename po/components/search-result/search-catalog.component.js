const BaseComponent = require("../common/base.component");

class SearchCatalogComponent extends BaseComponent {
  constructor() {
    super("devsite-catalog");
  }

  get firstSearchResult() {
    return this.rootEl.$(".gsc-result:first-child a");
  }

  async searchResultLink() {
    await this.firstSearchResult.click();
  }
}

module.exports = SearchCatalogComponent;
