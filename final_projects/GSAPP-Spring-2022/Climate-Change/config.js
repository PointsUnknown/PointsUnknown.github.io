let topTitleDiv = "<br></br><h4>Points Unknown: Cartographic Narratives | Columbia GSAPP | Spring 2022</h4>";

let titleDiv =
  "<br></br><h1>In California's Heartland, Small-Time Almond Farmers Face a Dry Future</h1>";

let bylineDiv = "<p>Yi Hyun Kim, Shen Xin, Jackson Fordham</p>";

let descriptionDiv =
  '<br></br><p>California is experiencing its driest period since the Vikings and the Mayans. Almond growers in the Central Valley tell the story that they are tearing up their orchards. They stress that reduced almond production has severe impacts as the region is responsible for the entire almond supply domestically and around 80% of the global supply.</p>' +
  '<p>On the other hand, overall figures seem to reveal that the almond industry has not been severely impacted by the drought, unlike some other crops. This report will investigate what is actually happening with the almond production in the Central Valley by narrating multiple voices that have a say in this issue.</p>' +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p> This story is based on data from the <a href="https://droughtmonitor.unl.edu/" target="_blank">US Drought Monitor</a>, <a href="https://www.cdfa.ca.gov/" target="_blank">CDFA</a>, <a href="https://data.cnra.ca.gov/" target="_blank">CNRA</a>, <a href="https://earth.google.com/web/" target="_blank">Google Earth</a>, and <a href="https://www.usda.gov/" target="_blank">USDA</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://www.arch.columbia.edu/" target="_blank">Columbia GSAPP</a></p>';

let divChapter1 =
  '<h3>Central Valley, California</h3>' +
  '<p>This is a map illustrating the 19 counties that encompass the Central Valley, where this story will take place. The darker shade of orange depicts the San Joaquin Valley.<br></br></p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#ffd033" /></svg> Counties encompassing Central Valley</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#ffb739" /></svg> Counties encompassing both the Central Valley and the San Joaquin Valley</p>';

let divChapter2 =
  "<h3>Almond Growers in the Central Valley</h3>" +
  '<img src="images/Chapter_1_Image_Cropped.jpeg">' +
  '<p class="imageCredit"><a href="https://www.linkedin.com/in/garysoiseth/" target="_blank">Gary Soiseth</a><br></br></p>' +
  '<p>Gary Soiseth is a third generation almond farmer in Turlock, the heart of California’s Central Valley. He is also a USAID Humanitarian Assistance Specialist and an Adjunct Professor at The George Washington University. Like any other multi-generational farmers in California, Soiseth hopes to continue the legacy of farming.</p>' +
  '<p>But the severe drought in California is impacting Soiseth’s plans for his farm.</p>' +
  '<p><i>“In terms of food security, almonds are a great protein. It can literally feed the world … but a lot of farms are going out of business,”</i> he says.</p>';

let divChapter3 =
  '<br></br><div style="max-width:750px; margin-left:auto; margin-right:auto"><img src="images/Almond Export-01.png"></div>' +
  '<p class="imageCredit" style="max-width:600px; margin-left:auto; margin-right:auto"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjf6N_41sT3AhWjjYkEHVE7AtwQFnoECAcQAw&url=https%3A%2F%2Fwww.cdfa.ca.gov%2FStatistics%2FPDFs%2F2020_Exports_Publication.pdf&usg=AOvVaw3-GIVLzdP7MynmTZ79nbNs" target="_blank">California Department of Food and Agriculture (CDFA)</a></p>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">California is experiencing its driest period since the Vikings and the Mayans. Almond growers across the  Central Valley say that they are tearing up their orchards. They stress that the drought has severe impacts as the region is responsible for the entire domestic almond supply and around 80% of the global supply.</p>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">Yet the story of almonds and drought is a tale of two Central Valleys. Large growers such as the Resnicks, John Vidovich, and farmers located in the Westlands Water District appear to be less impacted, based on figures that show more almonds have been planted in recent years than ever before.</p>' +
  '<div style="max-width:550px; margin-left:auto; margin-right:auto"><img src="images/acreage-01.png"></div>' +
  '<p class="imageCredit" style="max-width:600px; margin-left:auto; margin-right:auto"><a href="https://www.nass.usda.gov/Statistics_by_State/California/Publications/Specialty_and_Other_Releases/Almond/index.php" target="_blank">USDA National Agricultural Statistics Service (NASS)</a></p>';

let divChapter4 =
  '<h3>Average Size of Almond Farms per County</h3>' +
  '<p><a href="https://data.cnra.ca.gov/dataset/statewide-crop-mapping"> CNRA 2018 Statewide Crop Mapping Data</a><br></br></p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#E48125" /></svg> 50 +</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#F9A027" /></svg> 45 - 50</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#FDBB65" /></svg> 35 - 45</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#FFDDA6" /></svg> 25 - 35</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#FFF3E2" /></svg> 10 - 25</p>';

let divChapter5 =
'<p>Many <a href="https://www.almonds.com/why-almonds/growing-good/family-farms" target="_blank">almond growers</a> in California are third or fourth generation family farmers like Soiseth. Around 90% of the almond farms are family farms, but vary largely in size. Although 70% of the almond farms have a size smaller than 100 acres, there are immense farms like The Wonderful Company, owned by the Resnicks, which spans approximately 30,000 acres of almonds. <a href="https://www.motherjones.com/environment/2016/08/lynda-stewart-resnick-california-water/" target="_blank">Mother Jones</a> reported in 2016 that the Resnicks are using more water than every home in LA.</p>' +
'<h4>* Kern County has one of the largest average almond farm size. This is where the Resnicks are based.</h4>';

let divChapter6 =
  '<h3>Drought Severity throughout the States in 5/01/2022</h3>' +
  '<p>This map illustrates the level of drought per County in California, using the "Drought Severity and Coverage Index (DSCI)", provided by the U.S. Drought Monitor.<br></br></p>' +
  '<p>Drought Severity and Coverage Index (DSCI)<p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#e74c3c" /></svg> 400 +</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#ec7063" /></svg> 350 - 399</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#f1948a" /></svg> 300 - 349</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#f5b7b1" /></svg> 250 - 299</p>' +
  '<p class="dib v-mid code tl lh-copy f7 pl1 mv0"><svg class="dib v-mid" height="18" width="18"><circle cx="9" cy="9" r="7" stroke="black" stroke-width="0.8" fill="#fadbd8" /></svg> 200 - 249</p>';

let divChapter7 =
  "<h3>The Ongoing Drought and the Almond Industry<br></br></h3>" +
  '<p>California is no stranger to <a href="https://water.ca.gov/water-basics/drought" target="_blank">droughts</a>. What is notable is that it is currently experiencing one of the worst droughts in history. After the 2012 - 2016 drought, the state is now going through the driest period in 1,200 years.</p>' +
  "<p>Lack of rain has dried up most of the groundwater in 2021, depleting water sources for those in the agriculture industry. Even worse, warmer and drier conditions result in crops requiring more water than usual. According to <a href='https://www.ucmerced.edu/content/josu%C3%A9-medellin-azuara' target='_blank'>Josué Medellín-Azuara</a>, Associate Professor from UC Merced, this implies a further discrepancy in the water supply and irrigation demands, leading to farmers digging deeper for water.</p>" +
  "<p>According to a <a href='https://www.ppic.org/publication/water-use-in-california/' target='_blank'>PPIC publication</a>, around 40% of the water in California is used by the agricultural industry, 10% urban, and 50% environmental. Farming uses up 80% of all water under the businesses and homes category, though it only accounts for about 2% of the state’s gross state product.</p>";

let divChapter8 =
  "<br></br><p style='max-width:600px; margin-left:auto; margin-right:auto'>Near Soiseth's parcel of almond farm in Turlock, a city in Stanislaus County, CA, there is a communal well drilled by eleven farmers in case of emergency. It was the first time in 40 years that they decided to use the water.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>For a smaller farmer with less seniority in California's complicated system of water rights, the ongoing drought indicates that less water will be allocated for the same amount plot. Soiseth has two parcels of almond farms that receive water from different sources. On one of his farms, he receives surface water from the Turlock Irrigation District (TID). TID is one of the oldest irrigation districts in California, with its own water rights and is independent from the State and Federal projects.</p>" +
  '<div style="max-width:800px; margin-left:auto; margin-right:auto"><img src="images/CA_Drought.png"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://droughtmonitor.unl.edu/DmData/TimeSeries.aspx' target='_blank'>U.S Drought Monitor</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Before the drought became severe, Soiseth used to receive an average of 32 inches of water from TID each year. However, this has been cut to 18 inches. This means 18 inches of water has to be spread out on the same patch of land that used to receive 32 inches. The reduced amount of water stresses out the trees and forces earlier irrigation.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>His other patch of land uses drip irrigation by pumping groundwater because he has no other source of water for this land. Due to the drought, Soiseth had to rip out a pump and dig 150 feet into the ground with three other farmers, which cost him around $75,000. These farmers had no choice but to tap into new water reserves.<br></br></p>" +
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Water Distribution at the Farm</h3>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>The satellite images of Soiseth’s two parcels of almond farm reveal that the impacts of the 2012-2016 drought has been seen between 2016 and 2018. Conditions have improved from 2019, but it is likely that his almond trees will soon be exhausted again from the current drought.</p>" +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">Soiseth explains that the impacts of drought and water stress comes into effect in the “following set”, implying next year’s production rather than the current year.</p>' +
  '<div style="max-width:650px; margin-left:auto; margin-right:auto"><img src="images/Gary_Farm_Annotated.png"></div>' +
  '<p class="imageCredit" style="max-width:600px; margin-left:auto; margin-right:auto"><a href="https://earth.google.com" target="_blank">Google Earth Pro</a></p>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto"><i>“My yields started to drop in 2016 into 2018. There was a short reprieve in 2019, but decreased in 2020 again. 2021’s bloom looks weak, so we are predicting a low yield and also a low price per pound,”</i> says Soiseth.<br></br></p>' +
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Almond and Water</h3>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Almonds are a water-intensive crop, making them a target of other stakeholders in California who want to see the state's dwindling resources put to other uses.</p>" +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">Medellín-Azuara explains that it is important to consider how much water a crop permanently consumes, versus how much returns to the soil. When irrigating crops, the majority of water use is considered "consumptive use", meaning it is used for the biomass of the crop. But some of the water also returns to the habitat, recharges the aquifer, and gets reused. For instance, rice uses a lot of water but it is considered to be relatively environmentally friendly because it has lower consumptive water use. In contrast, almonds, pistachios, avocados and other crops that require irrigation every year have high consumptive water use.<br></br></p>' +
  '<h3 style="max-width:600px; margin-left:auto; margin-right:auto">Water Policies Governing California</h3>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">The region’s agriculture and water use are currently under major political debate. Tensions have arisen between the water use policies for agriculture and conservation due to ground water scarcity. This year, the Central Valley Project, a federal program that delivers water to the region through dams, reservations and canals, has not planned any allocation of water to the agriculture sector. The water officials of California also cut allocation to the State Water Project, now receiving 5% instead of 15%. Consequently, less water is allocated to farmers, turning them to rely heavily on groundwater. This comes in conflict with the 2014 California Sustainable Groundwater Management Act (SGMA) that aims to conserve and manage groundwater levels.<br></br></p>';
  
let divChapter9 =
  '<h3>The Politics of Almonds<br></br></h3>' +
  '<p><a href="https://www.c-win.org/carolee-krieger" target="_blank">Carolee Krieger</a>, the President and Executive Director of the California Water Impact Network (C-WIN) speaks about the issue from a different angle. They separate “good” and “bad” agriculture, placing intensive industrial agriculture as “bad” farmers. These industrial agriculture impair land with salt and toxic selenium, polluting waterways in the region. She also explains that the southern part of the Central Valley should not be used for irrigation at all, as growing crops in the toxic soil only worsens environmental degradation in the region.<br></br></p>';

let divChapter10 =
  '<p>C-WIN reports that the bulk of San Joaquin Valley counties account for California’s almond production. The consumption of water by the megafarms of San Joaquin Valley accounts for much of the total water spent in California’s agriculture. These farms are also benefiting from below-market rate water with the aid of the Central Valley Project and the State Water Project. The Resnicks control 57% of the <a href="https://www.kwb.org/about/" target="_blank">Kern Water Bank</a> that was originally authorized as an emergency water supply for ratepayers.</p>';

let divChapter11 =
  '<p><i>“It is very easy to blame the drought,”</i> says Krieger.</p>' +
  '<p>According to Krieger, the drought has been framed to be the core issue while the underlying problem is the highly disproportionate water allocation.</p>';

let divChapter12 =
  '<h3 style="max-width:600px; margin-left:auto; margin-right:auto">The Economics of Almonds<br></br></h3>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">Market conditions for almonds have not been so successful compared to the increasing amount of almonds produced. After reaching peak revenue in 2014, almond values plummeted in 2015, and has been stagnating. This is attributed to the drought.</p>' +
  '<div style="max-width:550px; margin-left:auto; margin-right:auto"><img src="images/Almond_Cash_Receipt_Value.png"></div>' +
  '<p class="imageCredit" style="max-width:600px; margin-left:auto; margin-right:auto"><a href="https://www.ers.usda.gov/data-products/farm-income-and-wealth-statistics/data-files-u-s-and-state-level-farm-income-and-wealth-statistics/" target="_blank">United States Department of Agriculture (USDA)</a></p>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">Increasing water rates in California also hit some farmers hard. According to Medellín-Azuara, farmers who cannot afford rising water prices have no choice but to lower their crop values. However, farmers growing commodity crops like almonds are in a more favorable position during the post-pandemic inflation. <br></br></p>' +
  '<h3 style="max-width:600px; margin-left:auto; margin-right:auto">Managing Agriculture<br></br></h3>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">The current outlook on the agriculture industry looks challenging. Medellín-Azuara explains that the surface cutbacks and SGMA will intensify water scarcity for both agriculture and urban settlements.</p>' +
  '<p style="max-width:600px; margin-left:auto; margin-right:auto">However, there are many ways to improve the situation. Medellín-Azuara gave a few suggestions the agriculture industry should implement to increase resilience, such as regulating local farmers to grow a healthy mix of permanent and annual crops. This will impose less constraint to available resources while sustaining farms financially.<br></br><p>';

let divChapter13 =
  '<h3>The Future of the Central Valley<br></br></h3>' +
  '<p>Smaller almond farmers are becoming more disadvantaged during severe drought conditions whereas megafarms continue to reap the benefits of almond farming. The current almond farming practices are unsustainable if the drought is to continue at this severity. This is most likely the case as groundwater levels have been decreasing, but farmers are relying more on groundwater.</p>' +
  '<p>C-WIN tells us three ways to improve the current situation. The first is to raise public awareness, and the second is to make use of the legislature, which is expensive and difficult to do. The last is to make use of the law, in particular Article 10, Section 2 of the California Constituton (1928) and the Fish and Game Code Section 5937 of the California Code.</p>' +
  '<p>Although it sounds difficult, California’s agriculture has always adapted to changes in the market, technology, and water availability. The industry will adapt to the changing environment and meet the needs of the market, hopefully through sustainable practices.</p>';

var config = {
  style: "mapbox://styles/yhkkasn/cl1li5m1e002t14oa6txd4br0",
  accessToken: "pk.eyJ1IjoieWhra2FzbiIsImEiOiJjbDFjYWhvYm8wMWxwM2Vuc3Vtb2ZvaDBwIn0.9Le60oPOqfaJUlU7KJjafQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "CV",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-121.8928876, 37.5017945],
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
      opacity: 1,
      duration: 300
    },
    {
      layer: "Almond",
    opacity: 0,
    duration: 300
  },
    {
      layer: "counties_drought",
    opacity: 0,
    duration: 300
  }
    ],
      onChapterExit: [
        {layer: "CentralValley",
      opacity: 1,
      duration: 300
    },
    {
      layer: "Almond",
    opacity: 0,
    duration: 300
  },
    {
      layer: "counties_drought",
    opacity: 0,
    duration: 300
  }
      ],
    },
    {
      id: "Gary1",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [-120.8928876, 37.5017945],
        zoom: 8,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
      opacity: 1,
      duration: 300
    },
    {
      layer: "Almond",
    opacity: 0,
    duration: 300
  },
    {
      layer: "counties_drought",
    opacity: 0,
    duration: 300
  }
    ],
      onChapterExit: [
        {layer: "CentralValley",
      opacity: 1,
      duration: 300
    },
    {
      layer: "Almond",
    opacity: 0,
    duration: 300
  },
    {
      layer: "counties_drought",
    opacity: 0,
    duration: 300
  }
      ],
    },
    {
      id: "Exports",
      alignment: "full",
      hidden: false,
      chapterDiv: divChapter3,
      location: {
        center: [-121.8928876, 37.5017945],
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
      opacity: 1,
      duration: 40
    },
    {
      layer: "Almond",
    opacity: 1,
    duration: 300
  },
    {
      layer: "counties_drought",
    opacity: 0,
    duration: 300
  }
    ],
      onChapterExit: [
        {layer: "CentralValley",
      opacity: 0,
      duration: 300
    },
    {
      layer: "Almond",
    opacity: 1,
    duration: 300
  },
    {
      layer: "counties_drought",
    opacity: 0,
    duration: 300
  }
      ],
    },
    {
      id: "Gary2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-121.8928876, 37.5017945],
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
        opacity: 0,
        duration: 300
      },
        {
          layer: "Almond",
          opacity: 1,
          duration: 300
        },
        {
          layer: "counties_drought",
        opacity: 0,
        duration: 300
      },
      ],
      onChapterExit: [
        {
          layer: "Almond",
          opacity: 1,
          duration: 300
        },
      ],
    },
    {
      id: "DroughtMap",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-119.8597, 35.4937], 
        zoom: 7,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Almond",
          opacity: 1,
          duration: 300
        },
        {
          layer: "counties_drought",
          opacity: 0,
          duration: 300
        },
      ],
      onChapterExit: [
        {
          layer: "Almond",
          opacity: 0,
          duration: 300
        },
        {
          layer: "counties_drought",
          opacity: 1,
          duration: 300
        },
      ],
    },
    {
      id: "Drought1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-121.8928876, 37.5017945], 
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "counties_drought",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "counties_drought",
          opacity: 1,
          duration: 300,
        },
      ],
    },
    {
      id: "Drought2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-121.8928876, 37.5017945], 
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "counties_drought",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "counties_drought",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Policies",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [-121.8928876, 37.5017945], 
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
      ],
      onChapterExit: [
      ],
    }, 
    {
      id: "CWIN",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9,
      location: {
        center: [-120.1928876, 36.6017945], 
        zoom: 7.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
      onChapterExit: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
    }, 
    {
      id: "CWIN2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10,
      location: {
        center: [-120.1928876, 36.6017945], 
        zoom: 7.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
      onChapterExit: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
    }, 
    {
      id: "CWIN3",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter11,
      location: {
        center: [-120.1928876, 36.6017945], 
        zoom: 7.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
      onChapterExit: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
    }, 
    {
      id: "Next Steps",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter12,
      location: {
        center: [-121.8928876, 37.5017945], 
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
      ],
      onChapterExit: [
      ],
    }, 
    {
      id: "Conclusion",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter13,
      location: {
        center: [-121.8928876, 37.5017945], 
        zoom: 5.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
      onChapterExit: [
        {
          layer: "CentralValley",
        opacity: 1,
        duration: 300
      },
      ],
    }, 
  ],
};

