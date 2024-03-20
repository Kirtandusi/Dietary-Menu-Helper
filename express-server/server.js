const express = require('express');
const puppeteer = require('puppeteer')
const app = express();
app.use(express.json()); //using cors, not json


async function scrapeMenu(urls) {
    const browser = await puppeteer.launch();
    const allFoodNames = [];
    for (let url of urls) {
    //console.log("reached website") 
    const page = await browser.newPage();
    await page.goto(url);
    //console.log("reached website")
    try {
        console.log("reached website")
        const button = await page.waitForSelector('button[data-testid="018026bcdb3445168421175d9ae4dd06"]', { timeout: 3000 });
        if (button) {
            await button.click();
        }
    } catch (error) {
        console.error('Button not found: ', error);
    }
    console.log("reached?")
    await page.waitForSelector('span.food-name'); //problem!
    console.log("definitely")
    const foodNames = await page.$$eval('span.food-name', elements => elements.map(item => item.innerText));
    allFoodNames.push(foodNames);
    await page.close()
    }
    
    
    await browser.close();
    return allFoodNames;
}


app.get('/menu', async (req, res) => {
let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd; // change the format as per your requirement

let urls = [
    
    `https://wisc-housingdining.nutrislice.com/menu/rhetas-market/breakfast/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/rhetas-market/lunch/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/rhetas-market/dinner/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/lowell-market/breakfast/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/lowell-market/lunch/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/lowell-market/dinner/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/lizs-market/breakfast/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/lizs-market/lunch/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/lizs-market/dinner/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/gordon-avenue-market/breakfast/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/gordon-avenue-market/lunch/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/gordon-avenue-market/dinner/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/carsons-market/lunch/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/carsons-market/dinner/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/four-lakes-market/breakfast/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/four-lakes-market/lunch/${today}`,
    `https://wisc-housingdining.nutrislice.com/menu/four-lakes-market/dinner/${today}`
];
    try {
        const menus = await scrapeMenu(urls);

        if (menus.length > 0) {
         res.render('menu', { menus })
         } else {
            res.send('Failed to fetch the menu.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('server error: ' + error.message);
    }
});


const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
