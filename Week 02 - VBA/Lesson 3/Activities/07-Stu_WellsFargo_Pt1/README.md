# Wells Fargo Part I

## Instructions

1. Extract words before the phrase "\_Wells_Fargo" to figure out the state.

2. Add the state to the first column of each spreadsheet.

3. Convert the headers of each row to simply say the year.

4. Convert the numbers to currency values for all cells.

* **Hints**
	* To solve this, we will make use of a [For Each loop](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/for-each-next-statement): in Excel, we can use this to loop over each worksheet in the workbook, no matter how many there are.  The syntax to loop over all worksheets is this:

  ```
    For Each ws In Worksheets
      ' do stuff with the worksheet (ws) '
    Next ws

  ```

  * First work on getting the correct formatting on one sheet before moving onto creating a loop that formats each sheet within your workbook.

  * If you are looking for a useful resource for finding the code to loop through all worksheets in a workbook, check out this link [here](https://support.microsoft.com/en-us/help/142126/macro-to-loop-through-all-worksheets-in-a-workbook)
