from flask import Flask, render_template
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.store_inventory


@app.route('/')
def index():
    produces = list(db.produce.find())
    print(produces)
    return render_template('index.html', produce=produces)


if __name__ == "__main__":
    app.run(debug=True)
