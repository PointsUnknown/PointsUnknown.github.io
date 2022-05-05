/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full':'fully'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    header.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || "lefty");
    features.appendChild(container);
});


// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});



// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

map.loadImage("./images/lineIcon.png", function (error, image){
    if (error) throw error;
    map.addImage("lineIcon", image);
  });  

// Add NYC Buffalo layer
map.addLayer({
    'id': 'BuffaloPosition',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/01_Buffalo_NYC.geojson'
    },
    'paint': {
        'fill-color':  '#17b2ff',
    }
}, firstSymbolId);


// Add BuffaloOutline layer
    map.addLayer({
        'id': 'BuffaloOutline',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/01_Buffalo_NYC.geojson'
        },
        'paint': {
            'line-color':  '#17b2ff',
            'line-width': 5   
        }
    }, firstSymbolId);

// Add Erie Demographic layer
map.addLayer({
    'id': 'DemoMapofBuffalo1',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/ErieDemographic.geojson'
    },
    'paint': {
        'fill-color': ['step', ['get', 'Race White'],
        '#ffffff',
        1000,'#e7f2fe',
        2000,'#cee5fd',
        3000,'#b6d8fc',
        4000,'#9ecafa',
        5000,'#85bdf9',
        6000,'#6db0f8',
        7000,'#55a3f7',
        8000,'#3c96f6',
        9000,'#2489f5',
        10000,'#0b7cf4'],
        'fill-opacity': 0.2
    }
}, firstSymbolId);

map.addLayer({
    'id': 'DemoMapofBuffalo2',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/ErieDemographic.geojson'
    },
    'paint': {
        'fill-color': ['step', ['get', 'Race Asian'],
        '#ffffff',
        1000,'#e7f2fe',
        2000,'#cee5fd',
        3000,'#b6d8fc',
        4000,'#9ecafa',
        5000,'#85bdf9',
        6000,'#6db0f8',
        7000,'#55a3f7',
        8000,'#3c96f6',
        9000,'#2489f5',
        10000,'#0b7cf4'],
        'fill-opacity': 0.2
    }
}, firstSymbolId);

map.addLayer({
    'id': 'DemoMapofBuffalo3',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/ErieDemographic.geojson'
    },
    'paint': {
        'fill-color': ['step', ['get', 'Race Hispanic or Latino'],
        '#ffffff',
        1000,'#e7f2fe',
        2000,'#cee5fd',
        3000,'#b6d8fc',
        4000,'#9ecafa',
        5000,'#85bdf9',
        6000,'#6db0f8',
        7000,'#55a3f7',
        8000,'#3c96f6',
        9000,'#2489f5',
        10000,'#0b7cf4'],
        'fill-opacity': 0.2
    }
}, firstSymbolId);

map.addLayer({
    'id': 'DemoMapofBuffalo4',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/ErieDemographic.geojson'
    },
    'paint': {
        'fill-color': ['step', ['get', 'Race African American'],
        '#ffffff',
        1000,'#e7f2fe',
        2000,'#cee5fd',
        3000,'#b6d8fc',
        4000,'#9ecafa',
        5000,'#85bdf9',
        6000,'#6db0f8',
        7000,'#55a3f7',
        8000,'#3c96f6',
        9000,'#2489f5',
        10000,'#0b7cf4'],
        'fill-opacity': 0.2
    }
}, firstSymbolId);

    
// Add HighlightedNeighborhood layer
map.addLayer({
    'id': 'HighlightedNeighborhood',
    'type': 'circle',
    'source': {
        'type': 'geojson',
        'data': 'data/Three-Neighborhoods.geojson'
    },
    'paint': {
        'circle-color':  '#1ad1ff',
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': 0.5,
        'circle-radius': 8  
    }
}, firstSymbolId);

// Add FivePoints layer

map.addLayer({
    id: "FivePointsLabel",
    type: "symbol",
    source: {
      type: "geojson",
      data: "data/Label1.geojson",
    },
    layout: {
      "icon-image": "lineIcon",
      "icon-size": 0.5,
      "icon-anchor": "bottom-left",
      "icon-offset": [5, 0],
      "text-field": [
        "format",
        ["upcase", ["get", "Company"]],
        {
          "font-scale":0.8,
        },
        "\n",
        {},
        ["get", "businessTy"],
        {
          "font-scale": 0.7,
        },
      ],
      "text-justify": "left",
      "text-anchor": "top-left",
      "text-offset": [0.7, -6],
      "text-font": ["literal", ["Oswald Regular"]],
      "text-padding": 1,
    },
    paint: {
      "text-color": "#e6f7ff",
      "text-halo-color": "#e6f7ff",
      "text-halo-width": 0.2,
      "icon-halo-color": "white",
      "icon-halo-width": 1,
    },
  },
  "state-label"
  );

  map.addLayer(
    {
      id: "FivePointsExtrusion",
      type: "fill-extrusion",
      source: {
        type: "geojson",
        data: "data/Label1.geojson",
      },
      paint: {
        "fill-extrusion-opacity": 0,
        "fill-extrusion-height": ["*", 0.002, ["get", "heightroof"]],
        "fill-extrusion-color": "#6db0f8",
      },
    },
  );

// Add Emerson layer

map.addLayer({
    id: "EmersonLabel",
    type: "symbol",
    source: {
      type: "geojson",
      data: "data/Label2.geojson",
    },
    layout: {
      "icon-image": "lineIcon",
      "icon-size": 0.5,
      "icon-anchor": "bottom-left",
      "icon-offset": [5, 0],
      "text-field": [
        "format",
        ["upcase", ["get", "Company"]],
        {
          "font-scale":0.8,
        },
        "\n",
        {},
        ["get", "businessTy"],
        {
          "font-scale": 0.7,
        },
      ],
      "text-justify": "left",
      "text-anchor": "top-left",
      "text-offset": [0.7, -6],
      "text-font": ["literal", ["Oswald Regular"]],
      "text-padding": 1,
    },
    paint: {
      "text-color": "#e6f7ff",
      "text-halo-color": "#e6f7ff",
      "text-halo-width": 0.2,
      "icon-halo-color": "white",
      "icon-halo-width": 1,
    },
  },
  "state-label"
  );

  map.addLayer(
    {
      id: "EmersonExtrusion",
      type: "fill-extrusion",
      source: {
        type: "geojson",
        data: "data/Label2.geojson",
      },
      paint: {
        "fill-extrusion-opacity": 0,
        "fill-extrusion-height": ["*", 0.002, ["get", "heightroof"]],
        "fill-extrusion-color": "#6db0f8",
      },
    },
  );
   
  // Add Broadway layer

map.addLayer({
    id: "BroadwayLabel",
    type: "symbol",
    source: {
      type: "geojson",
      data: "data/Label3.geojson",
    },
    layout: {
      "icon-image": "lineIcon",
      "icon-size": 0.5,
      "icon-anchor": "bottom-left",
      "icon-offset": [5, 0],
      "text-field": [
        "format",
        ["upcase", ["get", "Company"]],
        {
          "font-scale":0.8,
        },
        "\n",
        {},
        ["get", "businessTy"],
        {
          "font-scale": 0.7,
        },
      ],
      "text-justify": "left",
      "text-anchor": "top-left",
      "text-offset": [0.7, -6],
      "text-font": ["literal", ["Oswald Regular"]],
      "text-padding": 1,
    },
    paint: {
      "text-color": "#e6f7ff",
      "text-halo-color": "#e6f7ff",
      "text-halo-width": 0.2,
      "icon-halo-color": "white",
      "icon-halo-width": 1,
    },
  },
  "state-label"
  );

  map.addLayer(
    {
      id: "BroadwayExtrusion",
      type: "fill-extrusion",
      source: {
        type: "geojson",
        data: "data/Label3.geojson",
      },
      paint: {
        "fill-extrusion-opacity": 0,
        "fill-extrusion-height": ["*", 0.002, ["get", "heightroof"]],
        "fill-extrusion-color": "#6db0f8",
      },
    },
  );

  // Add Corridor layer

  map.addLayer({
    id: "CorridorLine",
    type: "line",
    source: {
      type: "geojson",
      data: "data/Corridor.geojson",
    },
    paint: {
        'line-color': '#ffff66',
        'line-width': 3
    },
  },firstSymbolId);




    // Setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });



}
);

//Add popup - CAN BE FAULT
map.on('click', 'BuffaloPosition', function (e) {
    let Name = e.features[0].properties.name;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(Name)
        .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the turnstileData layer.
map.on('mouseenter', 'BuffaloPosition', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'BuffaloPosition', function () {
    map.getCanvas().style.cursor = '';
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);
