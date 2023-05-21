const pastebinPage = require("../../po/pages/pasteBin/pasteBin.page");

describe("I Can Win", () => {
  it("should create a new paste with the provided details", async () => {
    //Arrange
    const title = "helloweb";
    const code = "Hello from WebDriver";
    const expiration = "10 Minutes";

    //Act
    await pastebinPage.open();
    await pastebinPage.createNewPaste(code, title);
    await pastebinPage.checkPasteSettings([
      [pastebinPage.expirationDropdown, expiration],
    ]);
    await pastebinPage.submitNewPaste();

    //Assert
    await expect(browser).toHaveTitleContaining(title);
  });
});

describe("Bring It On", () => {
  it("should create a new paste with bash's format syntax", async () => {
    //Arrange
    const title = "how to gain dominance among developers";
    const codeFirstLine = 'git config --global user.name "New Sheriff in Town"';
    const codeSecondLine =
      'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")';
    const codeThirdLine = "git push origin master --force";
    const code = `${codeFirstLine} \n${codeSecondLine} \n${codeThirdLine}`;
    const format = "Bash";
    const expiration = "10 Minutes";
   
    //Act
    await pastebinPage.open();
    await pastebinPage.createNewPaste(code, title);
    await pastebinPage.checkPasteSettings([
      [pastebinPage.codeFormatDropdown, format],
      [pastebinPage.expirationDropdown, expiration],
    ]);
    await pastebinPage.submitNewPaste();

    //Assert
    await expect(browser).toHaveTitleContaining(title);
    await expect(pastebinPage.codeSourse).toHaveElementClass(format.toLocaleLowerCase());
    await expect(pastebinPage.codeMatch).toHaveTextContaining(
      codeFirstLine,
      codeSecondLine,
      codeThirdLine,
    );
  });
});
