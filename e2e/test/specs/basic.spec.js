const { BrowserModule } = require("@angular/platform-browser");
const assert = require("assert");
// const { browser } = require("protractor");

describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    const b = await browser;
    await b.url("");
    await b.pause(3000);
    const elem = await $("#elem");
    console.log(await elem.isDisplayed());
    const elem1 = await $("#fake");
    console.log(await elem1.isDisplayed());

    // const title = browser.getTitle();
    // assert.strictEqual(title, 'AngularWdio6BuilderDemo')
  });
  // it('should say app is running', () => {
  //   browser.url('');
  //   const message = $('body > app-root > div.content > div.card.highlight-card.card-small > span').getText();
  //   assert.strictEqual(message, 'angular-wdio6-builder-demo app is running!')
  // })
});
