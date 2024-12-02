const puppeteer = require('puppeteer')
describe('Mi primer test en puppeteer', () =>{
    it ('Debe de abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null
        })
        
        const page = await browser.newPage()
        await page.goto('https://dcodingames.com')
        await page.waitForSelector('img')
        // Recargar la página
        await page.reload()
        await page.waitForSelector('img')

        // Navegar a otro sitio
        await page.goto('https://platzi.com')
        //await page.waitForSelector('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img')
        
        // Navegar hacia atrás
        await page.goBack()
        await page.goForward()
        //await page.waitForSelector('img')

        // abrir otra pagina en otra pestaña
        const page2 = await browser.newPage()
            await page2.goto('https://github.com')

        await browser.close()
    },55000)
})