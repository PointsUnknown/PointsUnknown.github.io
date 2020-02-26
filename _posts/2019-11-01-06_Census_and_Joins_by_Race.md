---
layout: post
title:  02 - Working with Census Data and Creating a Race Map of NYC
category: QGIS
navigation_weight: 2
description: This tutorial will guide you through the process of downloading census data and joining it to its corresponding shapefile to create a race map of New York City. In the process you will learn how to join by attributes, how to perform field calculations within QGIS, and how to create categorical as well as quantitative maps.
active: true
---
# Datasets
In this tutorial we will be using the following datasets:

* American Community Survey - Table B03002 (Hispanic or Latino Origin by Race). Download from the [U.S. Census Bureau FactFinder site](https://factfinder.census.gov).

* Census Block Groups - New York State 2017 census block. Download from [U.S. Census Bureau - Tiger/Line Shapefiles](https://www.census.gov/cgi-bin/geo/shapefiles/index.php). Select `2017` and `Web Interface`. Select `2017` again, if necessary, and `Block Groups`, and click `Submit`. Then, select `New York` as the state and click `Download`.

  * *Note*: if the `Web Interface` is not working - it often doesn't - select `FTP Archive`. There, select the folder `BG` and there download the `tl_2017_36_bg.zip` file.

* Boroughs - New York City boroughs. Download from [NYC Planning - Open Data](https://www1.nyc.gov/site/planning/data-maps/open-data/districts-download-metadata.page). Choose "Borough Boundaries (Clipped to Shoreline)", under "Borough Boundaries & Community Districts".

* Hydrography - New York City hydrography. Download from [NYC Open Data](https://data.cityofnewyork.us/Environment/Hydrography/drh3-e2fd). Once you get to the NYC OpenData page, click `Export` and choose the `Shapefile` format.

# About the Census

Census data is used as a key dataset in understanding the health and progress of our society. It provides metrics about our society and is used to normalize other data for identifying and measuring issues in our economy, environment, and society. This tutorial will explain the proper method for querying and downloading census data; preparing the data for QGIS; and joining, analyzing, and styling the data.

For reference, the U.S. Census has two main surveys, the Decennial Census and the American Community Survey. The [Decennial Census](https://www.census.gov/history/www/programs/demographic/decennial_census.html) is the major census survey, which is carried out every 10 years and attempts to count every person in the country. It has two major disadvantages: one, it only happens every 10 years, so for the years in between the last census might be too outdated and the next one too far away; and two, because it is not using any sampling techniques, it often under-represents minorities.

The second main survey is called the [American Community Survey (ACS)](https://www.census.gov/history/www/programs/demographic/american_community_survey.html) and happens continuously. Its questionnaire is sent to 295,000 addresses monthly and it gathers data on topics such as ancestry, educational attainment, income, language proficiency, migration, disability, employment, and housing characteristics. Its results come in 3 forms: 1-year estimates, 3-year estimates and 5-year estimates. The 1-year estimates are the most current but the least reliable. On the contrary, the 5-year estimates are not as current but are much more reliable.

# Downloading Census Data

The first step will be to download the 'empty' geography files for our unit of analysis (by 'empty' we mean without any census attributes, apart from `unique identifiers`). However, before doing this we should actually decide what unit of analysis we will use.

The [American Community Survey](https://www.census.gov/programs-surveys/acs/), which is the statistical survey we will be using, provides data at multiple geographic levels, all the way from the whole country to the block group (which in Manhattan can be anywhere between 1 and 4 city blocks). Some of the other geographic units of analysis include regions, states, counties and metropolitan statistical areas. However, not all the data comes at every geographical level, so in general, we will try to find the smallest unit of analysis available for our dataset. In our case, that will be the block group level.

* Because our data is available at the block group level, we will download TIGER/Line Shapefiles for that geographical level. Download at [U.S. Census Bureau - Tiger/Line Shapefiles](https://www.census.gov/cgi-bin/geo/shapefiles/index.php). Select `2017` and `Web Interface`. Select `2017` again, if necessary, and `Block Groups`, and click `Submit`. Then, select `New York` as the state and click `Download`.

* *Note*: if the `Web Interface` is not working - it often doesn't - select `FTP Archive`. There, select the folder `BG` and there download the `tl_2017_36_bg.zip` file.

Now we will fetch our data for analysis:

* Once you are on the [American FactFinder]((https://factfinder.census.gov)) website, click on the `ADVANCED SEARCH` tab. Here we will search for the data at multiple levels:

* Geography: `Block Groups - 150` for New York City counties. As a reminder, the official names of New York City counties are `Bronx`, `Kings`, `New York`, `Queens`, and `Richmond`.

* Dataset: Under `Topics` choose the `2017 ACS 5-year estimates` dataset.

* Under `Race and Ethnic Groups` select `Hispanic or Latino`.

* This set of criteria will quickly return a series of tables including `Hispanic or Latino Origin by Race (B03002)` which we will download and alter prior to importing into QGIS. Your final filter should should look like this:

    ![thumb](/assets/tutorial_images/13_CensusRace/01_AmericanFactfinder.png)

* Once you get the list of datasets, open the `B03002` table.

* You will notice that each row is an race/ethnicity category and every column is a block group. In order to bring this data in to QGIS we need to transpose columns and rows. Click on the `Modify Table` button and then click on `Transpose Rows/Columns`.

* Finally, click `Download` and choose `Use the data` and uncheck `Merge annotations and data into a single file`.

* Click `Ok`, wait for your data to be prepared and download it.

# Prepping Census Data for QGIS

In order to bring this census data into QGIS we need to re-format the tables, so that they are correctly read by the program and we can join them to their geographic boundaries. This is a two step process: first, we will format the actual tables in Excel, Google Spreadsheet or a simple text editor and, second, we will create two `.csvt` files (one for each table), which will tell QGIS the exact format for each of the fields in the tables.

Again, as with many things GIS, there are multiple ways of formatting the data. In our case we could do it using Excel, Google Documents (Spreadsheet) or even a simple text editor. Here, though, we will show you how to do it through Google Sheets. If you know how to do it in Google Sheets you should be able to figure out how to re-format the data using Excel in case you need to.

The great advantage of using Google Sheets (or Excel) is that if you need to, you can add and **calculate** new fields into your data (you can also do this in QGIS). However, if you were to do that in a text editor, you would need to manually calculate the value for every single row. On the other hand, doing the re-formating through a simple text editor means that you can control the format of the data much better and that you won't have any problems with Google Sheets or Excel auto-converting your data into other types (for example, from text into numbers or vice versa).

Another great advantage of using Excel or Google Sheets is that if you need to delete multiple fields (for example, all the margin of error fields), you can easily do it. Doing it in the text editor would be a nightmare. That being said, there are options, when downloading the data from American FactFinder, to not get the margin of error fields.

## Re-formating data in Google Sheets

* First, open a new Google Sheet (pro tip: just type `sheet.new` in your browser :sunglasses:).

* Once you've opened it, click on `File`, `Import...`, and choose `Upload`.

* Navigate to the folder where you saved your downloaded census tables and select the `ACS_15_5YR_B03002.csv` file.

* In the menu that follows select the following:

  * Import location: `Replace spreadsheet`

  * Separator type: `Detect automatically`

  * Convert text to numbers, dates and formulas: `No` (*this is very important*)

    ![thumb](/assets/tutorial_images/13_CensusRace/02_GoogleSheetsImportMenu.png)

  * Click `Import data`.

* Now we need to do two things:

  * One, rename the field names (header) and get rid of the second row, which is also a kind of header.

  * And two, delete all fields we won't be using.

* QGIS -- and specially ArcGIS -- are particular about field names, so to avoid problems limit your titles to maximum 8 characters, no spaces, no weird characters and start with a letter, not a number.

* First, delete all the fields we won't be using. Only keep the following ones:

  * GEO.id (Id)

  * GEO.id2 (Id2)

  * GEO.display-label (Geography)

  * HD01_VD01 (Estimate; Total:)

  * HD01_VD03 (Estimate; Not Hispanic or Latino: - White alone)

  * HD01_VD04 (Estimate; Not Hispanic or Latino: - Black or African American alone)

  * HD01_VD05 (Estimate; Not Hispanic or Latino: - American Indian and Alaska Native alone)

  * HD01_VD06 (Estimate; Not Hispanic or Latino: - Asian alone)

  * HD01_VD07 (Estimate; Not Hispanic or Latino: - Native Hawaiian and Other Pacific Islander alone)

  * HD01_VD08 (Estimate; Not Hispanic or Latino: - Some other race alone)

  * HD01_VD09 (Estimate; Not Hispanic or Latino: - Two or more races:)

  * HD01_VD12 (Estimate; Hispanic or Latino:)

* Now, rename the fields in the following way:
  
  * GeoID

  * GeoID2

  * GeoDisp

  * TotPop

  * White

  * AfcAm

  * Native

  * Asian

  * Pacific

  * OthAln

  * TwoMore

  * Hisp

* The names don't necessarily need to be like these ones. There's no standard way of naming these fields. The only thing we would recommend is to name them as close as possible to something you can actually read and understand, so that you and the other people who use these files can easily get what they mean. In the end, that is what metadata is there for, to tell you exactly what each of the fields means.

* Once you've renamed the fields, delete the second row. Now you are left with only one header field and the actual data.

* If by any reason Google Sheets is rendering the `GeoID2` column in scientific notation (for example, something like `3.6005E+11`), you should select that column and go to `Format / Number / Plain text`. You should see the numbers in their full value with no decimals.

    ![thumb](/assets/tutorial_images/13_CensusRace/03_GoogleSheetsNumberFormat.png)

* The last step before we export is to profit from the fact that we are Google Sheets (or Excel) and calculate a couple of fields that we will use in our maps. You could also do this in QGIS but it is much easier in Excel or Google Sheets.

  * First, we need to convert our values into numbers. In the import section, we specified that they'd be kept as text. This is a safe way to ensure Google Sheets (or specially Excel) doesn't convert our text into numbers with a weird format. However, now that we need to do some calculations, we do need them to be numbers:

  * To do this select all the columns that have actual values (from `TotPop` to `Hisp`) and select `Format / Number / Number`. Then, with the values still selected, click on the `Decrease decimal places` twice to get rid of the zeros after the decimal places.

  * Now that we have actual numbers, we will use the next available column to get the maximum value amongst each racial/ethnic group for each row. Name that column `MaxValue` and in the cell below the header type the following formula and then copy it down: `=MAX(E2:L2)`.

  * Third, for each block group we need to figure out what race/ethnicity holds this maximum value and makes up the largest group. For this, we will use the next available column: name it `MjrGrp` and write the following formula in the cell below the header: `=IF(M2=0,"None",INDEX($E$1:$L$1,0,MATCH(M2,E2:L2,0)))`. Now copy it down. This formula does a couple of things:

    * One, if the maximum value is equal to 0, it assigns `None` to the cell.

    * And two, if the maximum value is not 0, it looks for the maximum value and then matches that value with a column number, returning the top cell in that column (the header).

  * The last step before you export your data is to make sure that all the numbers are formatted without comma separators. To do this, select all the columns with values and go to `Format / Number / More Formats / Custom number format` and choose the one with a simple `0`. This will ensure that our numbers won't have decimal places nor comma separators (of course, if you were dealing with number with decimal places you would choose the one with decimal places). Hit `Apply`.

  ![thumb](/assets/tutorial_images/13_CensusRace/05_FormatNumbers.png)

* Finally, export your file as a .csv file. Go to `File / Download / Comma separated values (.csv, current sheet)`. Save your file and rename it `B03002.csv`.

![thumb](/assets/tutorial_images/13_CensusRace/04_GoogleSheetsReformat.png)

## Creating the .csvt file

* After exporting your CSV, you will need to create a .csvt file. This file will tell QGIS exactly what type of data each of the fields is in. The different types of data your fields can take are:

  * String - Represents text

  * Integer - Represents whole numbers

  * Real - Represents both negative and positive numbers, with decimal points

  * Date - Date in the format YYYY-MM-DD

  * Time - Time in the format HH:MM:SS+nn

  * DateTime - Date and time in the format YYYY-MM-DD HH:MM:SS+nn

* So, for every column we need to specify what type the data is in.

* In your text editor, open a new file.

* For every field, write the type of data it takes in quotation marks:

  * On the new file write (all in one line):

    ```text
    "String","String","String","Integer","Integer","Integer","Integer",
    "Integer","Integer","Integer","Integer","Integer","Integer","String"
    ```
  
  * Note that every item is separated by a comma and that the first three fields, even though they seem like they are numbers, are actually text fields. This is very important, since we are going to use those fields to join our census table to the census boundaries, which also contain those fields as text. If we have one file with text and another with integers or real numbers, the program won't be able to match it.

* If you are working on Mac's TextEdit you need to format your file as 'Plain Text'. To do this click on `Format` and then `Make Plain Text`. This will change your file from an .rtf to a simple .txt.

* Save your file with the same name as the table but with a different extension. It is important to do this so that QGIS understands that this .csvt file corresponds to the other .csv or .txt file. In both Windows Notepad and in Mac TextEdit you need to manually type the extension (.csvt) and in TextEdit you need to un-check the option that says 'If no extension is provided, use .txt'.

* This file should be saved as `B03002.csvt`.

* Your final file should look something like this:

    ![thumb](/assets/tutorial_images/13_CensusRace/04_CSVT.png)

Now that the files are ready we can move into QGIS and bring everything together. A packaged version of these csv/csvt files, along with all the other files you will need for this tutorial can be [found here](https://brown-institute-assets.s3.amazonaws.com/Objects/pointsunknown/CensusRaceEthnityTutorialData.zip).

# Importing Data to QGIS

* First, open a new map in QGIS and add the following layers (links at the beginning of this tutorial or in the package referred to right above). Remember to add the boroughs first so that the map takes on the right projection:

  * Boroughs

  * Block Groups

* Organize your layers so that the `Block Groups` are on top of the `Boroughs`.

    ![thumb](/assets/tutorial_images/13_CensusRace/05_LoadLayers.png)

* It's a good idea to rename your layers as you bring them in, as they sometimes come with cryptic file names. Go ahead and rename the block group and the boroughs layers by right-clicking on them and choosing `Rename Layer`.

* Next, import your cleaned ACS dataset. To do so, click on `Add Delimited Tex Layer` (Represented by a comma icon with a plus sign).

* In the menu that comes up, look for your `B03002.csv` file. Once you've selected your file QGIS will automatically select some presets. You should have the following options selected:

  * File format: `CSV (comma separated values)` - this is the format our data is in: each value is separated by a comma.

  * Record and Fields options:

    * Number of header lines to discard: `0`

    * `First record has field names`: checked.

    * `Detect field types`: checked.

  * Geometry definition: `No Geometry (attribute only table)` - our data does not have any geometry data: no coordinates or WKT ("well known text representation of geometry") data.

  * Your menu should look something like this:

    ![thumb](/assets/tutorial_images/13_CensusRace/06_Import_CSV.png)

* Add the data. Your table should appear in the layers panel, and if you right-click on it and open its attribute table you should see your data more or less how it was in Excel.

* To make sure the fields were imported in the right format, right-click on the layer and select `Properties...`. In there, select the `Fields` tab. This will show you the different fields in your layer as well as their types.

    ![thumb](/assets/tutorial_images/13_CensusRace/07_Field_Properties.png)

* Now that we have our layers loaded, we need to join our census dataset to the block groups geometry:

  * First, right click on your `Block Group` layer and select `Properties`, and on the left column, select the `Joins` tab.

  * Next, click the `+` sign and a prompt will appear.

  * Now, select `B03002` as the join layer, and `GeoID2` as the join field.

  * Next, select `GEOID` as the target field. Make sure both the join field and the target field are of the same type. In this case, both of them should say `abc` before their names. This means they are both text fields.

  * Next, check the `Joined Fields` box and select `TotPop` `White` `AfcAm` `Native` `Asian` `Pacific` `OthAln` `TwoMore` `Hisp` `MaxValue` and `MjrGrp`. This way, we will only join those fields.

  * Finally, check the `Custom Field Name Prefix` box and get rid of the text there. This will make sure the new fields don't have any prefix in their titles (you would leave this on if, for example, you wanted to maintain a record of where the fields are coming from).

* Your join menu should look like this:

    ![thumb](/assets/tutorial_images/13_CensusRace/08_JoinMenu.png)

* Hit `OK` and `OK` to close the properties panel.    

* After joining any dataset, the first thing you should do is check the attribute table of the recipient dataset (block group) and make sure you see the new columns.

    ![thumb](/assets/tutorial_images/13_CensusRace/09_JoinResult.png)

* The join was successful, but in looking at the attribute table, we see that some of the rows in the block group file have *`NULL`* values. This is because the geometry file includes all the block groups in New York State, while our csv file has only data for the block groups in New York City.

* To filter out the block groups located outside of New York City we will write a selection query that picks only the block group whose county code (`COUNTYFP`) matches those of New York City. Then, we will export these selected block groups as a new file, and in the process, give that file the standard New York City geographic projection:

  * In the attribute table of the block groups file click on the `Select features using an expression` button (the one with an "ε" over a yellow square).

  * Once in there write the following expression: `"COUNTYFP" = '005' OR "COUNTYFP" = '047' OR "COUNTYFP" = '061' OR "COUNTYFP" = '081' OR "COUNTYFP" = '085'` and click `Select features`. In the top of the attribute table behind the selection panel you will see that it now says there are 6493 features selected.

    ![thumb](/assets/tutorial_images/13_CensusRace/10_SelectByExpression.png)

  * Click `Close` and close also the attribute table. In the map you should see all the block groups for New York City highlighted in yellow while the ones for the rest of the state remain in their original color.

  * Finally, right-click on the block group layer and select `Export`, `Save Selected Features As...`.

  * In the following menu choose:

    * Format: `ESRI Shapefile` - this is the same format of our other layers.

    * Save as: choose the appropriate location and name for your file.

    * CRS: `EPSG:2263 - NAD 83 / New York Long Island (ftUS)` - this is the coordinate system we are working with and we want this layer to have the same one.

    * Check `Save only selected features`.

    * Check `Add saved file to map` - so that once you export the layer, the layer is added to your map.

    ![thumb](/assets/tutorial_images/13_CensusRace/11_SaveAs.png)

  * Once you export your layer, and it's automatically added to your map, you can open its attribute table to check that it has all the right fields. Finally, right-click on the original block group layer and the csv file that we imported and remove them from the map.

* Now, we are ready to process, symbolize, and visualize our data.

# Creating a Categorical Race/Ethnicity Map

* To create a categorical map of race/ethnicity in the city right-click on the new block group layer and choose `Properties...`

* Once there, choose the `Symbology` tab on the left, and choose `Categorized` from the dropdown menu at the top.

* Next, select the `MjrGroup` field as the `Value` and then hit `Classify` to load all the different values in that column.

* Once you have all the values you can uncheck the ones you don't need, like `None` and `all other values`.

* Finally, let's use a good color palette to differentiate the various races/ethnicities. A great resource for choosing color is [Color Brewer](http://colorbrewer2.org). Their default color choices might not be the most stylish but they will provide a good starting point.

* Change the color and the stroke by double clicking on the color box next to each category. Use the following colors for each of the categories:

  * African American: `#8dd3c7`

  * Asian: `#bebada`

  * White: `#ffffb3`

  * Hispanic: `#fb8072`

  * Two or More, and Other Alone (I'm grouping these two categories together): `#80b1d3`

* For all, choose `Stroke style` `No Pen`

* While you are on that menu, change the `Legend` value to the actual name of the category.

* Your final symbology menu should look something like this:

    ![thumb](/assets/tutorial_images/13_CensusRace/12_Symbology.png)

* After this, add the the `Hydrography of New York City` layer to make the map more readable.

* Also, right-click on the boroughs layer and make a copy of it. We will use one of them as a background color and another as an overall border on top of the other layers.

* Apply the following style to each of the other layers (by right-clicking on them and going to the `Symbology` tab):

  * Boroughs:

    * `Fill style` `No Brush`

    * `Stroke color` `#000000`

    * `Stroke width` `0.25 Points`

  * NYC_Hydrography:

    * `Fill color` `#ffffff`

    * `Fill style` `Solid`

    * `Stroke style` `No Pen`

  * Boroughs (the bottom layer):

    * `Fill style` `Solid`

    * `Fill color` `#e5e5e5`

    * `Stroke style` `No Pen`

# Print Layout

The Print Layout (previously called 'Print Composer') is where you will format your map for its final output. Here you will specify the output size, you will add a legend, a scale bar, a north arrow (if needed) and any additional text (titles, sources, explanations and credits). Although the Print Layout exists as its own window it will still be linked to the map Project we have been working on.

* First, create a new Print Layout in `Project`, `New Print Layout`. Give it a custom name if you want, although this is not necessary.
  
* Once you are in the Print Layout you need to add a new map. Think of it as if you had a blank piece of paper and you were adding a window onto the map you've been working on. That window is a link to your Project and if you change things in the Project those changes will still be reflected in the Print Layout.

* To add a new map, click on the button `Add new map` on the left-hand panel and draw a rectangle on the blank page.

  ![thumb](/assets/tutorial_images/01_BasicMap/08_AddNewMap.png)
  
* Once you add the map you can adjust its size and position by dragging it from its corners.

* You might notice that if you change the size of the map it doesn't necessarily update. To avoid this, on the right-hand panel, where it says `Main properties`, click on `Update preview`.

* To move the content inside the Print Layout (as opposed to the whole page) use the `Move item content` tool on the left-hand panel.

* Next, you need to center and zoom in the map on the area you want to focus on. For the purposes of this tutorial, we will move and zoom so the whole city is in the map. To do this, move the content of the map to this area and on the right-hand panel, under `Main properties`, adjust your `Scale` to 235,000.

* If any of the colors or line weights seem too big or two small or not correct, you can always go back to the Project and change them there. When you return to your Print Composer you can update your preview and the changes will be reflected.

* Add a scale bar by going to `Add Item` `Add scale bar` and clicking on the map.

* The default scale bar is too big. To change this, go to the right-hand panel, in the top part make sure you select the `Scale bar`, and adjust its properties in the `Main Properties` panel. You can also adjust its units, its colors and even its font.

* To add a legend click on `Add Item` `Add legend` and then click on the map. You will notice that QGIS automatically generates a line in the legend for every layer in the map. We only need the land use ones, so we need to customize the legend:

* On the right-hand panel, under Legend items uncheck `Auto update` and then select the layers that you don't want in the legend and remove them with the 'minus' button. Do the same thing inside the Lots layer with the categories you don't want to display.

* Also, further down, uncheck the `Background` option.

* Under `Spacing` change the `Symbol space` to 0.00mm.

* And under `Fonts` change the `Item font` to 8.

* Since we did not rotate the map we don't need to add a north arrow. If you rotate your map you **must** add a north arrow. If you wanted to, you could add a north arrow by clicking on `Add Item` `Add arrow`.

* Finally, to add a title and a 'source' text, click on the `Add new label` button on the left-hand panel and click on the map. Customize these labels by changing their color, size and location.

* The last step is to export the map as a .pdf file. Use the `Export as PDF` button on the top toolbar and save your map.

* Your final map should look something like this:

    ![Final Race/Ethnicity Map](/assets/tutorial_images/13_CensusRace/13_FinalRaceMap.png)