# Dynamically Selected Stock Plots

In this activity, you will expand on your previous time series plot with a dynamic plot that reads the stock from the user form.

## Instructions

* Use the starter code provided and complete the function `handleSubmit`. 

* Add an event listener to the Submit button that will take the input value and search Quandl for a particular stock.

## Hints

* To select the input value from the form, select the input element containing the user's desired stock.

    * Use the [node](https://github.com/d3/d3-selection#selection_node) function on your selection.

    * Use dot notation to retrieve the [value](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) attribute from the result.

* To clear the input value, set the above `value` equal to the empty string.

- - -
© 2019 Trilogy Education Services 
