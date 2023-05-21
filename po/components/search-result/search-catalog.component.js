const BaseComponent = require("../common/base.component");

class SearchCatalogComponent extends BaseComponent {
  constructor() {
    super("devsite-catalog");
  }

  searchResultLink(keyword) {
    return this.rootEl.$(`b=${keyword}`).parentElement();
  }
}

module.exports = SearchCatalogComponent;
