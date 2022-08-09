# The Deliveristas: Food Delivery Workers on Ground Zero

Scrollytelling code based on William B. Davis' [Scrollydrive repository](https://github.com/willymaps/scrollydrive). The full walkthrough is linked [here](http://www.formerspatial.com/scrolly-drive).

Code for website is in the main folder. The js folder contains the drive.js script for the scrollytelling path.

The files for mapping Sergio Solano's bike path are in the [data](https://github.com/ilenapeng/nyc-delivery-cyclists/tree/main/data) folder. A GPX file exported from Strava was converted to a geojson using Mapbox's [toGeoJSON tool](https://mapbox.github.io/togeojson/). This geojson is labeled raw-path.geojson in the data folder. The points where Solano picked up food at were added to a Google MyMap and exported as a KML file, which was also then converted to a geojson, which is labeled points.geojson in the data folder. The raw-path and points geojson files were then combined in a text editor to create path.geojson.

Project photos are in the [images](https://github.com/ilenapeng/nyc-delivery-cyclists/tree/main/images) folder. Charts, along with the Python (Altair) code used to create them, are in the [charts](https://github.com/ilenapeng/nyc-delivery-cyclists/tree/main/charts) folder.
