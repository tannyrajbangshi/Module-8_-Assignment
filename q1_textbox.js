
import { Builder, By } from "selenium-webdriver";

async function testTextBox() {

  const driver = await new Builder()
    .forBrowser("chrome")
    .build();

  try {

    await driver.get("https://demoqa.com/text-box");

    const nameBox = await driver.findElement(
      By.id("userName")
    );

    await nameBox.sendKeys("Tanny Rajbangshi");

    const submitButton = await driver.findElement(
      By.id("submit")
    );

    await driver.executeScript(
      "arguments[0].scrollIntoView({block:'center'});",
      submitButton
    );

    await submitButton.click();

    const result = await driver.findElement(
      By.id("name")
    );

    const actualText = await result.getText();
    const expectedText = "Name:Tanny Rajbangshi";

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

testTextBox();
