const puppeteer = require('puppeteer')
describe('Extrayendo informacion', () =>{

    let browser
    let page
    beforeEach( async ()=>{
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
        })

        page = await browser.newPage()
    })

    afterEach(async ()=>{
        await browser.close()
    })


    it ('Extraer el titulo de la pagina y la url', async () => {
        const browser = await puppeteer.launch({
            
        })
      
        // para esperar que la página termine completamente de cargar
        await page.goto('http://platzi.com', { waitUntil: 'networkidle0'})
        const titulo = await page.title()
        const url = await page.url()

        console.log('Titulo:', titulo)
        console.log('URL:', url)

        await browser.close()
    },55000)

    it ('Extraer la informacion de un elemento', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
        })
        
        const page = await browser.newPage()
        // para esperar que la página termine completamente de cargar
        await page.goto('http://platzi.com', { waitUntil: 'networkidle0'})
        await page.waitForSelector('body > main > header > div > nav > ul > li:nth-child(4) > a')
      
        const nombreButton = await page.$eval('body > main > header > div > nav > ul > li:nth-child(4) > a', (button)=>button.textContent)
        console.log('Nombre del boton:', nombreButton)
        
        // const texto = await page.evaluate(() => {
        //     const button = document.querySelector('body > main > header > div > button')
        //     return button ? button.textContent : null
        // })

        // const button = await page.waitForSelector('::-p-xpath(body > main > header > div > button)')
        // const texto = await page.evaluate((name) => name.textContent, button)
        // console.log('Texto del boton:', texto)

        // Otra forma de obtener elementos con xpath
        // const texto2 = await page.evaluate((name)=>name.textContent, button)
        // console.log('Texto del boton:', texto2)

        // const button3 = await page.waitForXpath('body > main > header > div > nav > ul > li:nth-child(4) > a')
        // const texto3 = await page.evaluate((name)=>name.textContent, button3)
        // console.log('Texto del boton:', texto3)
    },55000)

    it('Contar los elementos de una página', async () => {
        
        })

        
        await page.goto('http://platzi.com', { waitUntil: 'networkidle0'})
        const images = await page.$$eval('img', (imagenes)=>imagenes.length)
        console.log('Cantidad de imagenes:', images)

        
       
        await browser.close()
    }, 5000)

}
)