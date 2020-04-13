# Dependencies
import requests as req

url = "http://www.omdbapi.com/?apikey=40e9cece&t="

# Who was the director of the movie Aliens?
movie = req.get(url + "Aliens").json()
print("The director of Aliens was " + movie["Director"] + ".")

# What was the movie Gladiator rated?
movie = req.get(url + "Gladiator").json()
print("The rating of Gladiator was " + movie["Rated"] + ".")

# What year was 50 First Dates released?
movie = req.get(url + "50 First Dates").json()
print("The movie 50 First Dates was released in  " + movie["Year"] + ".")

# Who wrote Moana?
movie = req.get(url + "Moana").json()
print("Moana was written by " + movie["Writer"] + ".")

# What was the plot of the movie Sing?
movie = req.get(url + "Sing").json()
print("The plot of Sing was: '" + movie["Plot"] + "'.")

# BONUS: Complete this activity with a loop.
