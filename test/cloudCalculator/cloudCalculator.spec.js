const { page } = require("../../po/pages");

describe("Hurt Me Plenty", () => {
  it("should make a search by keyword", async () => {
    // Arange
    const keyword = 'Google Cloud Platform Pricing Calculator';
    const instancesNumber = {
      label: 'Number of instances',
      value: 4
    };
    const operatingSystems = {
      label: 'Operating System / Software',
      value: 'Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)'
    }
    const provisioningModel = {
      label: 'Provisioning model',
      value: 'Regular'
    }
    const series = {
      label: 'Series',
      value: 'N1'
    }
    const machineType = {
      label: 'Machine type',
      value: 'n1-standard-8 (vCPUs: 8, RAM: 30GB)'
    }
    const gpuType = {
      label: 'GPU type',
      value: 'NVIDIA Tesla P100'
    }
    const gpuNumber = {
      label: 'Number of GPUs',
      value: '4'
    }
    const localSSD = {
      label: 'Local SSD',
      value: '2x375 GB'
    }
    const dataCenter = {
      label: 'Datacenter location',
      value: 'Frankfurt (europe-west3)'
    }
    const committedUsage = {
      label: 'Committed usage',
      value: '1 Year'
    }

    // Act
    await page("home").open();
    await page("home").header.searchField.click();
    await page("home").header.searchField.setValue(keyword);
    await page("home").header.searchResultBtn.click();
    await browser.pause(3000);

    // Search result page
    await page("searchResult").searchCatalog.searchResultLink();

    // Cloud Calculator page
    await page("calculator").form.computeEngineBtn.click();

    await page("calculator").form.input(instancesNumber.label).click();
    await page("calculator").form.option(instancesNumber.value).click();

    await page("calculator").form.input(operatingSystems.label).click();
    await page("calculator").form.option(operatingSystems.value).click();

    await page("calculator").form.input(provisioningModel.label).click();
    await page("calculator").form.option(provisioningModel.value).click();

    await page("calculator").form.input(series.label).click();
    await page("calculator").form.option(series.value).click();

    await page("calculator").form.input(machineType.label).click();
    await page("calculator").form.option(machineType.value).click();

    await page("calculator").form.addGPUBtn.click();

    await page("calculator").form.input(gpuType.label).click();
    await page("calculator").form.option(gpuType.value).click();

    await page("calculator").form.input(gpuNumber.label).click();
    await page("calculator").form.option(gpuNumber.value).click();

    await page("calculator").form.input(localSSD.label).click();
    await page("calculator").form.option(localSSD.value).click();

    await page("calculator").form.input(dataCenter.label).click();
    await page("calculator").form.option(dataCenter.value).click();

    await page("calculator").form.input(committedUsage.label).click();
    await page("calculator").form.option(committedUsage.value).click();

    // Assert
    // await expect(page("searchResult").searchCatalog.searchResultLink(keyword)).toBeDisplayed();
  });
});
