# Review Questions

This document contains review questions for Git basics.

## Instructions

For the diagramming exercises below, either **draw your solutions on paper**, or use the interface provided at [Git Viz](https://peleke.github.io/git-viz/).

### Overview

* Consider the example from the lecture, where we created a branch for our data analysis. Why did we create a new branch for this? Why _not_ simply do this on `master`?

* Write down two advantages to creating branches instead of working directly on `master`.

- - -

#### Branching

* **For the exercises below, consider the following commit history:**

  ```bash
  (master) | [m1] -> [m2] -> [m3] -> [m4]
  ```

* Draw a new branch called `plotting_data`. It should branch from the second commit to `master`.

* When you first create `plotting_data`, are the files on that branch the same as the files in `[m1]`? In `[m2]`? Why, or why not?

* Add two commits to the `master` branch.

* Add two commits to the `plotting_data` branch, named `[pd1]` and `[pd2]`.

* Are the files in `[pd1]` and `[m3]` the same? Why, or why not?

- - -

### Merging

* Merge `[pd2]` with `master`.

* Explain how this merge changes the files in `master`.

* **For the problems below, consider the following history.**

  ```bash
  (master)        | [m1]-[m2]-[m3]-[m4]- - -- - -- - -[m5]
                                \               / (M)
  (plotting_data) |              \-[pd1]-[pd2]-/
  ```

* Assume `[m4]` on `master` updates `clean_data.py`, but doesn't change the directory structure.

* Assume the root project directory looks as follows at each commit:

  ```bash
  [m4]
  root/
    |_analyze_data.py
    |_clean_data.py
    |_output/
      |_cleanedRideData.csv
    |_Resources/
      |_rideData.csv

  [pd2]
  root/
    |_analyze_data.py
    |_clean_data.py
    |_helpers.py
    |_plot_data.py
    |_output/
      |_cleanedRideData.csv
      |_plots.pdf
    |_Resources/
      |_rideData.csv
  ```

* When we merge `master` and `plotting_data`, which version of each file do we get?

* Draw the directory structure for the last commit to `master`—after the merge—and label each file with the branch it originated. Assume that the only files changed on `plotting_data` were `helpers.py` and `plot_data.py`.

- - -

### Copyright

Data Boot Camp © 2018. All Rights Reserved.
