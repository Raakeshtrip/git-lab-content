# Module used to connect Python with MongoDb
import pymongo

# The default port used by MongoDB is 27017
# https://docs.mongodb.com/manual/reference/default-mongodb-port/
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.fruits_db

db.fruits.insert_one({
       "vendor Name":"Iraldo",
       "type of Fruit":"tropical",
        "quantity recevied":"10",
        "ripeness rating":"3"
        }       
        )   
        
db.fruits.insert_one
    (
      {
            "vendor Name":"Rakesh",
            "type of Fruit":"coldFruits",
             "quantity recevied":"100",
             "ripeness rating":"1"
      }       
    )   




