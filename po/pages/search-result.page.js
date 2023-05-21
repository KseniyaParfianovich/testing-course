const BasePage = require("./base.page");
const { HeaderComponent, SearchCatalogComponent } = require("../components");

class SearchResultPage extends BasePage {
  constructor() {
    super("/s/results/");

    this.header = new HeaderComponent();
    this.searchCatalog = new SearchCatalogComponent();
  }
}

module.exports = SearchResultPage;
