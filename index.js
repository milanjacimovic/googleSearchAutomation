const puppeteer = require("puppeteer");

function main() {
  automateSearch();
}

async function automateSearch() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage("");
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto("https://www.google.com");
  await page.type(".gLFyf.gsfi", "Bloxico");
  await page.waitForTimeout(2000);
  await page.click(".gNO89b");
  await page.waitForTimeout(2000);

  const bloxicoLink = await page.evaluate(() => window.find("bloxico.com"));
  await page.waitForTimeout(2000);
  if (bloxicoLink) {
    console.log("Bloxico sajt je uspešno pronađen");
  } else {
    console.log("Bloxico sajt nije pronađen");
  }
}

main();
