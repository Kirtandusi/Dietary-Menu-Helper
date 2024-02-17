const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const { format } = require('date-fns');

const app = express();
app.use(cors());

function scrapeMenu(urls) {
    const today = format(new Date(), 'yyyy-MM-dd');

    const allMenus = [];

    for (const url of urls) {
        axios.get(url)
            .then(response => {
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

                allMenus.push(menus);
            })
            .catch(error => console.error('Error fetching menu:', error));
    }

    return allMenus;
}

app.get('/menu', (req, res) => {
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

    const menus = scrapeMenu(urls);

    if (menus.length > 0) {
        res.render('menu', { menus });
    } else {
        res.send('Failed to fetch the menu.');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
