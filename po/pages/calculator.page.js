const BasePage = require("./base.page");
const { HeaderComponent } = require("../components");

class CalculatorPage extends BasePage {
  constructor() {
    super("/products/calculator");

    this.header = new HeaderComponent();
  }
}

module.exports = CalculatorPage;
