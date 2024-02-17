from flask import Flask, render_template
from flask_cos import CORS

import requests
from bs4 import BeautifulSoup
from datatime import date;
from bs4 import BeautifulSoup
app = Flask(__name__)
CORS(app)
def scrape_menu(urls):
    #use selerium
   # url = "https://wisc-housingdining.nutrislice.com/menu"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }  # Use a user-agent header to mimic a browser
    today = date.today().strftime("%Y-%m-%d")
   
    urls = [f"https://wisc-housingdining.nutrislice.com/menu/rhetas-market/breakfast/{today}",
             f"https://wisc-housingdining.nutrislice.com/menu/rhetas-market/lunch/{today}",
              f"https://wisc-housingdining.nutrislice.com/menu/rhetas-market/dinner/{today}",
               f"https://wisc-housingdining.nutrislice.com/menu/lowell-market/breakfast/{today}",
                f"https://wisc-housingdining.nutrislice.com/menu/lowell-market/lunch/{today}",
                 f"https://wisc-housingdining.nutrislice.com/menu/lowell-market/dinner/{today}",
                  f"https://wisc-housingdining.nutrislice.com/menu/lizs-market/breakfast/{today}",
                   f"https://wisc-housingdining.nutrislice.com/menu/lizs-market/lunch/{today}",
                    f"https://wisc-housingdining.nutrislice.com/menu/lizs-market/dinner/{today}", 
                     f"https://wisc-housingdining.nutrislice.com/menu/gordon-avenue-market/breakfast/{today}",
                      f"https://wisc-housingdining.nutrislice.com/menu/gordon-avenue-market/lunch/{today}",
                       f"https://wisc-housingdining.nutrislice.com/menu/gordon-avenue-market/dinner/{today}",
                       f"https://wisc-housingdining.nutrislice.com/menu/carsons-market/lunch/{today}",
                       f"https://wisc-housingdining.nutrislice.com/menu/carsons-market/dinner/{today}",
                       f"https://wisc-housingdining.nutrislice.com/menu/four-lakes-market/breakfast/{today}",
                       f"https://wisc-housingdining.nutrislice.com/menu/four-lakes-market/lunch/{today}",
                       f"https://wisc-housingdining.nutrislice.com/menu/four-lakes-market/dinner/{today}"]
    all_menus = []
    #response = requests.get(url, headers=headers)

    for url in urls:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, "html.parser")
            daily_menus = soup.find_all("div", class_="item-list daily-menu")
            menus = []

            for menu in daily_menus:
                date = menu.find("h2").text.strip()
                menu_items = []
                items = menu.find_all("div", class_="row-item")
                for item in items:
                    item_name = item.find("h3").text.strip()
                    item_description = item.find("p").text.strip()
                    menu_items.append({"name": item_name, "description": item_description})
                menus.append({"date": date, "items": menu_items})
        
        all_menus.append(menus)
        return menus if all_menus else None

@app.route("/menu")
def menu():
    menus = scrape_menu()
    if menus:
        return render_template('menu.html', menus=menus)
    else:
        return "Failed to fetch the menu."

CORS(app, origins=["http://localhost:5000/menu"])

if __name__ == "__main__":
    app.run(port=5000, debug=True)
