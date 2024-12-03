const puppeteer = require('puppeteer')
describe('Interactuando con elementos', () =>{
    it ('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        
        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
        
        // Click derecho
        await page.click('#authentication > span', { button: 'right', delay:500})
        //await page.waitForTimeOut(3000)

        await browser.close()
    },55000)
})