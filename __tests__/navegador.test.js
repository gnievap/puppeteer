const puppeteer = require('puppeteer')
describe('Mi primer test en puppeteer', () =>{
    it ('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless:false
        })
        
        const page = await browser.newPage()
        await page.goto('https://dcodingames.com')
        await browser.close()
    },5000)
})