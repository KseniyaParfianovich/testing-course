const { page } = require("../../po/pages");

describe("Hurt Me Plenty", () => {
  it("should make a search by keyword", async () => {
    // Arange
    const keyword = 'Google Cloud Platform Pricing Calculator';

    // Act
    await page("home").open();
    await page("home").header.searchBtn.click();
    await page("home").header.searchField.setValue(keyword);
    await page("home").header.searchResultBtn.click();
    await browser.pause(3000);

    // Assert
    await expect(page("searchResult").searchCatalog.searchResultLink(keyword)).toBeDisplayed();
  });
});
