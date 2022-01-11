const puppeteer = require('puppeteer') 
async function start() 
{ 
    const browser= await puppeteer.launch() 
    const page = await browser.newPage()
    await page.goto("https://en.wikipedia.org/wiki/Stevens_Institute_of_Technology") //enter any URL to take a full screen screenshot
    await page.screenshot({path: "amazing.png", fullPage:true}) 
    await browser.close()

} 

start()