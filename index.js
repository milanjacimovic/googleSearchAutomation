const puppeteer = require("puppeteer");

function main() {
  automateSearch();
}

async function automateSearch() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage("");
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto("https://www.google.rs");
}

main();
