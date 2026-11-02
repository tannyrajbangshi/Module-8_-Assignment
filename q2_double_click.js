
import { Builder, By } from "selenium-webdriver";

async function testDoubleClick() {

  const driver = await new Builder()
    .forBrowser("chrome")
    .build();

  try {

    await driver.get("https://demoqa.com/buttons");

    const button = await driver.findElement(
      By.id("doubleClickBtn")
    );

    await driver.executeScript(
      "arguments[0].scrollIntoView({block:'center'});",
      button
    );

    await driver.actions()
      .doubleClick(button)
      .perform();

    const result = await driver.findElement(
      By.id("doubleClickMessage")
    );

    const actualText = await result.getText();
    const expectedText = "You have done a double click";

    if (actualText === expectedText) {
      console.log("Test Passed!");
    } else {
      console.log("Test Failed!");
    }

    console.log("Actual Result:", actualText);

    await driver.sleep(10000);

  } finally {

    await driver.quit();

  }
}

testDoubleClick();
