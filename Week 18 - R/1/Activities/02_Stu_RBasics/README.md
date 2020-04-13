# We R in Junior High Again

## Instructions

* You are the homeroom teacher of a class of junior high students, and it is the first day of the school year. You will use R to automate some of the tasks, such as generating daily attendance sheets, and creating locker combinations.

* To create a new R script file, go to `File`, then `New File`, then `R Script`.

* You may also work with an R Markdown (`Rmd`) file instead. To insert a code block, or chunk, in an Rmd file, go to `Code`, then select `Insert Chunk`.

* To run a code chunk, press the green play button on the top right of a chunk.

* Read [the documentation](https://rmarkdown.rstudio.com/lesson-1.html) for more information on R Markdown files.

### Part I

* Create a vector of the following students:

  * Abraham
  * Beatrice
  * Cory
  * Dinah
  * Eric
  * Felicia

* Using the vector, create a function that will print daily attendance sheets, with today's date printed at the top. Then use a for-loop to print each student's name.

* You will have to research how to create a function. To print the date in R, try `Sys.Date()`.

### Part II

* Each student will be assigned a locker, and as their teacher, you are responsible for resetting the combinations to the locks. Create a function that will create a randomly-generated combination for each student. The combination should be three numbers, each ranging from 1 to 33.

* To generate (pseudo) random numbers in R, try `sample(33,3)`.

### Part III

* Massive security breach! A hacker has accessed the combinations of all students the second letter of whose name is `e`. Print the name of each of these students, as well as a randomly generated combination of three numbers between 34 and 66.

* You will have to research how to access a single letter in a string.
