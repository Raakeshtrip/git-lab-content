# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE

# create instance of Flask app
app = Flask(__name__)


# @TODO:  Create a route and view function that takes in a string and renders index.html template
# CODE GOES HERE


# create route that renders index.html template
@app.route("/")
def echo():
    return render_template("index.html", text="Rakesh",Hobby="something something something something something something something something something something something something something something something something something")

if __name__ == "__main__":
    app.run(debug=True)
