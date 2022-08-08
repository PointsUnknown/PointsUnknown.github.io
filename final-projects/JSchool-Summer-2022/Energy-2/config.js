let titleDiv =
  "<h1>New York's Offshore Wind Projects Carry Both Good and Bad News for the City</h1>";

let bylineDiv = "<p>By Prinz Magtulis, Richard Abbey and Sarah Grevy Gotfredsen </p>";

let descriptionDiv =
"<p>Towering windmills meant to power America through the future may be key in securing human life on land, but environmentalists warn of the opposite effect on species above and below ground who run the risk of losing their natural habitats from these projects.</p>" +

"<p>Experts have consistently warned against potential displacement of birds and fishes from areas where offshore wind farms are constructed. They have rung alarm bells in states that host several of them such as Rhode Island and North Carolina, and are doing so now, in hopes of being listened to, in New York.</p>" +
"<p>New York is playing catch-up with other states in adopting clean energy. Offshore wind farms are a vital component of that, with five currently pursued, and the White House committing to assist in fast tracking them as part of President Joe Biden's</a> broader clean energy agenda.</p>" +

"<p><strong> New York bets on wind projects to boost renewable energy share</strong><br>RE share in energy mix by state (%)</p>"+
'<img src="images/RE-state.svg"  class="center"><br><p>Source: Energy Information Administration</p>'+
"<p>In the U.S., harnessing wind power is practically the only viable way to boost renewable energy output, Harrison Fell, senior researcher at Columbia's Center on Global Energy Policy, said. For one, wind energy is cheaper than solar, and while prices of the latter have likewise plummeted in recent years, the country simply has no space to put up large swaths of solar energy farms.</p>" +
"<p>Hydroelectric power plants are also not an option, Fell said. Dams used to house these plants are built on top of rivers and considered more environmentally destructive than erecting windmills. Maintaining them can also prove costly.</p>" +
"<p>That made wind the go-to-choice for many states going green. In New York, the state government is likewise touting wind farms as an economic bonanza estimated to contribute $12 billion in economic activity and generate over 6,800 jobs just from building them. </p>" +

"<p>But few have been said about potential costs and who are bound to pay for them. Private companies are funneling billions of dollars to the projects, but for Scott McWilliams, professor of wildlife ecology and physiology at University of Rhode Island, the bigger price will be paid for by birds and marine species at risk of losing their habitats in areas to be reclaimed for development.</p>" +
"<p>Studies show windmills could hurt animals. Birds flying around could get hit by windmill blades and die, while waters surrounding the structures could get contaminated from plant operations that, in turn, poison marine life. Over the long term, these threats, McWilliams said, are likely to trigger displacement for affected species as they try to evade harm.</p>" +
"<p><q>There is very little direct mortality risk but a large displacement effect,</q> he said. <q>If you put [the wind farms] in a really important bird or whale place where they're likely to be, then you'll likely have a negative impact on that particular kind of wildlife.</q></p>" +
"<p>Wind power from these projects are equivalent to over half of what New York needs to reach the goal of sourcing 70% of generated electricity from renewables by 2030.</p>" +


  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>This story is based on data by the <a href="https://www.nyserda.ny.gov/All-Programs/Offshore-Wind/Focus-Areas/NY-Offshore-Wind-Projects">New York States</a> Offshore Wind Program <a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html"></p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  
  "<p>New York currently has <a href='https://www.nyserda.ny.gov/All-Programs/Offshore-Wind/Focus-Areas/NY-Offshore-Wind-Projects'>five</a> offshore wind farms in the pipeline, which collectively are capable of generating 9,000 MW of electricity.</p>";

let divChapter2 =
"<p>Of the five, South Fork wind farm by the joint venture of Danish firm Ørsted and Eversource Energy already began construction last February.  The farm, to be located 35 miles east of Long Island, is targeted to become operational by late 2023. Four others are at varying stages of development.</p>" +
'<img src="images/southfarm.png">' 

  ;
let divChapter3 =
  "<p>The main problem with the projects, according to McWilliams, is that they are not coordinated. Because wind farms are proposed by individual companies and funded commercially, he said there is lack of consultation among stakeholders that could have brought to light the projects' pros and cons.</p>" 
 ;

 let divChapter4 =
 "<p>That was not the case in Rhode Island, where America's first wind farm was constructed by Ørsted in 2016. At the time, McWilliams said the federal government, through the Bureau of Ocean Energy Management, stepped in to limit areas where windmills can be built in order to avoid disrupting wildlife.</p>" +
 "<p>“They immediately took off the table any shipping lanes…, whale migration quarters and waters less than 20 meters in depth because we knew that that's where most of the waterfowl and waterbirds concentrate,” he explained.</p>";

;

let divChapter5 =

  "<p>“They immediately took off the table any shipping lanes…, whale migration quarters and waters less than 20 meters in depth because we knew that that's where most of the waterfowl and waterbirds concentrate,” he explained.</p>";
  ;

  let divChapter6 =

  "<p>As pushback to wind farms grows, builders erecting these projects have started putting in place contingencies, not only to protect wildlife but also their investment. </p>" +
  "<p> In June, Ørsted announced an agreement with environmental organizations to protect the North Atlantic Right Whale, common near Long Island waters and is facing extinction. The agreement, among others, will see the company enforce measures to help keep whales away from project sites as well as minimize noise during construction to avoid disturbing animals in the area.</p>" +
  "<p> Such efforts will not completely eliminate wildlife risks posed by the projects, but can help mitigate them. In the end, Columbia's Fell said offshore wind farms are still “net positive” for New York, which presently relies heavily on natural gas for its power. </p>" +
  "<p><strong> Over 45% of New York state energy comes from natural gas</strong></p>"+
  '<img src="images/RE.svg" class = "center2"><br><p>Source: Office of Energy Efficiency and Renewable Energy</p>' +
  "<p> McWilliams agreed. “I'm saying the effect would still be positive, but just be careful where you put it,” he said.</p>" 
  ;
var config = {
  style: "mapbox://styles/sarahgrevy/cl4cy02wm006z14mzkmuzflxq",
  accessToken: "pk.eyJ1Ijoic2FyYWhncmV2eSIsImEiOiJjbDFwZHg2YzkwMTVqM2lzeTgxa29waDNnIn0.8fJhOwF_qreAF9cEeVNUMw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: { 
        center: [-73.869, 41.049],
        zoom: 7,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [

            ],
        },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-71.045935936999967, 40.719213229000047],
        zoom: 8.5,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "windLeases",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-71.045935936999967, 40.719213229000047],
        zoom: 8.5,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,

        
      },
      onChapterExit: [
        {
          layer: "windLeases",
          opacity: 0,
          duration: 300,
        },
      ],
    },
   
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-71.542677, 41.142757],
        zoom: 10,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-71.542677, 41.142757],
        zoom: 10,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "weekdayTrips",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-73.886201, 40.744566],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },

  ],
};