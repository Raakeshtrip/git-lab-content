import pandas as pd
from bs4 import BeautifulSoup
import requests
import pymongo
from splinter import Browser
import time

def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
  executable_path = {"executable_path": "chromedriver"}
  return Browser("chrome", **executable_path, headless=False)

def scrape_info():
  url='https://mars.nasa.gov/news/'
  browser=init_browser()
  browser.visit(url)
  html = browser.html
  soup = BeautifulSoup(html, 'html.parser')
  results = soup.find_all('div',class_='list_text')
  nasa_title=results[0].find(class_='content_title').text
  nasa_p=results[0].find(class_='article_teaser_body').text



  #Now find the image of Mars
  featured_image_urls=""
  url_image='https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
  browser.visit(url_image)
  time.sleep(1)
  html = browser.html
  soup = BeautifulSoup(html, 'html.parser')
  featured_image_urls = "https://www.jpl.nasa.gov" + soup.find('a',class_="fancybox")["data-fancybox-href"]
  print(featured_image_urls)

  #Now get the Twiter tmp of mars
  url_twiter="https://twitter.com/marswxreport?lang=en"
  response=requests.get(url_twiter)
  soup= BeautifulSoup(response.text, 'lxml')
  mars_weather  = soup.find('p',class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text
  mars_weather = mars_weather.replace('hPapic.twitter.com/MhPPOHJg3m', '')
  
  #Get the Mars Facts
  url_marsFact="https://space-facts.com/mars/"
  mars_fact = pd.read_html(url_marsFact)
  mars_fact[1]
  df = mars_fact[1]
  df.columns = ['','value']
  df.set_index('', inplace=True)
  mars_facts=df.to_dict()

  #Mars hemisphere_image_urls
  hemisphere_image_urls=[]
  astrogeology_base='https://astrogeology.usgs.gov'
  url="https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
  browser.visit(url)
  time.sleep(1)
  html = browser.html
  soup = BeautifulSoup(html, 'html.parser')
  results  = soup.find_all('div',class_="item")
  for result in results:
        h3=result.find('h3').text
        a=result.find('a')
        jpg_url=astrogeology_base+a['href']
        browser.visit(jpg_url)
        time.sleep(1)
        html = browser.html
        soup = BeautifulSoup(html, 'html.parser')
        li  = soup.find('li')
        imge_url=li.find('a')['href']
        hemisphere_image_urls.append({'titile':h3,'img_url':imge_url})

  #Store the Data into a dict
  Mars_Data={
            "News_Title": nasa_title,
            "News_Parargaph": nasa_p,
            "Featured_Image_urls":featured_image_urls,
            "Mars_Weather":mars_weather,
            "Mars_Facts": mars_facts,
            "Hemisphere_Image_urls":hemisphere_image_urls
            }
  browser.quit()
  return Mars_Data