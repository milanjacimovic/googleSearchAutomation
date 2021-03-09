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
}

main();
