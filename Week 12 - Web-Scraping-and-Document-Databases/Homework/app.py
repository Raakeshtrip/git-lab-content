from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/marsapp")
mongo.db.mars.drop()


# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    mars_data = mongo.db.mars.find_one()

    # Return template and data

    if mars_data != None:
        return render_template("index.html", mars=mars_data)
    else:
        return render_template("index.html", mars={"Mars_Facts": {"value": {"no_content":"Press the Button"}}})


# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
    marsdata = scrape_mars.scrape_info()

    # Update the Mongo database using update and upsert=True
    mongo.db.mars.update({},marsdata, upsert=True)

    # Redirect back to home page
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
