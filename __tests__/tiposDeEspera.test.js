const puppeteer = require('puppeteer')
describe('Tipos de espera', () =>{
    jest.setTimeout(66000)
    it ('Mostrar los diferentes tipos de espera', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            executablePath: 'C://Program Files//Google//Chrome//Application//chrome.exe',
            slowMo: 500
        })
        
        const page = await browser.newPage()
        page.setDefaultTimeout(10000)
        page.setDefaultNavigationTimeout(20000)
        // para esperar que la página termine completamente de cargar
        await page.goto('http://platzi.com', { waitUntil: 'networkidle2'})

        // Espera explícita
        await new Promise((resolve) => setTimeout(resolve, 5000))

        //Espera por un selector CSS
        //await page.waitForSelector('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img')

        //Espera por un xpath
        //await page.waitForXpath(' *[@id="home-public"]/div/div[2]/div[1]/div/a/d)

        await page.goto('https://demoqa.com/modal-dialogs')
        await page.waitForSelector('#showSmallModal', {visible: true})
        // const button = await page.waitForXPath('//*[@id="showSmallModal"]', {visible: true})
        // await button.click()

        // Espera por funcion 
        await page.waitForFunction(()=> document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')
        
        // Ejemplo para observar el viewport
        // const observarResize = page.waitForFunction('window.innerWidth < 100')
        // await page.setViewport({width: 50, height: 50})
        // await observarResize

        await page.click('#closeSmallModal')
        await page.waitForFunction(()=> !document.querySelector('#example-modal-sizes-title-sm'),{
            timeout: 30000
        })


        await browser.close()
    })
    //,55000
})