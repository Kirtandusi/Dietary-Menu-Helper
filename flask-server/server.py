from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

def scrape_menu():
    url = "https://wisc-housingdining.nutrislice.com/menu"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }  # Use a user-agent header to mimic a browser

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
                menu_items.append({"name": item_name, "description": item_descrip
