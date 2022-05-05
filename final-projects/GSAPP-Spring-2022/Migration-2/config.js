var config = {    
    accessToken: 'pk.eyJ1IjoicmQyOTU4IiwiYSI6ImNsMWdqODN5ZDAwc3UzbG40cG44emU5cmMifQ.txmTQVDKMx91ZUSHxziGBw',
    style: 'mapbox://styles/rd2958/cl1gkklh6002615ru5qhlaex2',
    theme: 'light',
    toptitle: 'Points Unknown | Migration Team 2 Final Project',
    title: 'The Recent Refugee Renaissance in Buffalo Has Totally Changed the City\'s Streetscape. \n Here is How.',
    byline: 'By Polina Stepanova, Joan Du and Jie Kong',
    description: '<p> Buffalo, the 2nd most populated city in New York State after NYC, has been home for many various cultures and populations over the years, but it has recently experienced an almost exponential growth in the number of refugees making this city their home. Burmese, Bangladeshi, Afghani, Thai, and other nationalities have been finding a refuge in the city of Buffalo and have been influencing the city making the culture more diverse and the streetscape more vibrant. In this article, we share the closer examination of how Buffalo became a blooming flower of cultural intersections, and how refugees from all over the world embellish the streets of this northern city.   </p>',
    footer: 'Sources: \n <a href="https://ppgbuffalo.org/files/documents/data-demographics-history/populations_and_cultural_groups/datademographicshistory-_immigrants__refugees__and_languages_spoken_in_buffalo.pdf">Deandra Fike, Subin Chung, and Emily Riordan,"Immigrants, Refugees, and Languages Spoken in Buffalo" July 14, 2015.</a> \n <a href="https://ppgbuffalo.org/"> “Defining Good Together:an Agenda by and for the Community.” Partnership for the Public Good</a> \n Department of Homeland Security \n <a href="https://buffalonews.com/news/local/bangladeshis-transforming-buffalo-one-block-at-a-time/article_947bf3e3-8323-500a-9edc-43c752f88f81.html">Emma Sapong, "Bangladeshis transforming Buffalo, one block at a time" Dec 12, 2015 Updated May 16, 2021</a> \n Erkin Ozay, University of Buffalo, Interview \n <a href="https://buffalonews.com/entertainment/dining/restaurants/at-rakhapura-undiscovered-burmese-and-sushi-downtown/article_96d060fe-b73e-11ec-af65-cf3e4f8d383b.html">Galarneau, Andrew, and Robert Kirkham / Buffalo News. “At Rakhapura, Undiscovered Burmese and Sushi Downtown.” Buffalo News, 13 Apr. 2022</a> \n <a href="https://www.wkbw.com/news/local-news/observing-ramadan-buffalo-muslim-centers-religious-leader-share-how-muslims-celebrate-holiest-month-of-the-year">Kassahun, Pheben. “Observing Ramadan: Buffalo Muslim Center\'s Religious Leader Shares How Muslims Celebrate Holiest Month of the Year.” WKBW, WKBW, 30 Apr. 2022</a> \n <a href="https://www.democratandchronicle.com/in-depth/news/2022/01/10/buffalo-ny-refugees-resettlement-gentrification/8766544002/">Korfhage, Matthew. “After Decades of Decline, Buffalo Boasts a \'Refugee Renaissance.\' Can It Last?” Buffalo NY Refugee Renaissance Joined by Afghan Evacuees, Democrat and Chronicle, 10 Jan. 2022</a>  \n Making Buffalo Home \n <a href="https://buffalonews.com/business/local/manufacturers-eager-to-welcome-refugees-to-their-workforces/article_dcdbfee0-a263-5f3d-a4ce-c7332854ac28.html">Matt Glynn, "Manufacturers eager to welcome refugees to their workforces" Jan 26, 2020 Updated Apr 4, 2022</a> \n <a href="https://buffalonews.com/business/local/refugee-workers-offer-talent-pool-for-employers-struggling-to-hire/article_4e79b088-ba6f-11ec-afb4-c7636388289e.html">Matt Glynn, "Refugee workers offer talent pool for employers struggling to hire" Apr 13, 2022 Updated Apr 17, 2022</a>',  
    //footer: '<a href="https://esd.ny.gov/sites/default/files/Buffalo-East-Side-Corridor-Fund.pdf">New York State of Opportunity Empire State Development, "The Buffalo Billion II East Side Corridor Economic Development Fund" Spring 2019</a> \n <a href="https://www.bonappetit.com/story/west-side-bazaar-buffalo-new-york">Pedalino, Alana. “How One Upstate New York Food Court Is Changing Hundreds of Lives.” Bon Appétit, 25 Apr. 2022</a> \n <a href="https://buffalonews.com/news/local/refugee-family-settles-into-the-house-that-beer-built/article_2840165d-eb95-5400-b697-bfd43a54a7e6.html">Phil Fairbanks,"Refugee family settles into the house that beer built" Feb 9, 2019</a> \n <a href="https://www.pewresearch.org/religion/religious-landscape-study/">“Religious Landscape Study.” Pew Research Center\'s Religion & Public Life Project, Pew Research Center, 31 Mar. 2022</a> \n <a href="https://www.wivb.com/news/local-news/burma-to-buffalo-whats-the-draw-for-thousands-of-refugees/">Reporter, George Richert News 4. “Burma to Buffalo; What\'s the Draw for Thousands of Refugees ?” News 4 Buffalo, News 4 Buffalo, 25 Feb. 2016</a> \n <a href="http://projects.buffalonews.com/long-reads/burma/day-two.html">Steven Sanyu, Burmese Community Services, Interview.  Zremski, Jerry. “For Poorer, for Richer.” Buffalonews.com</a> ',
    footerAttribution: '<a href="https://www.mapbox.com/">© Mapbox</a> ',
    chapters: [
         //Map of NYS (JOAN)  
        {
            id: 'MapofNYS',
            alignment: 'left',
            title: 'Buffalo, \n a big city for refugee \'s resettlement  ',
            image: 'images/RefugeePopulation2016-01.jpg',
            imageCredit: '<a href="https://otda.ny.gov/programs/bria/">Refugee Services (RS) </a>',
            location: {
                center: [-79, 43],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 1
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ]
        },

         //Map of Buffalo (JOAN)  
        {
            id: 'MapofBuffalo',
            alignment: 'left',
            description: 'Ever since 2000, Buffalo has witnessed an intense increase in the number of resettled refugees. From 2003 to 2013, Erie County resettled a total of 9723 refugees. In 2018, Erie County received slightly over one third of the total refugee flow into the state.',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 1
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ]
        },

         //Refugee: Focus  
         {
            id: 'Refugee map of the world',
            alignment: 'full',
            title: 'Refugee map of the world',
            image: 'images/RefugeeWorldMap-Scaled.jpg',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
        },

        {
            id: 'Refugee distribution of NYS',
            alignment: 'full',
            image: 'images/Refugee_Scatterplot_Page.jpg',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
        },


        //Demographic Map 1 - White Race  
        {
            id: 'DemoMapofBuffalo1',
            alignment: 'left',
            title: 'White Race',
            description: 'Buffalo and its metropolitan area have quite a demographic split. According to Erkin Ozay, professor of Architecture at University of Buffalo, West Buffalo has always been a White affluent community. It was also one of the first to be occupied by refugees – like in the Five Points neighborhood.',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 1
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0.4
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 1
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }            ]
        },

            //Demographic Map 2 - Asian Race  
            {
                id: 'DemoMapofBuffalo2',
                alignment: 'left',
                title: 'Asian Race',
                description: 'Asian nationality is not that prominent in Buffalo – however, it is growing due to the incoming refugees. A lot of refugees have arrived from Burma, Thailand, or Bhutan, and they contribute to the flourishing Asian culture in the city.',
                location: {
                    center: [-79,42.9],
                    zoom: 10,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [
                    {
                        layer: 'BuffaloPosition',
                        opacity: 0
                    },
                    {
                        layer: 'BuffaloOutline',
                        opacity: 1
                    },
                    {
                        layer: 'DemoMapofBuffalo1',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo2',
                        opacity: 0.4
                    },
                    {
                        layer: 'DemoMapofBuffalo3',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo4',
                        opacity: 0
                    },
                    {
                        layer: 'HighlightedNeighborhood',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsLabel',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonLabel',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayLabel',
                        opacity: 0
                    },
                    {
                        layer: 'CorridorLine',
                        opacity: 0
                    }                ],
                onChapterExit: [
                    {
                        layer: 'BuffaloPosition',
                        opacity: 0
                    },
                    {
                        layer: 'BuffaloOutline',
                        opacity: 1
                    },
                    {
                        layer: 'DemoMapofBuffalo1',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo2',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo3',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo4',
                        opacity: 0
                    },
                    {
                        layer: 'HighlightedNeighborhood',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsLabel',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonLabel',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayLabel',
                        opacity: 0
                    },
                    {
                        layer: 'CorridorLine',
                        opacity: 0
                    }
                ]
            },
    
            //Demographic Map 3 - Hispanic and Latino Race  
            {
                id: 'DemoMapofBuffalo3',
                alignment: 'left',
                title: 'Hispanic and Latino Race',
                description: 'People of Hispanic and Latino nationality occupy many neighborhoods in Buffalo. Some of the refugees identifying themselves with this race come from Colombia.',
                location: {
                    center: [-79,42.9],
                    zoom: 10,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [
                    {
                        layer: 'BuffaloPosition',
                        opacity: 0
                    },
                    {
                        layer: 'BuffaloOutline',
                        opacity: 1
                    },
                    {
                        layer: 'DemoMapofBuffalo1',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo2',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo3',
                        opacity: 0.4
                    },
                    {
                        layer: 'DemoMapofBuffalo4',
                        opacity: 0
                    },
                    {
                        layer: 'HighlightedNeighborhood',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsLabel',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonLabel',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayLabel',
                        opacity: 0
                    },
                    {
                        layer: 'CorridorLine',
                        opacity: 0
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'BuffaloPosition',
                        opacity: 0
                    },
                    {
                        layer: 'BuffaloOutline',
                        opacity: 1
                    },
                    {
                        layer: 'DemoMapofBuffalo1',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo2',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo3',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo4',
                        opacity: 0
                    },
                    {
                        layer: 'HighlightedNeighborhood',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsLabel',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonLabel',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayLabel',
                        opacity: 0
                    },
                    {
                        layer: 'CorridorLine',
                        opacity: 0
                    }
                ]
            },

             //Demographic Map 4 - African American Race  
             {
                id: 'DemoMapofBuffalo4',
                alignment: 'left',
                title: 'African American Race',
                description: 'In terms of where African Americans reside in Buffalo, professor Erkin Ozay says that they primarily occupy East Buffalo. East Buffalo has also been an area with a large influx of refugees.',
                location: {
                    center: [-79,42.9],
                    zoom: 10,
                    pitch: 0,
                    bearing: 0
                },
                onChapterEnter: [
                    {
                        layer: 'BuffaloPosition',
                        opacity: 0
                    },
                    {
                        layer: 'BuffaloOutline',
                        opacity: 1
                    },
                    {
                        layer: 'DemoMapofBuffalo1',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo2',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo3',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo4',
                        opacity: 0.4
                    },
                    {
                        layer: 'HighlightedNeighborhood',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsLabel',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonLabel',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayLabel',
                        opacity: 0
                    },
                    {
                        layer: 'CorridorLine',
                        opacity: 0
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'BuffaloPosition',
                        opacity: 0
                    },
                    {
                        layer: 'BuffaloOutline',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo1',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo2',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo3',
                        opacity: 0
                    },
                    {
                        layer: 'DemoMapofBuffalo4',
                        opacity: 0
                    },
                    {
                        layer: 'HighlightedNeighborhood',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'FivePointsLabel',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'EmersonLabel',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayExtrusion',
                        opacity: 0
                    },
                    {
                        layer: 'BroadwayLabel',
                        opacity: 0
                    },
                    {
                        layer: 'CorridorLine',
                        opacity: 0
                    }
                ]
            },
               


       
        //Overall Business Stats (JIE)     
        {
            id: 'BusinessStats',
            alignment:'full',
            title: 'Refugee Renaissance',
            image: 'images/industry distribution.png',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ]
        },       
        //Overall Language Stats (JIE)     
        {
            id: 'LanguageStats',
            alignment:'full',
            title: 'Languages Spoke in Buffalo',
            image: 'images/language.png',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ]

        }, 
      
        //Personal Story (POLINA)      
        {
            id: 'Personal Story',
            alignment: 'full',
            image: 'images/Steven_Page.jpg',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ]
        },       


        //Timeline (POLINA)      
        {
            id: 'Timeline',
            alignment: 'full',
            image: 'images/Buffalo_Timeline_Buffalo_Timeline.jpg',
            description: 'The city itself was established back in the 19th century. The arrival of refugees started happening in the beginning of 2000s, and now they comprise a considerable proportion of the Buffalo economy.',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
            ]
        },       

        //Where are the highlighted neighborhood
        {
            id: 'HighlightedNeighborhood',
            alignment:'center',
            title: 'Neighborhoods Blooming',
            description: 'In order to understand how the city of Buffalo has been changing, we will look into three distinctive neighborhoods and highlight the refugees\' contribution to the streetscape.',
            location: {
                center: [-78.88021046735832,42.9112501941102],
                zoom: 11,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 1
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
        },

        // 1 - Five Points neighborhood - 1 (POLINA)
        {
            id: 'FivePointsNeighborhood - 1',
            alignment:'left',
            title: 'Five Points Neighborhood',
            description: 'One of the neighborhoods most prominently changed by the refugee renaissance is Five Points located on the very West side of Buffalo. Erkin Orzay from the University of Buffalo mentions that Western Buffalo despite being a white affluent community was first to be occupied by the refugees. While in their process of adjustment to the United States, the asylees first started off with learning the language and finding a job in order to meet the necessary self-sustaining mark, a lot of them ended up opening their business in Five Points neighborhood as they found their financial footing. ',
            location: {
                center: [-78.895, 42.915275],
                zoom: 15,
                pitch: 20,
                bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 1
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 1
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 1
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 1
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
        },
        //

        // 1 - Five Points neighborhood - 2
                {
                    id: 'FivePointsNeighborhood-2',
                    alignment:'left',
                    title: 'Five Points Neighborhood',
                    description: 'The Five Points area flourishes with refugee-owned businesses. Some of the notable locations that diversify the regular Buffalo streetscape are Buffalo Community Center, Westside Bazaar, Win Asian Market, Golden Burma Food, and Burmese Muslim Community center, and Abyssinia Ethiopian Cuisine. They all serve people in various ways – Westside Bazaar, for example, received its praise for helping refugees and serving ethnically diverse cuisines in a story by <a href="https://www.bonappetit.com/story/west-side-bazaar-buffalo-new-york">Bon Appetit</a>. An iconic place, Westside Bazaar helps refugees open their food businesses and move towards their entrepreneurial dreams while sharing their cultural heritage.',
                    location: {
                        center: [-78.895, 42.913],
                        zoom: 15,
                        pitch: 20,
                        bearing:70
                    },
                    onChapterEnter: [
                        {
                            layer: 'BuffaloPosition',
                            opacity: 0
                        },
                        {
                            layer: 'BuffaloOutline',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo1',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo2',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo3',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo4',
                            opacity: 0
                        },
                        {
                            layer: 'HighlightedNeighborhood',
                            opacity: 0
                        },
                        {
                            layer: 'FivePointsExtrusion',
                            opacity: 1
                        },
                        {
                            layer: 'FivePointsLabel',
                            opacity: 1
                        },
                        {
                            layer: 'EmersonExtrusion',
                            opacity: 0
                        },
                        {
                            layer: 'EmersonLabel',
                            opacity: 0
                        },
                        {
                            layer: 'BroadwayExtrusion',
                            opacity: 0
                        },
                        {
                            layer: 'BroadwayLabel',
                            opacity: 0
                        },
                        {
                            layer: 'CorridorLine',
                            opacity: 0
                        }
                    ],
                    onChapterExit: [
                        {
                            layer: 'BuffaloPosition',
                            opacity: 0
                        },
                        {
                            layer: 'BuffaloOutline',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo1',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo2',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo3',
                            opacity: 0
                        },
                        {
                            layer: 'DemoMapofBuffalo4',
                            opacity: 0
                        },
                        {
                            layer: 'HighlightedNeighborhood',
                            opacity: 0
                        },
                        {
                            layer: 'FivePointsExtrusion',
                            opacity: 1
                        },
                        {
                            layer: 'FivePointsLabel',
                            opacity: 1
                        },
                        {
                            layer: 'EmersonExtrusion',
                            opacity: 0
                        },
                        {
                            layer: 'EmersonLabel',
                            opacity: 0
                        },
                        {
                            layer: 'BroadwayExtrusion',
                            opacity: 0
                        },
                        {
                            layer: 'BroadwayLabel',
                            opacity: 0
                        },
                        {
                            layer: 'CorridorLine',
                            opacity: 0
                        }
                    ]
                },
                //
        

        // 1 - Five Points neighborhood - 3 (POLINA)
        {
            id: 'FivePointsNeighborhood - 3',
            alignment:'full',
            image: 'images/N1_FivePoints_Page.jpg',
            location: {
                center: [-78.895, 42.913],
                zoom: 15,
                pitch: 20,
                bearing: 70
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 1
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 1
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
        },


        // MLK Park/Emerson neighborhood - 1 (JOAN)
        {
            id: 'MLKPark/EmersonNeighborhood',
            title: 'Emerson Neighborhood',
            description: "The second neighborhood in Buffalo that caught our attention is Emerson, an area shaped by the diverse religious practices brought in by the international re-settlers. Emerson is booming with the growing presence of various mosques that become sanctuaries for the refugees practicing Islam. In the neighborhood of Emerson and its vicinity, which belong to the Eastern side of Buffalo, we found the following mosques or masjids: Buffalo Muslim Center (BMC), Buffalo Islamic Center, Masjid Zakariya, Markaz Masjid, Buffalo Islamic Cultural Center at Masjid Baitul Aman, Baitul Mamoor Jam-E-Masjid, Masjid Daru-s Salaam, Islamic Da’wah Center of Buffalo, Madinah Masjid, Jamiaasshrafia, and Lovejoy Masjid.",
            location: {
                center: [-78.83069206882256, 42.90111884428976],
                zoom: 15,
                pitch: 50,
                bearing: 30
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 1
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 1
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 1
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 1
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
},

        // MLK Park/Emerson neighborhood - 2 (JOAN)
        {
            id: 'MLKPark/EmersonNeighborhood2',
            title: 'Emerson Neighborhood',
            description: "The list is lengthy – this neighborhood has at least 12 operational masjids, and all within an area of 2.86 square miles. That makes it more than 4 mosques per square mile which is quite high density. Considering that only 0.9% of USA population practices Islam (according to Pew Research Center), this density is unlikely to be found in many places. The same area, for comparison, only has 6 churches, per Google maps – only half of the mosques’ count. What is happening here?",
            location: {
                center: [-78.81246142907716, 42.8934],
                zoom: 15,
                pitch: 50,
                bearing: 30
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 1
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 1
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 1
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 1
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
},

        // Emerson neighborhood - 3 (Joan)
        {
            id: 'FivePointsNeighborhood3',
            alignment:'full',
            image: 'images/N2_Emerson_Page.jpg',
            location: {
                center: [-78.81246142907716, 42.8934],
                zoom: 15,
                pitch: 50,
                bearing: 30
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 1
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 1
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
        },


        // Broadway - Fillmore- Clinton Bailey Neighorhood (JIE)        
        {
            id: 'Broadway Neighborhood - 1',
            title: 'Broadway - Fillmore- Clinton Bailey Neighorhood is Resettling Refugee',
            image: 'images/N3 streetphotos1.png',
            location: {
                center: [-78.83353317589949,42.88583622601174],
                zoom: 13,
                pitch: 50,
                bearing: 30
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 1
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 1
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 1
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 1
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
    },

        // Broadway - Fillmore- Clinton Bailey Neighorhood (JIE)        
        {
            id: 'Broadway Neighborhood - 2',
            title: 'The Welcome from Manufactory',
            description: 'The refugee population start growing in buffalo again in recent years. A lot of business organizations view their settlement as a positive force and great resources of new talent amid a tight job market. Especially after the pandemic, some businesses like the manufactory, are in need of people that can work on a job site instead of working online. So the connection between the refugee community and their workplace is being set up, a lot of new coming-in refugees will live close to their hiding place and gradually form their own neighborhood.',
            location: {
                center: [-78.83347160166211,42.87690258537785],
                zoom: 15.5,
                pitch: 50,
                bearing: 30
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 1
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 1
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 1
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 1
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
    },

        // Broadway - Fillmore- Clinton Bailey Neighorhood (JIE)        
        {
            id: 'Broadway Neighborhood - 3',
            alignment:'full',
            image: 'images/training system.png',
            location: {
                center: [-78.83347160166211,42.87690258537785],
                zoom: 15.5,
                pitch: 50,
                bearing: 30
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 1
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 1
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
        },


         //Conclusion  
         {
            id: 'ConclusionofBuffalo - 1',
            title: 'Urban Network Connecting Refugee Community',
            description: 'As a city economic development fund plan which aims at collectively and progressively improving economic conditions, it prioritizes the community, focusing on the development of community service, community education, walkability, and regional economic opportunities in each area. We can clearly see that these four planned corridors pass through many refugee communities and recognize the vital role of the financial and social institutions associated with these communities. Therefore, on a larger scale, the changes of refugees to the streetscape of the community and their impact on various social systems also guide the planning and decision-making of urban governments and organizations on the urban streetscape.',
            location: {
                center: [-78.88021046735832,42.9112501941102],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 1
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 1
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 1
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 1
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 1
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 1
                },
                {
                    layer: 'CorridorLine',
                    opacity: 1
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 1
                }
        ]
    },

         {
            id: 'ConclusionofBuffalo - 2',
            title: 'Conclusion',
            description: 'The conclusion is inevitable – streets of Buffalo are changing due to the influx of various cultures and the development of its economy due to these forces. Small restaurants, legal services, masjids, grocery stores – the refugees overcome their initial struggles and establish their own businesses, bravely venturing out into the unknown. They truly deserve an applaud: not only are they securing their own future but they are also driving Buffalo’s economy upwards. We want to thank them for working through their initial adjustment and language barrier in order to flourish in their new home. \n We also want to additionally thank you Steven Sanyu and Erkin Ozay for giving us the interview. We also thank Michael Krisch, Juan Saldarriaga, and Laura Bliss for their massive contributions to this article.',
            location: {
                center: [-79,42.9],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 1
                }
        ],
            onChapterExit: [
                {
                    layer: 'BuffaloPosition',
                    opacity: 0
                },
                {
                    layer: 'BuffaloOutline',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo1',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo2',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo3',
                    opacity: 0
                },
                {
                    layer: 'DemoMapofBuffalo4',
                    opacity: 0
                },
                {
                    layer: 'HighlightedNeighborhood',
                    opacity: 0
                },
                {
                    layer: 'FivePointsExtrusion',
                    opacity: 0
                },
                {
                    layer: 'FivePointsLabel',
                    opacity: 0
                },
                {
                    layer: 'EmersonExtrusion',
                    opacity: 0
                },
                {
                    layer: 'EmersonLabel',
                    opacity: 0
                },
                {
                    layer: 'BroadwayExtrusion',
                    opacity: 0
                },
                {
                    layer: 'BroadwayLabel',
                    opacity: 0
                },
                {
                    layer: 'CorridorLine',
                    opacity: 0
                }
        ]
        }
    ]
};