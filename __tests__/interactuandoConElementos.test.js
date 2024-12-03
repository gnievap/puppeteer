const puppeteer = require('puppeteer')
describe('Interactuando con elementos', () =>{
    it ('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        
        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        page.on('dialog', async (dialog) => {
           await dialog.accept()
        })
        
        // Click derecho
        //await page.click('#authentication > span', { button: 'right', delay:500})
        //await page.waitForTimeOut(3000)

        // Doble click
        await page.click('#authentication > button', { clickCount: 2, delay: 500})
    

        await browser.close()
    },55000)
})