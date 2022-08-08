var config = {
    style: 'mapbox://styles/vincentvanbuskirk/cl6ikuk4y000s14lsnwq07ssa',
    accessToken: 'pk.eyJ1IjoidmluY2VudHZhbmJ1c2tpcmsiLCJhIjoiY2wxOHFjajk2MjFiMjNqbjF1bWxsaWt4YiJ9.RX0gnSYBbgZYKkfiXZ0h2g',
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'WHAT DOES IT TAKE TO VOTE?',
    subtitle: "An examination of voting stations in New York City",
    byline: "By Nao Kato, Misha Vaid, and Vincent Van Buskirk",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'left',
            hidden: false,
            title: 'Setting the stage',
            tweet: '<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">My father tried to vote today.. he lives in queens, NYC .. a friend drove him to the voting station... the line was 5 city blocks long out the door.. he was told the wait was several hours.. he went home..how is a 75 yr old man suppose to stand in line for 3/4 hours</p>&mdash; 🌹🥀🙏Cat (@sugarfreecat1) <a href="https://twitter.com/sugarfreecat1/status/1320541077716246528?ref_src=twsrc%5Etfw">October 26, 2020</a></blockquote>',
            description: 'The 2022 United States elections will be held on November 8. A considerable number of registered voters in New York City will visit voting stations for the first time since 2020. During the last presidential election in 2020, many registered voters had to wait hours to vote. Voting was particularly challenging for those who didn\'t live near a polling place.',
            location: {
                center: [-73.98276, 40.76903],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Voting Stations',
            location: {
                center: [-73.98276, 40.76903],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            image: './images/voting_line.jpeg',
            description: 'To explore which neighborhood is far from the closest voting station, we mapped the 5 minute walking distance areas for all 1231 stations citywide in 2020. The Bronx and Queens West, including Astoria and Long Island City, have more areas with limited access to the nearest sites.',
            onChapterEnter: [
                {
                    layer: 'polling-stations',
                    opacity: 0.8,
                },
                {
                    layer: 'congressional-district-walkability',
                    opacity: 0.0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Voting Station Walkability',
            location: {
                center: [-73.98276, 40.76903],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            image: './images/voting_booths.jpg',
            description: 'We found that the Bronx and Queens West, including Astoria and Long Island City, have more areas with limited access to nearby voting stations.',
            onChapterEnter: [
                {
                    layer: 'polling-stations',
                    opacity: 0.0,
                },
                {
                    layer: 'non-vehicle-percentage',
                    opacity: 0.0
                },
                {
                    layer: 'congressional-district-walkability',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'In Manhattan, nearly 40% of residents do not own a vehicle, according to the 2015-2019 American Community Survey.',
            description: `Outside Manhattan, particularly where public transportation has not developed enough, people have their own cars. In Staten Island, for example, approximately 95% of the population own a car. However, a closer look at the neighborhood reveals that some areas have a majority of the population living without their own cars. Some voters in these areas have to travel longer to reach the closest voting station than those in other areas.

            Looking at the map covering the 5 minutes walking distance, some neighborhoods in the Bronx and Queens are not covered at all. 
            `,
            location: {
                center: [-73.98276, 40.76903],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                    layer: 'congressional-district-walkability',
                    opacity: 0.0
                },
                {
                    layer: 'non-vehicle-percentage',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Queensbridge',
            description: 'In Census Tract 25, Queens, for example, nearly half of the residents live without their own car. In this tract, nearly 90% of the population is estimated to live under $50K. Approximately 75% of the population is either black or Hispanic. Residents living below the poverty line at a rate almost double that of New Yorkers.',
            location: {
                center: [-73.94194, 40.75533],
                zoom: 13.88,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            description: 'Census Tract 276, Bronx, has also nearly 40% of the population living without a car and early 70% of the residents live under the poverty line. Some registered voters in this tract have to walk more than 30 minutes to the closest voting station, according to the voting station locator by the Board of Elections in NYC.',
            location: {
                center: [-73.82346, 40.85009],
                zoom: 13.88,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '65-population-percentage',
                    opacity: 0.0
                },
                {
                    layer: 'non-vehicle-percentage',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Senior Citizens',
            description: 'Along with car ownership data, we also look at the percentage of people over 65 years old in each census tract. Eeven with public transportation, there are barriers for some elderly populations to travel to vote. Unlike the car ownership percentage, the ratio of the elderly population is relatively balanced in the city. However, some tracts show a distinctively high percentage of the elderly population.',
            location: {
                center: [-73.98276, 40.76903],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                    layer: 'non-vehicle-percentage',
                    opacity: 0.0
                },
                {
                    layer: '65-population-percentage',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
        {
            id: 'eigth-chapter',
            alignment: 'right',
            hidden: false,
            description: 'Similarly, 45% of residents in Census Tract 309, Bronx, do not own a car. This is a predominantly white neighborhood and relatively affluent community with a median household income about 25 percent higher than the average of the city, However, approximately 30% of the residents are over 80 years old.',
            location: {
                center: [-73.89322, 40.89216],
                zoom: 13.58,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '65-population-percentage',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'center',
            hidden: false,
            title: "Distance from voting stations is not the only problem",
            description: 'The Manhattan area seems to have an ample number of voting stations and they all seem to be easy to access by foot. However, as Manhattan is the most densely populated borough, residents found it difficult to avoid a long line at a voting site. At the last presidential election in 2020, <a href="https://www.nytimes.com/2020/10/27/nyregion/nyc-early-voting-election.html?searchResultPosition=2" target="_blank">Staten Island has an early voting site for every 32,000 registered voters, while Manhattan has it for every 75,000 voters.</a> Long waiting times may discourage voters from voting.',
            location: {
                center: [-73.98276, 40.76903],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            tweet: '<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">I tried to vote today in NYC. I found a very long line (many blocks long) in the rain &amp; cold. In the end, I failed to vote because I had to leave for a meeting. Inspiring to see so many voting but dispiriting to see how hard it is. Will try again tomorrow. Open more locations! <a href="https://t.co/QfcH0wvn3T">pic.twitter.com/QfcH0wvn3T</a></p>&mdash; Sue Mi Terry (@SueMiTerry) <a href="https://twitter.com/SueMiTerry/status/1322282840286023684?ref_src=twsrc%5Etfw">October 30, 2020</a></blockquote>',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '65-population-percentage',
                    opacity: 0.9
                }
            ],
            onChapterExit: []
        },
    ]
};