import path from 'path'
import glob from 'glob'
import puppeteer from 'puppeteer'

const isDevelopment = process.env.NODE_ENV !== 'production'

export async function render(html, config, appPath) {
  let browser

  let options = {
    matchBase:true
  }
  
  if(isDevelopment) {
    browser = await puppeteer.launch()
  } else {
    let chromePath = glob.sync("resources/app.asar.unpacked/node_modules/puppeteer/.local-chromium/**/chrome", options)

    browser = await puppeteer.launch({
      executablePath: chromePath[0]
    })
  }

  const page = await browser.newPage();
  await page.setViewport(config.viewport)
  await page.goto(`data:text/html,${html}`, { waitUntil: 'networkidle2' });

  config.pdf.path = path.join(appPath, "render.pdf")
  let pdf = await page.pdf(config.pdf);

  await browser.close();

  document.getElementById('pdfview').src += ""
}
