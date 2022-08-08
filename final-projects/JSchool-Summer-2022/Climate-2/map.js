/* First, define what constitutes a small screen.
This will affect the zoom parameter for each chapter. */

var smallMedia = window.matchMedia("(max-width: 600px)").matches;

/* Next, create two variables that will hold:
1. The different types of layers available to Mapbox and their
respective opacity attributes.
2. The possible alignments which could be applied to the vignettes.*/

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  // right: "righty",
  full: "fully",
  seventy: "three_quartters",
  first: "opening",
};

/* The next two functions help turn on and off individual
layers through their opacity attributes: The first one gets
the type of layer and the second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story', 'features' and 'header' elements
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

// If the content exists, then assign it to the 'header' element
// Note how each one of these are assigning 'innerHTML'

// if (config.opening) {
//   var opening = document.createElement("div");
//   opening.innerHTML = config.opening;
//   header.appendChild(opening);
// }
 
if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}
// if (config.last_step) {
//   var last_stepText = document.createElement("div");
//   last_stepText.innerHTML = config.last_step;
//   header.appendChild(last_stepText);
// }

// If after this, the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  // Adds a class to the vignette
  chapter.classList.add("chap");
  // Adds all the content to the vignette's div
  chapter.innerHTML = record.chapterDiv;
  // Sets the id for the vignette and adds the step css attribute
  container.setAttribute("id", record.id);
  container.classList.add("step");
  // If the chapter is the first one, set it to active
  if (idx === 0) {
    container.classList.add("active");
  }
  // Adds the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* Appends the chapter to the container element and the container
    element to the features element */
  container.appendChild(chapter);
  // container.classList.add(alignments[record.alignment] || "centered");
  container.classList.add(alignments[record.alignment]);
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement("div");

// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

// Creates a variable to hold the starting zoom value
var startingZoom;
// If the screen size is small, it uses the `zoomSmall` value
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

/* This section creates the map element with the
attributes from the main section of the config.js file */
var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
  let layers = map.getStyle().layers;
  let firstSymbolId;
      for (var i = 0; i < layers.length; i++) {
      console.log(layers[i].id); // This is the line of code that we are adding
    //   if (layers[i].type === 'symbol') {
    //       firstSymbolId = layers[i].id;
    //       break;
    //   }
  }
  // Add 3d terrain if necessary
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // Add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // Add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    },'fly-8h7e0l');
  }
// <<<<<<< HEAD
  /*map.addLayer(
    {
      id: "turnstileData",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/turnstileData.geojson",
      },
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "ENTRIES_DIFF"],
          -1,
          "#ff4400",
          -0.7,
          "#ffba31",
          -0.4,
          "#ffffff",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["exponential", 2],
          ["zoom"],
          10,
          ["interpolate", ["linear"], ["get", "ENTRIES_DIFF"], -1, 10, -0.4, 1],
          15,
          [
            "interpolate",
            ["linear"],
            ["get", "ENTRIES_DIFF"],
            -1,
            25,
            -0.4,
            12,
          ],
        ],
      },
    },
    "road-label-simple"
  );*/
  map.addLayer(
    {
      id: "indianaBat",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/indianaBat.geojson",
      },
      paint: {
        "fill-opacity": 0.75,
        "fill-color": "#8856a7",
      },
    },
    "waterway-shadow"
  );
// =======
// >>>>>>> 7a7e780869d7fa3192f9b76c29b1c0fa7b70c413

  // Add layer — All Species Line2 (multiline strings data)
  map.addLayer({
    'id': 'all_species_line2',
    'source': {
        'type': 'geojson',
        'data': 'data/all_species_all_layers2.geojson'
    },
    "type": "line",
    "paint": {
        "line-width": 0.8,
        "line-color": 
        '#af9db9',
    },  
  }, 'fly-8h7e0l'); 

  map.addLayer({
      'id': 'all_species_fill1',
      'type': 'fill',
      'source': {
          'type': 'geojson',
          'data': 'data/all_species_all_layers1.geojson'
      },
      paint: {
          "fill-color": 
          // '#f2c6ab',
          '#af9db9',
          "fill-opacity": 0.5,
      }
  },'all_species_line2'); 

  // pipeline
  map.addLayer({
    'id': 'pipeline',
    'source': {
        'type': 'geojson',
        'data': 'data/pipeline_line.geojson'
    },
    "type": "line",
    "paint": {
    "line-width": 5,
    "line-opacity": 0,
    "line-color": 
    '#ee6c4d',
    },  
  }, 'state_label_sat'); 

// PRAIRIE LAYERS

  //prairieA layer: base
  map.addSource('prairie_locA', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/base_cream.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

    // center: [-89.120177, 42.195437],

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_base',
    'type': 'raster',
    'source': 'prairie_locA',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 


  //prairieB layer: Full Prairie
  map.addSource('prairie_locB', {
    'type': 'image',
//     'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/full_prairie.gif',
       'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/outline.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_full',
    'type': 'raster',
    'source': 'prairie_locB',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 


  //prairieC layer: Degraded Prairie
  map.addSource('prairie_locC', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/degraded_prairie.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_degraded',
    'type': 'raster',
    'source': 'prairie_locC',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 

  //High Quality Prairie
  map.addSource('prairie_locD', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/high_quality_prairie.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_high_quality',
    'type': 'raster',
    'source': 'prairie_locD',
    'paint': {
    'raster-fade-duration': 0.8
    }
  }, 'road-intersection-copy-1'); 


  //Six Acres Remaining
  map.addSource('prairie_locE', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/six_acres2.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

    // center: [-89.120177, 42.195437],

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_six_acres',
    'type': 'raster',
    'source': 'prairie_locE',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 


  //prairie moderate quality
  map.addSource('prairie_locF', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/moderate_quality_prairie.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_moderate_quality',
    'type': 'raster',
    'source': 'prairie_locF',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 


  //prairie_road
  map.addSource('prairie_locG', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/road.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_road',
    'type': 'raster',
    'source': 'prairie_locG',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 

  //prairie_construction_impact
  map.addSource('prairie_locH', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/construction_impact.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_construction_impact',
    'type': 'raster',
    'source': 'prairie_locH',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 

  //prairie_action_area
  map.addSource('prairie_locI', {
    'type': 'image',
    'url': 'https://raw.githubusercontent.com/semerriam/points-unknown/main/projects/pj-critical-habitats/layers/action_area.gif',
    'coordinates': [
        [-89.1215, 42.20305],
        [-89.08329, 42.20305],
        [-89.08329, 42.18248],
        [-89.1215, 42.182848],
    ]

  }, 'road-intersection-copy-1'); 
  map.addLayer({
    id: 'prairie_action_area',
    'type': 'raster',
    'source': 'prairie_locI',
    'paint': {
    'raster-fade-duration': 1
    }
  }, 'road-intersection-copy-1'); 

  
  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      console.log("scroller")
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);

