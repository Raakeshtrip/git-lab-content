from splinter import Browser
from bs4 import BeautifulSoup


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "chromedriver"}
    return Browser("chrome", **executable_path, headless=True)


def scrape():
        browser = init_browser()
        destination_data={}
        url = "https://visitcostarica.herokuapp.com/"
        browser.visit(url)
        html = browser.html
        soup = BeautifulSoup(html, "html.parser")
        results=soup.find_all('strong')
        destination_data["min"]=results[1].text
        destination_data["max"]=results[2].text
 
    # listings["headline"] = soup.find("a", class_="result-title").get_text()
    # listings["price"] = soup.find("span", class_="result-price").get_text()
    # listings["hood"] = soup.find("span", class_="result-hood").get_text()

        return destination_data
