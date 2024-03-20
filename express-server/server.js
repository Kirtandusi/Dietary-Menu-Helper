const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const { format } = require('date-fns');

const app = express();
app.use(express.json()); //using cors, not json


async function scrapeMenu(urls) {
    const today = format(new Date(), 'yyyy-MM-dd');

    const allMenus = await Promise.all(urls.map(url => 
        axios.get(url)
            .then(response => {
                console.log(response.data);
                const $ = cheerio.load(response.data);
                const dailyMenus = $('.item-list.daily-menu');
                const menus = [];

                dailyMenus.each((index, menu) => {
                    const date = $(menu).find('h2').text().trim();
                    const menuItems = [];

                    $(menu).find('.row-item').each((i, item) => {
                        const itemName = $(item).find('h3').text().trim();
                        const itemDescription = $(item).find('p').text().trim();
                        menuItems.push({ name: itemName, description: itemDescription });
                    });

                    menus.push({ date, items: menuItems });
                });

                return menus;
            })
            .catch(error => {
                console.error('Error fetching menu:', error);
                console.log(error.response && error.response.status); // Log the HTTP status code
                console.log(error.response && error.response.data); // Log the HTTP response body
                return []; // return an empty array on error
            })
    ));

    return allMenus.flat(); // flatten the array of arrays
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
         res.render('menu', { menus });
         } else {
            res.send('Failed to fetch the menu.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('server error: ' + error.message);
    }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
