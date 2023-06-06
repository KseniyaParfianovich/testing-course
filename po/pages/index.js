const HomePage = require("./home.page");
const SearchResultPage = require("./search-result.page");
const CalculatorPage = require("./calculator.page");

/**
 * @param name { 'home' | 'searchResult' | 'calculator' }
 * @returns { HomePage | SearchResultPage | CalculatorPage }
 */
function page(name) {
  const items = {
    home: new HomePage(),
    searchResult: new SearchResultPage(),
    calculator: new CalculatorPage()
  };

  return items[name];
}

module.exports = {
  HomePage,
  SearchResultPage,
  CalculatorPage,
  page,
};
