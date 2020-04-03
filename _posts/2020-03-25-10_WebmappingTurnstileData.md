---
layout: post
title:  09 - Introduction to Web Mapping with MTA Turnstile Data
category: [Web Mapping, Mapbox]
navigation_weight: 9
description: This tutorial will guide you through the basic steps in creating an interactive web map displaying MTA turnstile data. In this process we will use Mapbox GL JS as the main JavaScript library powering the interactive map.
active: true
---
# Introduction

In this tutorial we will use Mapbox GL JS to create an interactive webmap displaying MTA turnstile data. We will recreate a [map](https://iquantny.tumblr.com/post/612712380924903424/mapping-fridays-30-drop-in-nyc-subway-ridership) first produced by Ben Wellington in his I Quant NY blog and later reproduced by news outlets like this one from [The City](https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html).

![Change in MTA turnstile entries - The City](/assets/tutorial_images/17_WebmappingTurnstile/01_TheCityMap.png)

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

* MTA turnstile entries for March 6 and March 20, 2020: Downloaded from [MTA Turnstile Data](http://web.mta.info/developers/turnstile.html). To create the final version used here, we downloaded the files for [Saturday, March 7](http://web.mta.info/developers/data/nyct/turnstile/turnstile_200307.txt) and [Saturday, March 21](http://web.mta.info/developers/data/nyct/turnstile/turnstile_200321.txt). Make sure you also check out their [data dictionary](http://web.mta.info/developers/resources/nyct/turnstile/ts_Field_Description.txt).

* [Geocoded turnstiles](https://github.com/chriswhong/nycturnstiles/blob/master/geocoded.csv) by Chris Whong.

* Median Household Income by block group. This data comes from the U.S. Census Bureau, table B19013 of the American Community Survey, 2017 5-year estimates. That dataset has been joined to New York City's block groups.

* Note that the MTA turnstile data is notoriously difficult to work with. The downloaded files were parsed and combined in Python (and Pandas). The combined dataset was then merged with the geocoded station dataset, also in Python. The resulting dataset was finally exported as a GeoJSON file.

A packaged file turnstile data can be found [here](https://brown-institute-assets.s3.amazonaws.com/Objects/pointsunknown/tutorial_09_data.zip).

# Final Data Structure
The final dataset contains the following fields:

* `UNIT`: Unique station id
* `ENTRIES_06`: Total entries for that station for March 6, 2020
* `EXITS_06`: Total exits for that station for March 6, 2020
* `ENTRIES_20`: Total entries for that station for March 20, 2020
* `EXITS_20`: Total exits for that station for March 20, 2020
* `ENTRIES_DIFF`: Percentage change in the number of entries between March 6 and March 20
* `stationName`: Name of the station
* `lat`: Latitude of the station
* `lon`: Longitude of the station

# Setting Up the Base Map in Mapbox Studio
Before setting up our mapping site we should style the basemap we will use. To do this, go to your [Mapbox Studio](https://studio.mapbox.com/) page and create a `New style`.

* It is usually much easier to start from a template, otherwise you will have to add and style every single layer your map will use and do this for all zoom levels. The templates provided by Mapbox already include all this styling and have been tested and refined many many times.

* To create our turnstile map we will use the `Monochrome` template with a `Light` variation. Choose it and click `Customize Monochrome`. This template provides a very neutral background on which to display our turnstile data.

![Customize Mapbox Style](/assets/tutorial_images/17_WebmappingTurnstile/02_MapboxStyle.png)

* On the next screen you'll see the actual editor view with all the `components` and `layers` included on the map listed on the left hand side. `Components` are just groups of layers that have the same style. `Layers` are the individual parts of the components. You can adjust the values for `components` or for individual `layers`. However, if you want to modify only a `layer` you'll have to override the component style and unlock the layer.

* Layers with a `T` on their left represent label layers. There are also point, line, and polygon layers, and groups of layers.

* At the top of the editor you will see the current zoom level (10 by default at the start of the editing session), and the map starting coordinates.

* If you click on a `component` or on a `layer` you will see its style, and depending on the type of layer it is (point, line, polygon, text) you will be able to style different attributes.

* In the `layer` panel I find it very useful to click on the `Select data` button at the top of the menu, and to cycle through the layers in this view.

  * Here, the items belonging to this specific layer will be highlighted in two colors, green for those items that are visible at this zoom level, and mauve for the items that belong to the layer but are not visible because of some styling condition.

![Select Data View Mapbox Studio](/assets/tutorial_images/15_Webmapping/04_SelectDataView.png)

* For this basemap we are actually going to do very little editing. Just a couple of adjustments to the road style and hiding a few layers we don't need.

  * First, rename the style by clicking on the `Monochrome` text at the top left corner of the window. Rename it to something like `CustomMonochrome` or something like that.

  * Second, go into the `Road network` component. There change the overall style from `Standard` to `Simple`, and reduce the `Road width` to the minimum using the slider.

  * Third, go into the `Point of interest labels` and disable it completely by clicking on the eye icon next to it.
  
  * Fourth, change the water color by going into the `layers` tab and choosing the `water` layer under `Land & water, water`. There, first select the `Color` tab. Then, click on the `Override` button. And finally, change the color value to `#d9d9d9`.

![Water color adjustment](/assets/tutorial_images/17_WebmappingTurnstile/03_ChangeWaterColor.png)

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
    <title>Subway Usage During the Covid-19 Outbreak</title>
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
    zoom: 10,
    center: [-74, 40.725]
});
~~~

* This `map.js` file contains the code that creates and controls the map:

  * Here, first, you setup your access token and then you create a `map` variable that creates the map and sets its basic characteristics:

    * What div it is in

    * The style to use

    * The starting zoom level

    * And the starting coordinates.

* Finally, copy the following code to your `styles.css` file:

~~~ css
body {
    margin: 0;
    padding: 0;
}

#map {
    width: 60%;
    height: 800px;
    margin: 5em auto;
}
~~~

* This `css` files sets some very basic styling:

  * For the `body` it declares margins and padding to be 0.

  * And for the `map` div, it sets the width to be 90% of the page, the height to be 600px, and horizontal margins to be of 5em up and down, and automatic on each side.

  * *Note that a height of 100% doesn't work. The best bet is to set a fixed height, like 600px.*

* With this setup you can open your browser and there select `File / Open` and choose your `index.html` file. Your page should load with an interactive map centered on New York City and using your Mapbox style. You should be able to pan around and zoom in and out in this map.

![Basic base map](/assets/tutorial_images/17_WebmappingTurnstile/04_BaseMap.png)

Finally, official documentation for Mapbox GL can be found [here](https://docs.mapbox.com/mapbox-gl-js/overview/). It is worth checking out the [examples page](https://docs.mapbox.com/mapbox-gl-js/examples/) and, more importantly, the [style specification page](https://docs.mapbox.com/mapbox-gl-js/style-spec/).

# Adding Layers to Your Interactive Map

## Running a Localhost

One thing to note before proceeding is that for this part of the tutorial, and for the rest of it, you will need to run a `localhost` on your machine in order for the map to work properly. Running a `localhost` is equivalent to starting your own swerver on your computer and accessing through your browser.

**Liver Server Extension (VS Studio Code):**

* The easiest way to run a localhost is to use VS Studio Code as your text editor and install the [Live Server] extension. Once you've installed this extension, just go to your `index.html` file in VS Studio Code and click on the `Go Live` button at the bottom left hand corner of your editor.

**Through Python and the Terminal (MacOS):**

* To run a `localhost` on a **MacOS** do the following:

  * Open your `Terminal` application.

  * Use `cd` (change directory) to navigate to your map folder. For example type something like `cd pointsunknown/mymap` to navigate to the `mymap` folder inside the `poinstunknown` folder.
  
  * Once you are in the directory where the `index.html`, `styles.css` and `map.js` files are located type `python -m SimpleHTTPServer 8000` if you have Python 2.x or `python3 -m http.server 8000` if you have Python 3.x on your computer (by defaults, Macs come with Python 2.7 installed but to check which version you are running you can type `python -V` in your terminal).
  
  * Finally, open your browser and navigate to `http://0.0.0.0:8000/`. You should see your map there.
  
## Adding a GeoJSON Layer

* First, create a sub-folder in your map folder. Call it `data`. Add your GeoJSON turnstile data file there.

* Next, we need to create a function within our `map.js` file that will add a new layer to the map and provide its basic settings:

  * Add the following code to the end of the file:

~~~ js
map.on('load', function () {
    map.addLayer({
        'id': 'turnstileData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/turnstileData.geojson'
        },
        'paint': {
            'circle-color': '#ff7f50',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': 5
        }
    });
});
~~~

* This piece of does the following:
  
  * Waits until the map is loaded and then adds a new layer.

  * This layer has an `id` and is of type `circle` (polygon layers are of type `fill`). Other types include `background`, `line`, `symbol`, `raster`, `fill-extrusion`, `heatmap`, and `hillshade`.

  * It provides the `source` for this layer. In our case it's of the type `geojson` and it's located in the `data` folder.

  * Finally, it provides the style (`paint`). Here, we are using a very basic 'coral' fill and a radius of 5px.

* If you reload your map now and zoom out you should see all the stations included in the dataset.

![Added the stations layer](/assets/tutorial_images/17_WebmappingTurnstile/05_StationsLoaded.png)

## Styling Layers Based on Quantitative Attributes

To style the stations based on the percentage change between March 6th and March 20th we need to modify the attributes of that layer at the moment of adding it to the map. We will modify both the color of each station and the radius of the circle.

First, let's modify the `circle-radius` property. To do this, update the `map.on` function to the following:

~~~ js
map.on('load', function () {
    map.addLayer({
        'id': 'turnstileData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/turnstileData.geojson'
        },
        'paint': {
            'circle-color': '#ff7f50',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, 10,
                -0.4, 1,
            ]
        }
    });
});
~~~

Here we are using an `interpolate` function to assign the `circle-radius` property based on the `ENTRIES_DIFF` field from the GeoJson file. This `interpolate` expression takes three arguments:

* They type of interpolation: in our case `linear`

* The value to use for every feature: in our case we `get` the `ENTRIES_DIFF` value for each station

* The reference values and the corresponding radius values. In our case, we know our values go from -0.928 to -0.446. We then say that a value of -1 should be represented with a radius of 10 and a value of -0.4 should have a radius of 1, and Mapbox interpolates between those values.

![Circle radius expression](/assets/tutorial_images/17_WebmappingTurnstile/06_CircleRadius.png)

Next, let's modify the `circle-color` property, also based on the `ENTRIES_DIFF` value from the geojson. We are encoding this value on two properties (radius and color), which in some circumstances might be overkill. However, here, this double encoding really helps to drive the point home.

Update your `map.on` function to the following:

~~~ js
map.on('load', function () {
    map.addLayer({
        'id': 'turnstileData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/turnstileData.geojson'
        },
        'paint': {
            'circle-color': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, '#ff4400',
                -0.7, '#ffba31',
                -0.4, '#ffffff'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, 10,
                -0.4, 1,
            ]
        }
    });
});
~~~

Here we are using a similar `interpolate` expression, but we are applying it to the `circle-color` property. The only other difference with the for the `circle-radius` is that in this one we are adding a stop in the middle (`-0.7`). This allows us to go from white, to yellow, to coral in the color progression.

![Color expression](/assets/tutorial_images/17_WebmappingTurnstile/07_CircleColor.png)

## Adding the Layers Underneath the Labels

If you look closely, you'll notice that our new layer is sitting on top of the city and borough labels. To correct this we need to identify what layer the turnstile data should be underneath of, and add that as a property of our layer.

* Modify your `map.on` function to the following:

~~~ js
map.on('load', function () {
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
        'id': 'turnstileData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/turnstileData.geojson'
        },
        'paint': {
            'circle-color': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, '#ff4400',
                -0.7, '#ffba31',
                -0.4, '#ffffff'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, 10,
                -0.4, 1,
            ]
        }
    }, firstSymbolId); // Here's where we tell Mapbox where to slot this new layer
});
~~~

* Here we did two things:

  * First, we added a short function that loops through the existing layers of the map and identifies the first one of type `symbol`. That's the one our states layer should be underneath of.
  
  * Second, at the end of the `map.addLayer` function, we added this first `symbol` layer to mark where these new layers should be slotted in the stack.

![Layers in the right order](/assets/tutorial_images/17_WebmappingTurnstile/08_LayersOrdered.png)

## Setting Minimum and Maximum Zoom Levels and the Map Bounds

One small thing we must do before moving on to popups and interactivity is setting the minimum and maximum zoom levels for the map, as well as its bounds. This will prevent people from zooming in or out too much and from dragging the map outside of its intended bounds (New York City).

This is quite easy, just update your `map` object (in your `map.js` file) in the following way:

~~~ js
mapboxgl.accessToken = 'Your access token here';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'Your Mapbox style URL here',
    zoom: 10,
    center: [-74, 40.725],
    maxZoom: 15,
    minZoom: 8,
    maxBounds: [[-74.45, 40.45], [-73.55, 41]]
});
~~~

Here we are adding the following lines:

* `maxZoom: 15` and `minZoom: 8` which restrict how much you can zoom in or out of the map.

* And `maxBounds: [[-74.45, 40.45], [-73.55, 41]]` which sets the maximum bounds of the map. The two paris of coordinates represent the southwest and northeast corners of the maximum extent.

## Adjusting map properties based on zoom level

As you zoom into the map you will notice that the circles for the stations look much smaller. That's not because they are becoming smaller but because everything around them is becoming larger. To maintain readability we need to adjust their size based on the zoom level.

To do this we will update the `map.on` function and add another interpolation -- this time exponential -- to the `circle-radius` property.

~~~ js
map.on('load', function () {
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': 'turnstileData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/turnstileData.geojson'
        },
        'paint': {
            'circle-color': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, '#ff4400',
                -0.7, '#ffba31',
                -0.4, '#ffffff'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['exponential', 2], ['zoom'],
                10, ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                    -1, 10,
                    -0.4, 1
                ],
                15, ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                    -1, 25,
                    -0.4, 12
                ]
            ],
        }
    }, firstSymbolId);
});
~~~

If you look closely at the `circle-radius` function you will see that there are three interpolations: the main one, exponential, tied to the zoom level, and two more, linear, tied to the `ENTRIES_DIFF` value. What we are doing here is that we are adding an interpolation expression at each of the stops of the zoom interpolation.

Now if you zoom into the map you will see the stations maintain a proportional size:

![Zoom expression](/assets/tutorial_images/17_WebmappingTurnstile/09_ZoomInterpolation.png)

# Creating Popups

Apart from zooming in and out, and panning, the other main feature of interactive maps is popups, which give you extra information about a specific feature. In this section we will create popups both for the state and the county-level data.

Interacting with the map usually happens in `map.on` functions. To set the popup behavior we will code six of those functions, three for the state and three for the county data: one function will open the the popup, and two will change the cursor icon -- into a hand when hovering over a feature, and back into an arrow when not over one.

* Add the following piece of code at the end of your `map.js` file:

~~~ js
// Create the popup
map.on('click', 'turnstileData', function (e) {
    var entriesDiff = e.features[0].properties.ENTRIES_DIFF;
    var entries_06 = e.features[0].properties.ENTRIES_06;
    var entries_20 = e.features[0].properties.ENTRIES_20;
    var stationName = e.features[0].properties.stationName;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(stationName + '<br>' + entriesDiff + '%' + '<br>' + entries_06 + '<br>' + entries_20)
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the turnstileData layer.
map.on('mouseenter', 'turnstileData', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'turnstileData', function () {
    map.getCanvas().style.cursor = '';
});
~~~

In these functions we are doing the following:

* First, we are saying, if there's a click on the map, and that click is on a `turnstileData` feature, do the following with that feature (which we will call `e`):
  
  1. Get the `ENTRIES_DIFF`, `ENTRIES_06`, `ENTRIES_20`, and `stationName` attributes and assign them to their own variables.

  2. Create the popup (`new mapboxgl.Popup()`) with coordinates from the click element, with some `html` elements based on the variables, and add it to the map.

* Second, we are saying that if the mouse enters (`mouseenter`) or leaves (`mouseleave`) one of these features, change the icon for the mouse to a `pointer` or back to the default.

* The map with the basic popup should look like this:

![Basic popup](/assets/tutorial_images/17_WebmappingTurnstile/10_SimplePopUp.png)

The only thing left to do is to add more information to the popup and style it properly.

The final popup JavaScript section should look like this:

~~~ js
// Create the popup
map.on('click', 'turnstileData', function (e) {
    var entriesDiff = e.features[0].properties.ENTRIES_DIFF;
    var entries_06 = e.features[0].properties.ENTRIES_06;
    var entries_20 = e.features[0].properties.ENTRIES_20;
    var stationName = e.features[0].properties.stationName;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + stationName + '</h4>'
            + '<p><b>Friday, March 6th:</b> ' + entries_06 + ' entries<br>'
            + '<b>Friday, March 20th:</b> ' + entries_20 + ' entries<br>'
            + '<b>Change:</b> ' + Math.round(entriesDiff * 1000) / 10 + '%</p>')
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the turnstileData layer.
map.on('mouseenter', 'turnstileData', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'turnstileData', function () {
    map.getCanvas().style.cursor = '';
});
~~~

* And the styling in the css should look like this:

~~~ css
.mapboxgl-popup-content h4 {
    font-weight: 500;
    font-size: 0.9em;
    border-width: 0px 0px 0.5px 0px;
    border-style: solid;
    border-color: rgb(80, 80, 80);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.mapboxgl-popup-content p {
    font-weight: 300;
    margin-top: 0.3em;
    margin-bottom: 0em;
}
~~~

* Your popups should now look something like this:

![Styled popup](/assets/tutorial_images/17_WebmappingTurnstile/11_StyledPopUp.png)

# Adding an Additional Layer

We could say that the map is done there. However, adding an additional layer showing the median household income for each block group in the city will make our map and story richer and more nuanced. Yes, the system overall has seen an enormous decline in usage, but that decline has not been uniform across the city; usage in poorer neighborhoods has not declined as much as in richer ones.

First, we need to add the `medianIncome.geojson` layer to the map. To do this, add the following code to the `map.on('load')` function:

~~~ js
map.addLayer({
    'id': 'medianIncome',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/medianIncome.geojson'
    },
    'paint': {
        'fill-color': '#00ffff',
        'fill-opacity': 0.5,
    }
}, 'turnstileData');
~~~

Here we are replicating the `addLayer` function we have above for the subway stations, but this time we are adding the `medianIncome.geojson` data. In addition, we are stating that the layer is of type `fill` and we are specifying the `fill-color` and `fill-opacity` attributes. You should see something like this:

![Added income layer](/assets/tutorial_images/17_WebmappingTurnstile/12_IncomeLayer.png)

As you can see, the layer was added to the map under the turnstile data, which is correct, but census block groups actually go into the water, which doesn't make sense in the map. To correct this, we should instead add the layer underneath the water, but on top of the land so we can actually see it. We need then to figure out what the `id` of the water layer is, and specify that in the order attribute for the income layer.

To figure this out we can write a short loop that prints the `id`s for every layer in our map. Add this snippet of code to the top of the `map.on('load')` function:

~~~ js
var layers = map.getStyle().layers;
for (var i = 0; i < layers.length; i++) {
    console.log(layers[i].id);
}
~~~

This piece of code gets all the layers in the style and then loops through them printing their `id` to the browser's console.

Once you add the code, reload your map and open your inspector / developer tools and go to the console. You should see something like this:

![List of layers](/assets/tutorial_images/17_WebmappingTurnstile/13_LayersList.png)

On the console you should see the list of layers. Notice that the water layers are right above (below in the list) the `landuse` layer. That seems like a good place to put the income layer below the water layers but above the `landuse` one.

To do this, change the last line of the code where we add the income layer. Instead of `'turnstileData'` it should say `'waterway-shadow'`. And you can remove the loop we added.

Your map should now look something like the one below. The income should be visible but it should be underneath the subway stations, roads, labels and water. That way we can still see the income data, but it doesn't obscure other points of reference or the subway stations, which are the main point of the map.

![Income layer in order](/assets/tutorial_images/17_WebmappingTurnstile/14_IncomeOrder.png)

Of course now we need to give the income layer a proper symbology.

If this was a map of just income levels we would probably use a divergent color scheme centered around the median household income for New York City. However, because the main point of the map is to highlight the change in subway usage, using a divergent color scheme will draw attention away from the stations.

Since the income data is there to complement the subway data we will use a simple sequential color ramp. In addition, some of the block groups don't have any income information so we need to make sure these remain transparent. To properly symbolize the new layer update its code to the following:

~~~ js
map.addLayer({
    'id': 'medianIncome',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/medianIncome.geojson'
    },
    'paint': {
        'fill-color': ['step', ['get', 'MHHI'],
            '#ffffff',
            20000, '#ccedf5',
            50000, '#99daea',
            75000, '#66c7e0',
            100000, '#33b5d5',
            150000, '#00a2ca'],
        'fill-opacity': ['case', ['==', ['get', 'MHHI'], null], 0, 0.65]
    }
}, 'waterway-shadow');
~~~

In these lines we are doing the following:

* For the `fill-color` we are using a `step` function, which groups values in buckets. The specific buckets are adapted from a `Natural Breaks (Jenks)` classification performed in QGIS. Each bucket has its own color. Note the lone color at the beginning without a bucket. In our case that means that any feature with a median household income of less than $20,000 will get that color.

* And for the `fill-opacity` we are using a `case` function, which functions similar to an if/else statement. We are saying 'if MHHI is equal to `null`, then use `0` for opacity (this means make it transparent); in all other cases use `0.65`'.

Your map should look something like this:

![Income symbology](/assets/tutorial_images/17_WebmappingTurnstile/15_IncomeSymbology.png)

# Final Code

The final code for this interactive map is as follows:

* `index.html`:

~~~ html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Subway Usage During the Covid-19 Outbreak</title>
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
    width: 60%;
    height: 800px;
    margin: 5em auto;
}

.mapboxgl-popup-content h4 {
    font-weight: 500;
    font-size: 0.9em;
    border-width: 0px 0px 0.5px 0px;
    border-style: solid;
    border-color: rgb(80, 80, 80);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
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
    style: 'Your Mapbox style URL here',
    zoom: 10,
    center: [-74, 40.725],
    maxZoom: 15,
    minZoom: 8,
    maxBounds: [[-74.45, 40.45], [-73.55, 41]]
});

map.on('load', function () {
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
        'id': 'turnstileData',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/turnstileData.geojson'
        },
        'paint': {
            'circle-color': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                -1, '#ff4400',
                -0.7, '#ffba31',
                -0.4, '#ffffff'
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['exponential', 2], ['zoom'],
                10, ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                    -1, 10,
                    -0.4, 1
                ],
                15, ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
                    -1, 25,
                    -0.4, 12
                ]
            ],
        }
    }, firstSymbolId); // Here's where we tell Mapbox where to slot this new layer

    map.addLayer({
        'id': 'medianIncome',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/medianIncome.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'MHHI'],
                '#ffffff',
                20000, '#ccedf5',
                50000, '#99daea',
                75000, '#66c7e0',
                100000, '#33b5d5',
                150000, '#00a2ca'],
            'fill-opacity': ['case', ['==', ['get', 'MHHI'], null], 0, 0.65]
        }
    }, 'waterway-shadow');
});

// Create the popup
map.on('click', 'turnstileData', function (e) {
    var entriesDiff = e.features[0].properties.ENTRIES_DIFF;
    var entries_06 = e.features[0].properties.ENTRIES_06;
    var entries_20 = e.features[0].properties.ENTRIES_20;
    var stationName = e.features[0].properties.stationName;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + stationName + '</h4>'
            + '<p><b>Friday, March 6th:</b> ' + entries_06 + ' entries<br>'
            + '<b>Friday, March 20th:</b> ' + entries_20 + ' entries<br>'
            + '<b>Change:</b> ' + Math.round(entriesDiff * 1000) / 10 + '%</p>')
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the turnstileData layer.
map.on('mouseenter', 'turnstileData', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'turnstileData', function () {
    map.getCanvas().style.cursor = '';
});
~~~
