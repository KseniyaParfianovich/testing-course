const BasePage = require("./base.page");
const {
  HeaderComponent,
  CalculatorFormComponent,
  CalculatorResultComponent,
} = require("../components");

class CalculatorPage extends BasePage {
  constructor() {
    super("/products/calculator");

    this.header = new HeaderComponent();
    this.form = new CalculatorFormComponent();
    this.result = new CalculatorResultComponent();
  }
}

module.exports = CalculatorPage;
