---
layout: post
title: 06 - Creating an Annotated 3D Scene
category: [Google Earth Pro, Illustrator]
navigation_weight: 6
description: This tutorial will describe the necessary steps to create an annotated map using Google Earth 3D imagery and Adobe Illustrator.
active: true
---
# Introduction
To create maps that help contextualize a scene, news rooms often appeal to annotation layers added atop 3d earth imagery. In this tutorial, we will use Google Earth Pro and Adobe Illustrator to recreate a graphic used by the NYTimes for the Chelsea Bombing. The full article can be found at [Article Link](https://nyti.ms/2mBBmGk) and the image we are recreating is:  
  
![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/nytime-graphic.jpg)

# Google Earth Pro Setup
After installing Google Earth Pro (Tutorial Link) which can be downloaded at [Google Earth](https://www.google.com/earth/download/gep/agree.html), please immediately open your settings options.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/1-gep-setup.jpg)

Proceed by turning off all layers aside from ‘Borders and Labels’, ‘3D Buildings’, ‘Ocean’, ’Roads’ and ’Terrain’.

# Finding the Scene
The first thing we will do is zoom to the location of the event. As shown in the graphic, we’re focusing on 6th Ave W 25th Street in Manhattan. So we will start by searching that in Google Earth Pro.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/2-initial-search.jpg)

After querying Google Earth, you will always start at a top-down view of the scene. Before working on your image, please tap the ‘Show Sidebar’ button in the top toolbar (next to search), to get a larger viewing area.

Now that we have the image in view, the first thing we want to do is adjust the scene to show the 3d imagery of the buildings. To do so, hold down shift on your keyboard, and click and move your mouse up and down.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/4-lined-up.jpg)

*If you are not seeing 3d imagery, you need to go back to your Google Earth Preferences (Google Earth Pro —> Preferences), and under Terrain, select ‘Use 3D Imagery’.*

# Exporting the Scene
Within just a few moments, you can get relatively close to having the exact image the NYTimes used as the backdrop for their graphic. Please note that in the course, we will talk through why the NYTimes chose this as the view of the scene.

Once you have selected the scene, export the image using the ‘Save Image’ function. This will trigger a new tool bar. Before exporting your image, be sure to go back into your Sidebar and delete your search. In addition, please uncheck the layer ‘Roads’. We will add all text on the image in illustrator, where we have more control over labels. After deleting the search and hiding the roads layer, please hide your Sidebar.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/5-export-options.jpg)

In the ‘Save Image’ options, set the export resolution to Maximum. Under ‘Map Options’, uncheck all items. Finally, save your image to your computer.

**Export Below**

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/6-image-export.jpg)

We will now move into Adobe Illustrator, but keep your Google Earth window open for reference. To help in the Illustrator process, open your sidebar in Google Earth Pro and turn back on the ‘Roads’ layer. We will use this to reference where we place our annotation layers, as well as create the Manhattan reference map in the corner of the NYTimes graphic.

# Setting up Your Illustrator File
In Adobe Illustrator, create a new file using the dimensions of the image used by the NYTimes (Width: 2100px, Height: 1200px).

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/7-illustrator-new.jpg)

Next, place the image exported from Google Earth Pro to into the artboard. To accomplish this, go to ‘File’ —> ‘Place’ and select the image. Then click anywhere in the white artboard.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/8-illustrator-placed.jpg)

You should see now see a large version of your image. Click on the image and in the upper toolbar, type in W: 2100. Be sure that your image dimensions are constrained by making sure the chain is linked (between W and H settings). Now position the image into the artboard so that any overflow in height extends off the bottom of the board.

# Adding Graphic Overlays
The next step is adding a filter layer to darken the scene, providing highlight to the text and specified areas. To do so, please select the ‘Rectangle Tool’ from the left toolbar and highlight the entire artboard. Next, select a fill layer by clicking on the Fill box in the bottom left hand corner and set to black. Finally, set the ‘Opacity’ (found in the upper tool bar) to 25%.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/9-illustrator-overlay-1.jpg)

## Add Regional Highlights

Select the ‘Ellipse Tool’ (found in a submenu from the ‘Rectangle Tool’), and hold shift to draw a circle on your artboard. Draw a circle at a size similar to those shown in the article.

Now, select your circle and in the ‘Fill Settings’, select white for the stroke color and set the stroke to 7pt. Now copy and paste that circle three times so that you have 4 identical circles.

Move two of the images over the two scenes highlighted in the NYTimes article and hold shift while clicking on both circles, as well as the opacity layer. Now select Object —> Compound Path —> Make. Finally, move your remaining two circles over the highlighted regions formed by the compound path.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/9-illustrator-overlay-2.jpg)

## Add Text References

**For this portion, please reference the Google Earth program with Road layers re-enabled so that you can double check that your labels are correct.**

Now, click on the ‘Text Tool’ and click anywhere on your dartboard. For the text, we are going to use Helvetica, which is similar to the font used by the NYTimes (NYTFranklin).

For font details used in the tutorial:

**Locator Text**

* Font: Helvetica
    
* Font-Size: 30px
    
* Font-Style: Bold
    
* Arrangement: Center

**Street Labels**

* Font: Helvetica
    
* Font-Size: 30px
    
* Font-Style: Medium
    
* Arrangement: Left
    
To create the locator text, please select the options above and write out the description for each circle in a separate text field. Position the text accordingly.

**Rotate Text**

For the street labels, write out your label text. To rotate, simple click once on the text field and hover over the corner of the text box. Rotate until you’ve reached the proper degree.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/9-illustrator-overlay-3.jpg)

# Adding Locator Icon
Next, follow the steps used earlier in placing the Google Earth Export and place an [EPS file of Manhattan](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/manhattan.eps). Resize that image accordingly, and place it in the bottom right corner of your artboard.

Next, use your ‘Rectangle Tool’ to create a small rectangle that is similar to the one shown in the NYTimes graphic. Place it accordingly on the map.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/10-illustrator-locator.jpg)

*In the module, we will discuss why these locator maps are not entirely accurate, but why they are used for quick references for larger graphics.*

Lastly, add text about the locator map, and we are ready for export!

# Illustrator Export
![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/11-illustrator-export.jpg)

Once the image and locator map are looking how you'd like, go to ‘File’ —> ‘Export’ —> ‘Save for Web’, and make sure you’re exporting a jpeg image. Click save, and you’ve created your first annotated 3d reference map.

![](https://brown-institute-assets.s3.amazonaws.com/Images/mapping-refence/annotation-tutorial/12-final-image.jpg)