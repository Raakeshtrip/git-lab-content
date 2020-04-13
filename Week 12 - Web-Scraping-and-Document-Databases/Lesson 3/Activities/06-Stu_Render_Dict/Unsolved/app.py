# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)

# @TODO: Create a list of dictionaries
# CODE GOES HERE

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE

@app.route("/")
def index():
    animal = [{"name": "fido","type": "lab"} ,{"name":"foif","type":"bal"} ]
    return render_template("index.html", dict=animal)

if __name__ == "__main__":
    app.run(debug=True)
