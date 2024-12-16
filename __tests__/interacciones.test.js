const puppeteer = require('puppeteer')
describe('Interactuando con elementos', () =>{
    it ('Interactuando con elementos', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe'
        })
        
        const page = await browser.newPage()
        await page.goto('http://demo.guru99.com/test/simple_context_menu.html')

        // Para aceptar los cuadros de diálogo de las alerts
        page.on('dialog', async (dialog) =>{
            await dialog.accept()
        })

        // Click derecho
        // await page.click('#authentication > span', {button: 'right', delay:500})
        // await new Promise((resolve) => setTimeout(resolve, 3000))

        // Doble click
        await page.click('#authentication > button', { clickCount:2, delay:1000})
        await new Promise((resolve) => setTimeout(resolve, 5000))

        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name', 'Gabs', { delay: 100})
        await page.click('#remote-testing')
        await page.click('#tried-test-cafe')
        await page.type('#comments', 'Esto es un comentario girl!')
        await page.select('select', '#windows', '#macos', '#linux')
        await page.click('#windows')
        await page.click('#submit-button')
        await new Promise((resolve) => setTimeout(resolve, 5000))

        await browser.close()
    },55000)
})