const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com/search?q=programming+monitors&sxsrf=APq-WBsr0ELOOi3dO9CJ-me7nOaLmRyLZQ:1643432834313&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjllrSymNb1AhVBKDQIHdVbDfoQ_AUoAXoECAEQAw&biw=856&bih=746&dpr=1.25");

  const names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".i0X6df")).map(
      (x) => x.textContent
    );
  });
  await fs.writeFile("monitors.txt", names.join("\r\n"));

  await browser.close();
};

start();
