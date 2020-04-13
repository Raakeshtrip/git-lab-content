# Fits and Regression

This activity gives students an opportunity to use scipy to fit data, and matplotlib to display the fit.

## Instructions

- Import `stats` from the scipy module, along with `numpy` and `pandas`.

- Use Pandas to read the `crime_data.csv` provided in the Resources directory.

- Use `iloc` to isolate the year column.

- Use iloc to isolate the total violent crime rate, murder rate, and aggravated assault rate columns into separate variables for each statistic.

- Use `stats.linregress` to perform a linear regression with the year and violent crime rate columns.

- Use `stats.linregress` to perform a linear regression with the year and murder rate columns.

- Finally, use `stats.linregress` to perform a linear regression with the year and aggravated assault rate columns.

- Use the information returned by `stats.linregress` to create an equation for a line describing each of the linear regressions you performed (see the hint below).

  - You should end up with three separate lines.

- Use `subplots` to create a figure with subplots that share an x-axis.

- Use `plot` to plot each of the lines you created against the year.

- Display the plot.

## Bonus

- Use the line you created for the total violent crime rate to determine what the violent crime rate will be in 2019.

## Hints

- See the documentation for [stats.linregress](https://docs.scipy.org/doc/scipy-0.19.0/reference/generated/scipy.stats.linregress.html).

- Recall that `stats.linregress` returns a slope, called `m`, and a y-intercept, called `b`. These let you define a line for each fit by simply writing: `fit = m * year + b`, for each linear regression you perform.
