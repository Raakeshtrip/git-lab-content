# Mean, Median, Mode

## Instructions

For each activity below, assume the input is a simple list.

* Write a function to calculate the mean of a data set, provided as a list.

* Write a function to calculate the median of a data set. Ensure your function works if the length of the input list is even. You can simply return either "middle" element, or return the mean of the two.

* Write a function to calculate the mode of a data set. It should return the most common element, and how many times it appears. If your data set has multiple modes, simply return one. Use a [Counter](https://docs.python.org/2/library/collections.html#collections.Counter) from the collections module to implement this function.

* Consider the lists provided in the [samples file](../Activities/01-Ins_Mean_Median_Mode/Solved/samples.ipynb). Which measure of central tendency best describes each list? Why?

* As a **bonus**, write a function that returns all modes of a data set. For the list `[1, 1, 1, 2, 2, 2, 3, 4]`, this function should return `[(1, 3), (2, 3)]`; or just `[1, 2]`.
