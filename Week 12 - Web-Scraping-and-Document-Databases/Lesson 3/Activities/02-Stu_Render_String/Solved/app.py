# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)

# Set variables
name = "Aaron"
hobby = "Baseball"


# create route that renders index.html template
@app.route("/")
def echo():

    return render_template("index.html", name=name, hobby=hobby)


# Bonus add a new route
@app.route("/bonus")
def bonus():

    return render_template("bonus.html", name=name, hobby=hobby)


if __name__ == "__main__":
    app.run(debug=True)
