const BasePage = require("./base.page");
const { HeaderComponent } = require("../components");

class HomePage extends BasePage {
  constructor() {
    super("https://cloud.google.com/");

    this.header = new HeaderComponent();
  }
}

module.exports = HomePage;
