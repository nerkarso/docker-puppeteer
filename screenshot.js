const puppeteer = require("puppeteer");

const screenshot = async (url, path) => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: [
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-setuid-sandbox",
      "--no-sandbox",
    ],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1520,
    height: 864,
  });

  await page.goto(url);

  await page.waitForTimeout(500);

  await page.screenshot({
    path,
    fullPage: true,
  });

  await browser.close();
};

module.exports = { screenshot };
