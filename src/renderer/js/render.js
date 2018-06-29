import path from 'path'
import puppeteer from 'puppeteer'

export default async function render(html, config) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport(config.viewport)
    await page.goto(`data:text/html,${html}`, { waitUntil: 'networkidle2' });

    config.pdf.path = path.join(__static, "render.pdf")
    let pdf = await page.pdf(config.pdf);

    await browser.close();
}
