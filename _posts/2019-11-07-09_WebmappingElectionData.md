---
layout: post
title:  09 - Introduction to Web Mapping with Election Data
category: [QGIS, Web Mapping, Mapbox]
navigation_weight: 10
description: This tutorial will guide you through the basic steps in creating an interactive web map displaying 2016 presidential election data. In this process we will use Mapbox GL JS as the main JavaScript library powering the interactive map.
---
# Introduction
In this tutorial we will use Mapbox GL JS to create an interactive webmap of 2016 presidential election results at the state and county levels. We will recreate the style used by the New York Times in their [election results maps](https://www.nytimes.com/interactive/2019/11/05/us/elections/results-kentucky-governor-general-election.html).

![New York Times Kentucky Governor Election Results Map](/assets/tutorial_images/15_Webmapping/03_NYT_KentuckyMap.png)

For a very useful overview of election mapping check out [this article](https://www.nytimes.com/interactive/2016/11/01/upshot/many-ways-to-map-election-results.html) from the New York Time's Upshot.

# Other Mapping Libraries
This tutorial uses [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/). However, this is by no means the only mapping library out there. Other notable libraries are:

* [Tangram](https://github.com/tangrams/tangram) - Tangram is a JavaScript library for rendering 2D & 3D maps live in a web browser with WebGL. It is tuned for OpenStreetMap but supports any source of GeoJSON/TopoJSON or binary vector data, including tilesets and single files ([Documentation](https://tangrams.readthedocs.io/en/latest/)). Pairs well with [Nextzen Vector Tiles](https://www.nextzen.org/).

* [Leaflet](https://leafletjs.com/) - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.

* [OpenLayers](https://openlayers.org/) - OpenLayers is a high-performance, feature-packed library for creating interactive maps on the web. It can display map tiles, vector data and markers loaded from any source on any web page. OpenLayers has been developed to further the use of geographic information of all kinds.

* [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/tutorial) - The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices. The Maps JavaScript API features four basic map types (roadmap, satellite, hybrid, and terrain) which you can modify using layers and styles, controls and events, and various services and libraries.

* [Carto JS](https://carto.com/developers/carto-js/v3/) - CARTO.js is a JavaScript library that interacts with different CARTO APIs. It is part of the CARTO Engine ecosystem.

* [D3.js](https://d3js.org/) - D3 is not necessarily a mapping library, but more of a general visualization library. It does include many mapping functions and can produce excellent maps.

# Datasets
This tutorial uses the following datasets:

* US Counties. Download from [U.S. Census Bureau - Tiger/Line Shapefiles](https://www.census.gov/cgi-bin/geo/shapefiles/index.php). Select `2016` and `Web Interface`. Select `2016` again, if necessary, and `Counties (and equivalent)`, and click `Submit`. Then, click `Download national file`.

* US States. Download from [U.S. Census Bureau - Tiger/Line Shapefiles](https://www.census.gov/cgi-bin/geo/shapefiles/index.php). Select `2016` and `Web Interface`. Select `2016` again, if necessary, and `States (and equivalent)`, and click `Submit`. Then, click `Download national file`.

* US Presidential Election Results at the County Level. Download from [MIT Election Data + Science Lab](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ)

* *Note: if the U.S. Census Bureau `Web Interface` is not working - it often doesn't - select `FTP Archive`. There, select the folder `TIGER1016` and then either `COUNTY` or `STATE` and download the files `tl_2016_us_county.zip` and `tl_2016_us_state.zip`.*

<!-- A packaged file with the census and block group data can be found [here](https://brown-institute-assets.s3.amazonaws.com/Objects/pointsunknown/dataTutorial_03.zip). -->

# Preparing the Data
Before beginning with the web map we need to prepare the election data and the shapefiles we will display on the map:
* First, take the election results data and either though Excel, Google Sheets, or any other means, generate two different `.csv` files, one with results at the county level, and one with results at the state level.

* The files need to have the following fields:
  * States: `State`, `GeoID`, `Trump`, `Clinton`, `Other`, `Total`, `Winner`, `WnrPerc`
  * Counties: `County`, `State`, `GeoID`, `Trump`, `Clinton`, `Other`, `Total`, `Winner`, `WnrPerc`<br><br>

* Here's what each of these fields means:
  * `County`: County name
  * `State`: State name
  * `GeoID`: Geographic identifiers to match the county and state shapefiles downloaded from the U.S. Census Bureau
  * `Trump`: Number of votes for Donald Trump
  * `Clinton`: Number of votes for Hillary Clinton
  * `Other`: Number of votes for other candidates 
  * `Total`: Number of total votes for the state or county
  * `Winner`: Winning candidate for the state or county
  * `WnrPerc`: Percentage of votes out of the total for the winning candidate<br><br>

* Don't forget to also create the `.csvt` files to accompany these two tables detailing the type of data for each of the fields.

# Creating the GeoJSON Files for the Webmap
The webmap will use vector tiles coming from Mapbox and election data that we will overlay on top of it. The election data will come in the form of GeoJSON files. To generate them we need to join the two election data `.csv` files we just produced with the state and county shapefiles downloaded from the U.S. Census Bureau.
* In QGIS join the election data tables to their respective shapefiles.

* Once they are joined properly, right-click on each of the layers and export them as JSON files. Although the format you choose here is JSON, the files will actually be exported as GeoJSON, which is just a version of a JSON file that also contains geographic information.

* In addition to the county and state polygon files we will also be exporting a GeoJSON file with point data for the county election results:

    * To generate that GeoJSON point file we first need to create a shapefile with the county centroids and with their corresponding attributes. 
    
    * QGIS has a very simple tool to generate centroids under `Vector / Geometry Tools / Centroids...`, however, since some county polygons have very irregular shapes, some of the centroids will be placed outside the actual polygons. To solve this problem, you should use the `realcentroid` plugin.
      
      * To install the plugin go to `Plugins / Manage and Install Plugins...` and search for `realcentroid`. Once you find it, go ahead and install it.<br><br>

    ![RealCentroid Plugin](/assets/tutorial_images/15_Webmapping/01_RealCentroidPlugin.png)
    
    * Once installed, use the plugin to generate centroids from the county layer. In addition to making sure the centroid is located within the polygon, this plugin also adds the attributes from the source file automatically to the centroid file.<br><br>

* Once you have the centroid shapefile, export it as a JSON file.

* At the end of this process you should have three GeoJSON files, one with states polygon data, one with county polygon data, and one with county point data.

# Setting Up the Base Map in Mapbox Studio
Before setting up our mapping site we should style the basemap we will use. To do this, go to your [Mapbox Studio](https://studio.mapbox.com/) page and create a `New style`.

* It is usually much easier to start from a template, otherwise you will have to add and style every single layer your map will use and do this for all zoom levels. The templates provided by Mapbox already include all this styling and have been tested and refined many many times.

* To create our election maps we will use the `Light` template. Choose it and click `Customize Light`. This template provides a very neutral background on which to display our election data.

![Customize Mapbox Style](/assets/tutorial_images/15_Webmapping/02_CustomizeMapboxStyle.png)

* On the next screen you'll see the actual editor view with all the layers included on the map listed on the left hand side. Layers with a `T` on their left represent label layers. There are also point, line, and polygon layers, and groups of layers.

* At the top of the editor you will see the current zoom level (10 by default at the start of the editing session), and the map starting coordinates.

* If you click on a layer you will see its style, and depending on the type of layer it is (point, line, polygon, text) you will be able to style different attributes.

* I find it very useful to click on the `Select data` button at the top of the menu, and to cycle through the layers in this view.

  * Here, the items belonging to this specific layer will be highlighted in two colors, green for those items that are visible at this zoom level, and mauve for the items that belong to the layer but are not visible because of some styling condition.

![Select Data View Mapbox Studio](/assets/tutorial_images/15_Webmapping/04_SelectDataView.png)

* For this basemap we are actually going to do very little editing. Just a couple of adjustments to the color of the labels and hiding a few layers we don't need.
  
  * First, rename the style by clicking on the `Light` text at the top left corner of the window. Rename it to something like `Customized-Light` or something like that.
  
  * Second, hide the following layers by selecting them and then clicking on the crossed-out eye at the top of the layers panel (you could also remove them by clicking on the trash icon):
    * building
    * building-outline
    * national-park
    * landcover
    * water-shadow
    * landuse<br><br>

  * Third, adjust the font color of some layers by clicking on the layer, and then on the color sub-menu (remember you need to be in the `Style` and not in the `Select data` view). Set the color to `#4d4d4d` for the following layers:
    * country-label
    * state-label
    * settlement-label
    * settlement-subdivision-label<br><br>
  * Also set the color of the water layer to `#d9e2e3`.

![Font color adjustment](/assets/tutorial_images/15_Webmapping/05_FontColor.png)

  * Next, remove the halo from the text of the following layers. Do this by selecting the layer, then clicking on the `Halo color` and clicking on `Clear value`.
    * country-label
    * state-label
    * settlement-label
    * settlement-subdivision-label
    * airport-label
    * poi-label
    * road-label
    * natural-line-label
    * natural-point-label<br><br>

  * Finally, adjust the visibility zoom level for the road-label layer:

    * In the `Select data` view, highlight the road-label layer and go to the `Zoom extent` sub-menu. Set the minimum zoom to 13 and the maximum to 22. That way, road labels won't appear until you are pretty zoomed in, and you will avoid them cluttering a more general view of the election data.

![Zoom level adjustment](/assets/tutorial_images/15_Webmapping/06_ZoomLevel.png)

* Once these adjustments are done, click on the `Publish` button. You will ge a window were you can compare the original vs. the modified style. Make sure everything is alright and click `Publish` again.

* Finally, click on the `Styles` button at the top-left corner of the editor to go back to your styles list. You should see your new style listed there.

* To use this style on your interactive map, click on the `Share` button right of the style and copy the `Style URL` under `Developer resources`. It should look something like `mapbox://styles/xxxxxx/xxxxxxxxxxx`.

* The last thing we need to do in Mapbox is to generate an `Access token`.

  * To do this, click on the helmet at the top-right corner of the page and select `Account`, or go to [Mapbox's account page](https://account.mapbox.com/).
  
  * Once there, click on `+ Create a token`. Give it a name, (usually corresponding to your project), and, for now, leave the URL blank. Once you have a set URL for your live webmap you will have to come back here and set the URL for this token, to restrict its use just for this address.
  
  * Once this is done, click `Create token`. You will see your new token in your token list page. It should look something like `pk.xx...` Copy it and have it handy for the next section.

# Setting Up Your HTML, CSS, and JavaScript
The next step in the process is to create the basic setup for a webmap. This will comprise, initially, three files: `index.html`, `styles.css`, and `map.js`. The `index.html` file will contain the basic information your site will display, the `styles.css` will contain the styling of that information, and the `map.js` will contain the JavaScript code powering the map.

For this part of the process it is highly recommended to use an advanced text editor like [VS Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), or [Sublime Text](https://www.sublimetext.com/). These editors provide advanced functionality and formatting that will make writing code much easier and faster.

* First, create a new folder on your computer for your webmap. In there, create the three (empty) files mentioned above `index.html`, `styles.css`, and `map.js`.

* Copy the following code to your `index.html` file:

~~~ html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>2016 Election Results Map</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div id='map'></div>
    <script type='text/javascript' src="map.js"></script>
</body>

</html>
~~~

* This html page contains the following elements:
  
  * In the `head`:
    
    * Information about the encoding of the site
    
    * The title (see on the tabs of your browser)
    
    * Links to Mapbox's Javascript libraries and styles
    
    * And a link to your own style page (`<link rel="stylesheet" href="styles.css">`). If you move or rename your `styles.css` file, make sure to adjust this link.
  
  * In the `body`:
    
    * A new `div` element to hold the map (with a `map` id)
    
    * And a link to the `map.js` JavaScript file

* Next, copy the following code to your `map.js` file:

~~~ js
mapboxgl.accessToken = 'Add your access token here';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'Add your style URL here',
    zoom: 6.5,
    center: [-85.5, 37.7]
});
~~~
    
* This `map.js` file contains the code that creates and controls the map:

  * Here, first, you setup your access token and then you create a `map` variable that creates the map and sets its basic characteristics: 
    * What div it is in
    * The style to use
    * The starting zoom level
    * And the starting coordinates.<br><br>

* Finally, copy the following code to your `styles.css` file:

~~~ css
body {
    margin: 0;
    padding: 0;
}

#map {
    width: 90%;
    height: 600px;
    margin: 5em auto;
}
~~~

  * This `css` files sets some very basic styling:
    
    * For the `body` it declares margins and padding to be 0.
    
    * And for the `map` div, it sets the width to be 90% of the page, the height to be 600px, and horizontal margins to be of 5em up and down, and automatic on each side.
    
    * *Note that a height of 100% doesn't work. The best bet is to set a fixed height, like 600px.*

* With this setup you can open your browser and there select `File / Open` and choose your `index.html` file. Your page should load with an interactive map centered on Kentucky and using your Mapbox style. You should be able to pan around and zoom in and out in this map.

![Basic map](/assets/tutorial_images/15_Webmapping/07_BasicMap.png)

# Adding Layers to Your Interactive Map
Next we need to add our layers to the map. We will start with the states election results and then move on to the counties. The dots will be used in a separate map further down in this tutorial.

## Running a Localhost
One thing to note before proceeding is that for this part of the tutorial, and for the rest of it, you will need to run a `localhost` on your machine in order for the map to work properly. Running a `localhost` is equivalent to starting your own swerver on your computer and accessing through your browser.

* To run a `localhost` on a **MacOS** do the following:

  * Open your `Terminal` application.

  * Use `cd` (change directory) to navigate to your map folder. For example type something like `cd pointsunknown/mymap` to navigate to the `mymap` folder inside the `poinstunknown` folder.
  
  * Once you are in the directory where the `index.html`, `styles.css` and `map.js` files are located type `python -m SimpleHTTPServer 8000` if you have Python 2.x or `python3 -m http.server 8000` if you have Python 3.x on your computer (by defaults, Macs come with Python 2.7 installed but to check which version you are running you can type `python -V` in your terminal).
  
  * Finally, open your browser and navigate to `http://0.0.0.0:8000/`. You should see your map there.
  
## Adding a GeoJSON Layer
* First, create a sub-folder in your map folder. Call it `data`. Add your GeoJSON election files there.

* Next, we need to create a function within our `map.js` file that will add a new layer to the map and provide its basic settings:

  * Add the following code to the end of the file:

~~~ js
map.on('load', function(){
    map.addLayer({
        'id': 'us_states_elections',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint': {
            'fill-color': '#cccccc',
            'fill-outline-color': '#000000'
        }
    });
});
~~~

  * This piece of does the following:
  
    * Waits until the map is loaded and then adds a new layer.
    
    * This layer has an `id` and is of type `fill`, which is equivalent to polygon. Other types include `background`, `line`, `symbol`, `raster`, `circle`, `fill-extrusion`, `heatmap`, and `hillshade`.
    
    * It provides the `source` for this layer. In our case it's of the type `geojson` and it's located in the `data` folder.
    
    * Finally, it provides the style (`paint`). Here, we are using a very basic gray fill and black outline.

* If you reload your map now and zoom out you should see the states (all in gray) covering the US.

![Added the states layer](/assets/tutorial_images/15_Webmapping/08_StatesLoaded.png)

## Styling Layers Based on Categorical Attributes
To style the states layer based on who won we need to modify the attributes of that layer at the moment of adding it to the map. For this, modify the `map.on` function to the following:

~~~ js
map.on('load', function(){
    map.addLayer({
        'id': 'us_states_elections',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint': {
            'fill-color': [
                'match', ['get', 'Winner'],
                'Trump', '#cf635d',
                'Clinton', '#6193c7',
                'Other', '#91b66e',
                '#ffffff'
            ],
            'fill-outline-color': '#ffffff'
        }
    });
    map.addLayer({
        'id': 'us_states_elections_outline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint':{
            'line-color': '#ffffff',
            'line-width': 0.7
        }
    });
});
~~~

* Here wer are doing two main things:

  * First we are modifying the attributes of the polygon layer to assign the fill based on the `Winner` property:
  
    * Here, we use a `match` function, inside the `fill-color` attribute, and in that `match` function we `get` the `Winner` property from the GeoJSON file.
    
    * In that `match` function we assign a color value for each category and add a final color value for the *`NULL`* values.
    
  * Second, we are adding an additional layer, based on the first one, but of type `line` to create the *thick* white outlines of the polygons:
    
    * The problem is that currently Mapbox GL JS doesn't allow you to control the with of the outline of a polygon. Therefore, we create a new layer, with different `id` and of type `line` but based on the same source, and we can assign thickness and color.<br><br>
    
* The current map should look something like this:

![Choropleth map](/assets/tutorial_images/15_Webmapping/09_ChoroplethMap.png)

## Adding the Layers Underneath the Labels
If you look closely, you'll notice that our new layer is sitting on top of the state and city labels. To correct this we need to identify what layer the election data should be underneath of, and add that as a property of our layer.

* Modify your `map.on` function to the following:

~~~ js
map.on('load', function(){
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': 'us_states_elections',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint': {
            'fill-color': [
                'match', ['get', 'Winner'],
                'Trump', '#cf635d',
                'Clinton', '#6193c7',
                'Other', '#91b66e',
                '#ffffff'
            ],
            'fill-outline-color': '#000000'
        }
    }, firstSymbolId); // Here's where we tell Mapbox where to slot this new layer
    map.addLayer({
        'id': 'us_states_elections_outline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint':{
            'line-color': '#ffffff',
            'line-width': 0.7
        }
    }, firstSymbolId); // Here's where we tell Mapbox where to slot this new layer
});
~~~

* Here we did two things:

  * First, we added a short function that loops through the existing layers of the map and identifies the first one of type `symbol`. That's the one our states layer should be underneath of.
  
  * Second, at the end of each `map.addLayer` function, we added this first `symbol` layer to mark where these new layers should be slotted in the stack.

![Layers in the right order](/assets/tutorial_images/15_Webmapping/10_LayersOrdered.png)

## Changing the Opacity Based on the Data
Another thing we can do to make this map tell a better, more nuanced story is to change the opacity of the color based on the actual percentage of votes the winning candidate got. To do this we can change the opacity of the fill color based on the percentage of votes given to the winning candidate.

* To do this modify your `map.addLayer` function (for the polygon layer) to the following:

~~~ js
map.addLayer({
    'id': 'us_states_elections',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/StateElectionData.geojson'
    },
    'paint': {
        'fill-color': [
            'match', ['get', 'Winner'],
            'Trump', '#cf635d',
            'Clinton', '#6193c7',
            'Other', '#91b66e',
            '#ffffff'
        ],
        'fill-outline-color': '#000000',
        'fill-opacity': [
            'step', ['get', 'WnrPerc'],
            0.3, 0.4,
            0.5, 0.5,
            0.7, 0.6,
            0.9
        ]
    }
}, firstSymbolId);
~~~

* Note the new expression in the `fill-opacity` section. Here, we are setting up a series of `steps` based on the `WnrPerc` field in the data. This means, for example, that for values below 0.4, the opacity will be 0.3, for values between 0.4 and 0.5, the opacity will be 0.5, and so on.

* Note also that there always has to be an extra value, which will be applied to any values that don't fall within the specified values. In this case this value is 0.9. This also applies to the `match` expression in the `fill-color` section; that value is `#ffffff`.

![Opacity fill values](/assets/tutorial_images/15_Webmapping/11_OpacityFill.png)

## Adding the County-Level Data and Setting Minimum and Maximum Zoom Levels
The overall idea with this map is to have the state level data show up at a zoomed-out level and as you zoom in pass a certain point, to have the county level data replace the state level one. For this we need to first add the county-level data, and then set the maximum and minimum zoom levels for both layers.

* First, add the county-level data to the map and style it, just like we did with the state-level data. This means adding two new layers to your map, the polygons and the outlines:

~~~ js
map.addLayer({
    'id': 'us_counties_elections',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/CountyElectionData.geojson'
    },
    'paint': {
        'fill-color': [
            'match', ['get', 'Winner'],
            'Trump', '#cf635d',
            'Clinton', '#6193c7',
            'Other', '#91b66e',
            '#ffffff'
        ],
        'fill-outline-color': '#000000',
        'fill-opacity': [
            'step', ['get', 'WnrPerc'],
            0.3, 0.4,
            0.5, 0.5,
            0.7, 0.6,
            0.9
        ]
    }
}, 'us_states_elections');
map.addLayer({
    'id': 'us_counties_elections_outline',
    'type': 'line',
    'source': {
        'type': 'geojson',
        'data': 'data/CountyElectionData.geojson'
    },
    'paint': {
        'line-color': '#ffffff',
        'line-width': 0.5
    }
}, 'us_states_elections');
~~~

* Note that at the end of each `addLayer` function we are specifying underneath which layer these new layers should go. In this case, we are loading the two county-level data layers underneath the state-level data.

* Next, we should set a maximum and minimum zoom for the map, and also for the state and the county-level layers. That way the layers won't both be visible at the same time and the map can transition between one and the other.
  
  * To set the max and min zoom levels for the map add the following two lines to the setup of the `map` variable (make sure you add a comma at the end of each line):

    * `maxZoom: 9,`

    * `minZoom: 3,`
  
  * To set the max and min zoom levels of the other layers, add the following lines in the `addLayer` function:

    * State-level polygons:
      * `'maxzoom': 6`
    * County-level polygons and outlines:
      * `'minzoom': 6`<br><br>

* The map should look like this at zoom level 5:

![Zoom level 5](/assets/tutorial_images/15_Webmapping/12_ZoomedOut.png)

* And like this at zoom level 6:

![Zoom level 5](/assets/tutorial_images/15_Webmapping/13_ZoomedIn.png)

# Creating Popups
Apart from zooming in and out, and panning, the other main feature of interactive maps is popups, which give you extra information about a specific feature. In this section we will create popups both for the state and the county-level data.

Interacting with the map usually happens in `map.on` functions. To set the popup behavior we will code six of those functions, three for the state and three for the county data: one function will open the the popup, and two will change the cursor icon -- into a hand when hovering over a feature, and back into an arrow when not over one.

* Add the following piece of code at the end of your `map.js` file:

~~~ js
// Create the popup
map.on('click', 'us_states_elections', function (e) {
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(winner + '<br>' + wnrPerc)
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on('mouseenter', 'us_states_elections', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'us_states_elections', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'us_counties_elections', function (e) {
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(winner + '<br>' + wnrPerc)
        .addTo(map);
});
map.on('mouseenter', 'us_counties_elections', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'us_counties_elections', function () {
    map.getCanvas().style.cursor = '';
});
~~~

* In these functions we are doing the following:

  * First, we are saying, if there's a click on the map, and that click is on a `us_states_elections` feature, do the following with that feature (which we will call `e`):
  
    * Get the `Winner` and `WnrPerc` attributes and assign them to their own variables.
    
    * Create the popup (`new mapboxgl.Popup()`) with coordinates from the click element, with some `html` elements based on the variables, and add it to the map.

  * Second, we are saying that if the mouse enters (`mouseenter`) or leaves (`mouseleave`) one of these features, change the icon for the mouse to a `pointer` or back to the default.

* The map with the basic popup should look like this:

![Basic popup](/assets/tutorial_images/15_Webmapping/14_BasicPopup.png)

* The only thing left to do is to add more information to the popup and style it properly.

* The final popup JavaScript section should look like this:

~~~ js
// Create the popup
map.on('click', 'us_states_elections', function (e) {
    var stateName = e.features[0].properties.NAME;
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    var totalVotes = e.features[0].properties.Total;
    wnrPerc = (wnrPerc * 100).toFixed(0);
    totalVotes = totalVotes.toLocaleString();
    stateName = stateName.toUpperCase();
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>'+stateName+'</h4>'
            +'<h2>'+winner+'</h2>'
            + '<p>'+wnrPerc+'% - ('+totalVotes+' votes)</p>')
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on('mouseenter', 'us_states_elections', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'us_states_elections', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'us_counties_elections', function (e) {
    var stateName = e.features[0].properties.State;
    var countyName = e.features[0].properties.NAMELSAD;
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    var totalVotes = e.features[0].properties.Total;
    wnrPerc = (wnrPerc * 100).toFixed(0);
    totalVotes = totalVotes.toLocaleString();
    stateName = stateName.toUpperCase();
    countyName = countyName.toUpperCase();
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + countyName + ' - ' + stateName + '</h4>'
            + '<h2>' + winner + '</h2>'
            + '<p>' + wnrPerc + '% - (' + totalVotes + ' votes)</p>')
        .addTo(map);
});
map.on('mouseenter', 'us_counties_elections', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'us_counties_elections', function () {
    map.getCanvas().style.cursor = '';
});
~~~

* And the styling in the css should look like this:

~~~ css
.mapboxgl-popup-content h4 {
    font-weight: 300;
    font-size: 0.9em;
    border-width: 0px 0px 0.5px 0px;
    border-style: solid;
    border-color: rgb(80, 80, 80);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}
.mapboxgl-popup-content h2 {
    font-weight: 500;
    margin-top: 0.5em;
    margin-bottom: 0.3em;
}
.mapboxgl-popup-content p {
    font-weight: 300;
    margin-top: 0.3em;
    margin-bottom: 0em;
}
~~~

* Your popups should now look something like this:

![Styled popup](/assets/tutorial_images/15_Webmapping/15_StyledPopup.png)

# Final Code
The final code for this interactive map is as follows:
* `index.html`:

~~~ html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>2016 Election Results Map</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div id='map'></div>
    <script type='text/javascript' src="map.js"></script>
</body>
</html>
~~~

* `styles.css`:

~~~ css
body {
    margin: 0;
    padding: 0;
}

#map {
    width: 90%;
    height: 600px;
    margin: 5em auto;
}

.mapboxgl-popup-content h4 {
    font-weight: 300;
    font-size: 0.9em;
    border-width: 0px 0px 0.5px 0px;
    border-style: solid;
    border-color: rgb(80, 80, 80);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.mapboxgl-popup-content h2 {
    font-weight: 500;
    margin-top: 0.5em;
    margin-bottom: 0.3em;
}

.mapboxgl-popup-content p {
    font-weight: 300;
    margin-top: 0.3em;
    margin-bottom: 0em;
}
~~~

* `map.js`:

~~~ js
mapboxgl.accessToken = 'Your access token here';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'Your mapbox style URL here',
    zoom: 3,
    maxZoom: 9,
    minZoom: 3.5,
    center: [-99, 38],
    maxBounds: [[-180, 15], [-30, 72]]
});

map.on('load', function(){
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': 'us_states_elections',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint': {
            'fill-color': [
                'match', ['get', 'Winner'],
                'Trump', '#cf635d',
                'Clinton', '#6193c7',
                'Other', '#91b66e',
                '#ffffff'
            ],
            'fill-outline-color': '#000000',
            'fill-opacity': [
                'step', ['get', 'WnrPerc'],
                0.3, 0.4,
                0.5, 0.5,
                0.7, 0.6,
                0.9
            ]
        },
        'maxzoom': 6
    }, firstSymbolId);
    map.addLayer({
        'id': 'us_states_elections_outline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint':{
            'line-color': '#ffffff',
            'line-width': ['interpolate', ['exponential', 2], ['zoom'], 3, 0.5, 7, 3]
        }
    }, firstSymbolId);
    map.addLayer({
        'id': 'us_counties_elections',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/CountyElectionData.geojson'
        },
        'paint': {
            'fill-color': [
                'match', ['get', 'Winner'],
                'Trump', '#cf635d',
                'Clinton', '#6193c7',
                'Other', '#91b66e',
                '#ffffff'
            ],
            'fill-outline-color': '#000000',
            'fill-opacity': [
                'step', ['get', 'WnrPerc'],
                0.3, 0.4,
                0.5, 0.5,
                0.7, 0.6,
                0.9
            ]
        },
        'minzoom': 6
    }, 'us_states_elections');
    map.addLayer({
        'id': 'us_counties_elections_outline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/CountyElectionData.geojson'
        },
        'paint': {
            'line-color': '#ffffff',
            'line-width': ['interpolate', ['exponential', 2], ['zoom'], 6, 0.5, 9, 1]
        },
        'minzoom': 6
    }, 'us_states_elections');
});

// Create the popup
map.on('click', 'us_states_elections', function (e) {
    var stateName = e.features[0].properties.NAME;
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    var totalVotes = e.features[0].properties.Total;
    wnrPerc = (wnrPerc * 100).toFixed(0);
    totalVotes = totalVotes.toLocaleString();
    stateName = stateName.toUpperCase();
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>'+stateName+'</h4>'
            +'<h2>'+winner+'</h2>'
            + '<p>'+wnrPerc+'% - ('+totalVotes+' votes)</p>')
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on('mouseenter', 'us_states_elections', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'us_states_elections', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'us_counties_elections', function (e) {
    var stateName = e.features[0].properties.State;
    var countyName = e.features[0].properties.NAMELSAD;
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    var totalVotes = e.features[0].properties.Total;
    wnrPerc = (wnrPerc * 100).toFixed(0);
    totalVotes = totalVotes.toLocaleString();
    stateName = stateName.toUpperCase();
    countyName = countyName.toUpperCase();
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + countyName + ' - ' + stateName + '</h4>'
            + '<h2>' + winner + '</h2>'
            + '<p>' + wnrPerc + '% - (' + totalVotes + ' votes)</p>')
        .addTo(map);
});
map.on('mouseenter', 'us_counties_elections', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'us_counties_elections', function () {
    map.getCanvas().style.cursor = '';
});
~~~

# Creating a Graduated Point Interactive Map
In this last section of the tutorial we will create a graduated point map, similar to this one produced by the New York Times:

![NYT graduated point map](/assets/tutorial_images/15_Webmapping/16_NYT_PointMap.png)

Our map will use the same base map we configured above, but instead of the state and county polygon layers we will add the centroids we created in QGIS. In addition, most of the general map settings will stay the same. We will use the same `index.html` and `styles.css` files and a modified version of the `map.js` file.

* First, remove the two polygon layers from your map. Note that we will leave the outlines of the counties and states that were also generated from that data.

* Second, add the centroids layer, but style it as points. For now, all points should have the same size but different fill based on who won the 2016 presidential election. Also, comment out the popup functions by adding `//` at the beginning of each line or `/*` at the begging of the code block and `*/` at the end
  
  * The loading layers function (`map.on('load', function())`) looks like this now:

    ~~~ js
    map.on('load', function(){
        var layers = map.getStyle().layers;
        var firstSymbolId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol') {
                firstSymbolId = layers[i].id;
                break;
            }
        }
        map.addLayer({
            'id': 'us_counties_centroids',
            'type': 'circle',
            'source': {
                'type': 'geojson',
                'data': 'data/CountyCentroidElectionData.geojson'
            },
            'paint': {
                'circle-radius': 5,
                'circle-color': [
                    'match', ['get', 'Winner'],
                    'Trump', '#cf635d',
                    'Clinton', '#6193c7',
                    'Other', '#91b66e',
                    '#ffffff'
                ],
                'circle-stroke-color': '#000000',
                'circle-opacity': [
                    'step', ['get', 'WnrPerc'],
                    0.3, 0.4,
                    0.5, 0.5,
                    0.7, 0.6,
                    0.9
                ]
            },
            'minzoom': 3
        }, firstSymbolId);
        map.addLayer({
            'id': 'us_states_elections_outline',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': 'data/StateElectionData.geojson'
            },
            'paint': {
                'line-color': '#ffffff',
                'line-width': ['interpolate', ['exponential', 2], ['zoom'], 3, 0.5, 7, 3]
            }
        }, 'us_counties_centroids');
        map.addLayer({
            'id': 'us_counties_elections_outline',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': 'data/CountyElectionData.geojson'
            },
            'paint': {
                'line-color': '#ffffff',
                'line-width': ['interpolate', ['exponential', 2], ['zoom'], 6, 0.5, 9, 1]
            },
            'minzoom': 6
        }, 'us_counties_centroids');
    });
    ~~~

  * Note that the order in which we load the layers changed, as well as the place in the layer stack in which the layers are loaded.
  
* Your map should now look something like this:

![Dot layer loaded](/assets/tutorial_images/15_Webmapping/17_LoadedDots.png)

* Next, we need to tie the size of the dots to the difference in votes between Trump and Clinton. To make this tutorial a bit simpler we will ignore the counties were someone other than Trump or Clinton won. Modify your `map.addLayer` function to this:

~~~ js
map.addLayer({
    'id': 'us_counties_centroids',
    'type': 'circle',
    'source': {
        'type': 'geojson',
        'data': 'data/CountyCentroidElectionData.geojson'
    },
    'paint': {
        'circle-radius':
            ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Clinton']]]], 40], 1],
        'circle-color': [
            'match', ['get', 'Winner'],
            'Trump', '#cf635d',
            'Clinton', '#6193c7',
            'Other', '#91b66e',
            '#ffffff'
        ],
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': 0.5,
        'circle-opacity': [
            'step', ['get', 'WnrPerc'],
            0.3, 0.4,
            0.5, 0.5,
            0.7, 0.6,
            0.9
        ]
    },
    'minzoom': 3
}, firstSymbolId);
~~~

* The important line here is `'circle-radius': ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Clinton']]]], 40], 1],` which gets the difference between Clinton and Trump votes, in absolute values (`abs`), takes the square root of that value (`sqrt`), divides that value by 40, and then if that value is less than 1, makes it equal to 1 using the `max` expression.

* Your map should now look something like this:

![Dot sizes](/assets/tutorial_images/15_Webmapping/18_DotSizes.png)

* Next, we need to tie that size to the zoom level. Modify the `circle-radius` setting to:

~~~ js
'circle-radius':
    ['interpolate', ['linear'], ['zoom'],
        3, ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Clinton']]]], 35], 1],
        9, ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Clinton']]]], 15], 5],
    ],
~~~

* If you zoom in and out, you'll see the size of the circles automatically adjusting to the zoom level.

* Finally, we need to add back the popup code, now with the circles instead of the polygons:

~~~ js
map.on('click', 'us_counties_centroids', function (e) {
    var stateName = e.features[0].properties.State;
    var countyName = e.features[0].properties.NAMELSAD;
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    var totalVotes = e.features[0].properties.Total;
    wnrPerc = (wnrPerc * 100).toFixed(0);
    totalVotes = totalVotes.toLocaleString();
    stateName = stateName.toUpperCase();
    countyName = countyName.toUpperCase();
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + countyName + ' - ' + stateName + '</h4>'
            + '<h2>' + winner + '</h2>'
            + '<p>' + wnrPerc + '% - (' + totalVotes + ' votes)</p>')
        .addTo(map);
});
map.on('mouseenter', 'us_counties_centroids', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'us_counties_centroids', function () {
    map.getCanvas().style.cursor = '';
});
~~~

* Your final map should look something like this:

![Final circle map](/assets/tutorial_images/15_Webmapping/19_FinalCircleMap.png)

* The final `map.js` file is as follows:

~~~ js
mapboxgl.accessToken = 'Your access token here';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'Your Mapbox style URL here',
    zoom: 3,
    maxZoom: 9,
    minZoom: 3.5,
    center: [-99, 38],
    maxBounds: [[-180, 15], [-30, 72]]
});

map.on('load', function(){
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }
    map.addLayer({
        'id': 'us_counties_centroids',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/CountyCentroidElectionData.geojson'
        },
        'paint': {
            'circle-radius':
                ['interpolate', ['linear'], ['zoom'],
                    3, ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Clinton']]]], 35], 1],
                    9, ['max', ['/', ['sqrt', ['abs', ['-', ['get', 'Trump'], ['get', 'Clinton']]]], 15], 5],
                ],
            'circle-color': [
                'match', ['get', 'Winner'],
                'Trump', '#cf635d',
                'Clinton', '#6193c7',
                'Other', '#91b66e',
                '#ffffff'
            ],
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 0.5,
            'circle-opacity': [
                'step', ['get', 'WnrPerc'],
                0.3, 0.4,
                0.5, 0.5,
                0.7, 0.6,
                0.9
            ]
        },
        'minzoom': 3
    }, firstSymbolId);
    map.addLayer({
        'id': 'us_states_elections_outline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/StateElectionData.geojson'
        },
        'paint': {
            'line-color': '#ffffff',
            'line-width': ['interpolate', ['exponential', 2], ['zoom'], 3, 0.5, 7, 3]
        }
    }, 'us_counties_centroids');
    map.addLayer({
        'id': 'us_counties_elections_outline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/CountyElectionData.geojson'
        },
        'paint': {
            'line-color': '#ffffff',
            'line-width': ['interpolate', ['exponential', 2], ['zoom'], 6, 0.5, 9, 1]
        },
        'minzoom': 6
    }, 'us_counties_centroids');
});

// Create the popup
map.on('click', 'us_counties_centroids', function (e) {
    var stateName = e.features[0].properties.State;
    var countyName = e.features[0].properties.NAMELSAD;
    var winner = e.features[0].properties.Winner;
    var wnrPerc = e.features[0].properties.WnrPerc;
    var totalVotes = e.features[0].properties.Total;
    wnrPerc = (wnrPerc * 100).toFixed(0);
    totalVotes = totalVotes.toLocaleString();
    stateName = stateName.toUpperCase();
    countyName = countyName.toUpperCase();
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + countyName + ' - ' + stateName + '</h4>'
            + '<h2>' + winner + '</h2>'
            + '<p>' + wnrPerc + '% - (' + totalVotes + ' votes)</p>')
        .addTo(map);
});
map.on('mouseenter', 'us_counties_centroids', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'us_counties_centroids', function () {
    map.getCanvas().style.cursor = '';
});
~~~

* Obviously, after finishing both of your webmaps you need to add the rest of the content for the page. This should always include a legend for the map, as well as the sources for the data.