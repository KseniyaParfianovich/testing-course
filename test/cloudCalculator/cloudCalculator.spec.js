const page = require("../../po/pages");

describe("Hurt Me Plenty", () => {
  beforeEach(async () => {
    await page("home").open()
  })

  it('should open home page', async () => {
    const url = '/cloud.google.com/';

    await expect(browser).toHaveUrlContaining(url);
  })
  
  it("should make a search by keyword", async () => {
    // Arange
    const keyword = 'Google Cloud Platform Pricing Calculator';
    const searchResult = 'Google Cloud Platform Pricing Calculator';

    // Act
    await page("home").header.searchBtn.click();
    await page("home").header.searchField.setValue(keyword);
    await browser.keys('Enter').click();
    await browser.pause(3000);

    // Assert
    await expect(page("searchResult").searchCatalog.searchResultLink(searchResult)).toBeDisplayed();
  });
});
