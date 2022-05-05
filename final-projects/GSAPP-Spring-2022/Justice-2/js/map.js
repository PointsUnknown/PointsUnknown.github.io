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
  right: "righty",
  full: "fully",
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
  chapter.classList.add("br3");
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
  container.classList.add(alignments[record.alignment] || "centered");
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

function rotateCamera(timestamp) {
  // clamp the rotation between 0 -360 degrees
  // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
  map.rotateTo((timestamp / 500) % 360, { duration: 0 });
  // Request the next frame of the animation.
  requestAnimationFrame(rotateCamera);
  }

map.on("load", function () {

  // rotateCamera(0);

  map.addSource('bwc', {
    'type': 'geojson',
    'data': 'data/BWC.geojson'
  })
  map.addSource('districts', {
    'type': 'geojson',
    'data': 'data/bwcMcensus.geojson'
  })
  map.addSource('sorted', {
    'type': 'geojson',
    'data': 'data/sortedbwcCTmerge.geojson'
  })
  // map.addLayer({
  //   id: 'bwc-heat',
  //   type: 'heatmap',
  //   source: 'bwc',
  //   maxzoom: 15,
  //   paint: {
  //     // increase weight as diameter breast height increases
  //     'heatmap-weight': {
  //       property: 'duration_seconds',
  //       type: 'exponential',
  //       stops: [
  //         [1, 0],
  //         [60000, 1]
  //       ]
  //     },
  //     // increase intensity as zoom level increases
  //     'heatmap-intensity': {
  //       stops: [
  //         [11, 1],
  //         [15, 3]
  //       ]
  //     },
  //     // assign color values be applied to points depending on their density
  //     'heatmap-color': [
  //       'interpolate',
  //       ['linear'],
  //       ['heatmap-density'],
  //       0, 'rgba(236,222,239,0)',
  //       0.2, 'rgb(208,209,230)',
  //       0.4, 'rgb(166,189,219)',
  //       0.6, 'rgb(103,169,207)',
  //       0.8, 'rgb(28,144,153)'
  //     ],
  //     // increase radius as zoom increases
  //     'heatmap-radius': {
  //       stops: [
  //         [11, 15],
  //         [15, 20]
  //       ]
  //     },
  //     // decrease opacity to transition into the circle layer
  //     'heatmap-opacity': {
  //       stops: [
  //         [20, 0],
  //         [30, 0]
  //       ]
  //     },
  //   }
  // }, 'waterway-label');
  map.addLayer({
    id: 'bwc-point',
    type: 'circle',
    source: 'bwc',
    minzoom: 5,
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'duration_seconds',
        type: 'exponential',
        stops: [
          [{ zoom: 15, value: 1 }, 5],
          [{ zoom: 15, value: 60000 }, 10],
          [{ zoom: 22, value: 1 }, 20],
          [{ zoom: 22, value: 60000 }, 50],
        ]
      },
      'circle-color': {
        property: 'police_district',
        type: 'exponential',
        stops: [
          [1, '#1e1f26'],
          [2, '#283655'],
          [3, '#4d648d'],
          [4, '#d0e1f9'],
          [5, '#a10115'],
          [6, '#d72c16'],
          [7, '#f0efea'],
          [8, '#c0b2b5']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      'circle-opacity': 1
    }
  }, 'waterway-label');
  map.addLayer({
    'id': 'pop-layer',
    'type': 'fill',
    'source': 'districts',
    'paint': {
        'fill-color': ['step', ['get', 'population'],
            '#ffffff',
            1000, '#6a0002',
            2000, '#c41617',
            3000, '#e9635a',
            4000, '#e998a2',
            5000, '#f5d3d2'],
        'fill-opacity': ['case', ['==', ['get', 'population'], null], 0, 0.65],
        'fill-outline-color':'#4f97a3'
      }

    },
    "waterway-shadow"
  );
  
  map.addLayer(
    {
      'id': "inc-layer",
      'type': 'fill',
      'source': 'districts',
      'paint': {
          'fill-color': ['step', ['get', 'dur_median'],
              '#ffffff',
              3, '#1e1f26',
              6, '#283655',
              9, '#4d648d',
              12, '#d0e1f9',
              15, '#006b2e'],
          'fill-opacity': ['case', ['==', ['get', 'dur_median'], null], 0, 0.65],
          'fill-outline-color':'#1e1f26'
        }
  
      },
      "waterway-shadow"
  );
  // map.addLayer(
  //   {
  //     'id': "act-layer",
  //     'type': 'fill',
  //     'source': 'sorted',
  //     'paint': {
  //         'fill-color': ['step', ['get', 'Activation Count'],
  //             '#ffffff',
  //             1500, '#fbf08c',
  //             3000, '#fae847',
  //             4500, '#f3db06',
  //             6000, '#ad9z04',
  //             7500, '#685e02'],
  //         'fill-opacity': ['case', ['==', ['get', 'Activation Count'], null], 0, 0.65],
  //         'fill-outline-color':'#4f97a3'
  //       }
  
  //     },
  //     "waterway-shadow"
  // );
  // Create a popup, but don't add it to the map yet.
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
  
  map.on('mouseenter', 'bwc-point', (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';
     
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.title;
    const date = e.features[0].properties.date_uploaded;
    const duration = e.features[0].properties.duration_seconds;
    const district = e.features[0].properties.police_district;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(date+'<br>'+'<p>Location: </p>'+description+'<br>'+'<p>Duration: </p>'+duration+'<br>'+'<p>Precinct: </p>'+district).addTo(map);
  });
    
  map.on('mouseleave', 'bwc-point', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
  map.on('mouseenter', 'pop-layer', (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';
     
    // Copy coordinates array.
    const lat = e.features[0].properties.latitude;
    const lon = e.features[0].properties.longitude;
    const description = e.features[0].properties.NAME;
    const pop = e.features[0].properties.population;
    const duration = e.features[0].properties.duration_seconds;
    const med = e.features[0].properties['median income'];
     
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat([lon,lat]).setHTML('<p>Census Tract: </p>'+description+'<br>'+'<p>Population: </p>'+pop+'<br>'+'<p>Total Length: </p>'+duration+'<br>'+'<p>Median Income: </p>'+med).addTo(map);
  });
    
  map.on('mouseleave', 'pop-layer', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
  map.on('mouseenter', 'inc-layer', (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';
     
    // Copy coordinates array.
    const lat = e.features[0].properties.latitude;
    const lon = e.features[0].properties.longitude;
    const description = e.features[0].properties.NAME;
    const pop = e.features[0].properties.population;
    const duration = e.features[0].properties.duration_seconds;
    const med = e.features[0].properties['median income'];
     
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat([lon,lat]).setHTML('<p>Census Tract: </p>'+description+'<br>'+'<p>Population: </p>'+pop+'<br>'+'<p>Total Length: </p>'+duration+'<br>'+'<p>Median Income: </p>'+med).addTo(map);
  });
    
  map.on('mouseleave', 'inc-layer', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
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
  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
    });
  map.addControl(nav, 'bottom-right');
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);