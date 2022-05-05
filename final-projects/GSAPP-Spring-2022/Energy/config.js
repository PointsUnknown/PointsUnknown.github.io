
var config = {    
    accessToken: 'pk.eyJ1Ijoicm90aW5hIiwiYSI6ImNsMWdrZDNwYjBlcWYzY245ZnM2dDBvNWoifQ.AFjl8ZLVu_vDCw2g6-v-aQ',
    style: 'mapbox://styles/rotina/cl22bxqd0000p15pbiurw5zpk',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Points Unknown | Final Report',
    title: 'Renewable energy - Pathway to Texas’s energy resiliency',
    byline: 'By Francesca Doumet, Rotina Tian, Mingxun Zou',
    description: '<p>The Texas energy crisis of 2021 brought up the question of whether the current independent energy grid in Texas is reliable or not. UN climate summits and Bidens Climate Plan have pushed renewable energy to a new level of significance. Energy resiliency is especially relevant in today’s context with the Russia-Ukraine war, when countries that used to depend on Russia for energy now have to look elsewhere.</p>',
    footer: 'This story is based on data from EIA <a href="https://atlas.eia.gov/datasets/eia::battery-storage/explore?location=35.966630%2C-94.704680%2C8.32">here</a>.',
    footerAttribution: '<a href=</a>',
    chapters: [
        {
            id: 'Overallmap',
            image: 'images/Grid.jpg',
            imageCredit: '<a href="https://www.texastribune.org/2022/02/15/texas-power-grid-winter-storm-2021/">Emily Albracht</a>',
            imagedescription:'failure of energe grid',
            title: 'TEXAS - ENERGY CAPITAL OF THE WORLD?',
            description: 'Texas has long been the energy capital of the world with abundant resources of natural gas and petroleum. However, during winter storm Uri in 2021, the state natural gas supply was disrupted, un-winterized power plants were unable to perform, and Texas experienced one of the worst power outages. As of Feb 17, 2021, at 9:49 a.m. ET, there were roughly 2,495,594 power outages across Texas, according to poweroutage.us.',
            location: {
                center: [-104, 31.5],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [ 
                {
            }
            ],
            onChapterExit: []
        },
        {
            id: 'Overallmap2',
            image: 'images/energyGrid.png',
            title: 'The problematic energy grid of Houston',
            description: 'The crisis exposed the deficiency of existing power grids, which spoke to the need for them to be reformed. At the same time, the state now faces the need to address the challenging transition to renewable energy, and to move away from its heavy reliance on natural gas.',
            location: {
                center: [-96.5, 29.88],
                zoom: 8,
                pitch: 40,
                bearing: 8
            },
            onChapterEnter: [ 
                {
            }
            ],
            onChapterExit: []
        },
        {
            id: 'naturalGas',
            title: 'Houston’s plan to move away from natural gas',
            image: 'images/diagramEnergy.jpg',
            description: '<a href="https://about.bnef.com/new-energy-outloo">BloombergNEF</a> predicts that it will be more expensive to operate existing coal or natural gas plants in five years than to build a project powered by renewables. Tori Wolfe from Houston Renewable Energy Group suggests that establishing a carbon emission policy with market-driven carbon price would also help the transition.In Houston, Mayor Turner created the <a href="https://resilience.rice.edu/climate-resilience-metrics#resilience"> Houston Climate Action Plan and the Resilient Houston plan</a>, and encouraged the citizens of Houson to take action. Among these, there is also a goal to power all of Houston’s municipal operations with 100% renewable energy before 2025. The city started the energy transition as early as 2017 to fully power the city with renewable energy. Harris County used to buy energy through the Public Power Tool from which only 20% of the energy is renewable. In 2021, Houston made the <a href="https://www.cdp.net/en/cities/cities-scores">Cities A List 2021</a> a list of leaders in environmental transparency and positive climatic impact, which recognizes their efforts in the energy transition.',
            location: {
                center: [-96.5, 29.8],
                zoom: 8,
                pitch: 40,
                bearing: 8
            },
            onChapterEnter: [
                {
                    layer: 'naturalGas',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'naturalGas',
                    opacity: 0
                }
            ]
        },
        {
            id: 'batteryStorage',
            title: 'Challenges of fully transitionning to renewable energy',
            footer: 'Battery storage locations of renewable Energy in Houston <a href="https://atlas.eia.gov/datasets/eia::battery-storage/explore?location=35.966630%2C-94.704680%2C8.32">here</a>.',
            footerAttribution: '<a href=</a>',
            imagedescription: 'sss',
            description: 'Western Texas is rich in solar and wind energy resources. According to the <a href="https://environmentamerica.org/sites/environment/files/reports/Shining-Cities-2020/EA_Shining_Cities_scrn.pdf">Shining Cities 2020 Report</a>. Texas possesses enough resources (Sun and wind) to have a stable supply of renewable energy. Local landowners have increasingly been leasing their land to solar / wind power plants and farms, which has promoted their use across the state. Although a lot of progress has been made, there are some concerns about transitioning towards 100% renewable energy. For one, renewable energy such as wind and solar relies greatly on weather conditions and can be inconsistent. The integration of storage with solar is critical to achieve the 100% renewable energy objective. Yet it remains under-served because many people worry about the initial investment which they consider to be too costly.There was a notable change after the Winter Storm Uri. Over 50% of the new private contracts signed by homeowners in Texas had included the storage union, according to Solar United Neighbors, an organization focused on community solar in the US. This only highlights the critical concurrent need for storage with renewable energy sources.Moreover, Texas needs a balance of multiple renewable energy sources, that is more practical in the transition towards 100% renewable energy.',
            location: {
                center: [-96.5, 29.8],
                zoom: 8,
                pitch: 40,
                bearing: 8
            },
            onChapterEnter: [
                {
                    layer: 'batteryStorage',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'batteryStorage',
                    opacity: 0
                }
            ]
        },
      {
        id: 'solarData',
        title: 'Solar roof - an alternative to the grid',
        image: 'images/Renewable.jpg',
        description: 'The solar roof has a lot of potential to increase renewable energy production in Texas.  The technology is very mature and is easy to access. It is the first choice for private homeowners. The Shining Cities Report 2020 suggested that Houston has the second-biggest urban solar rooftop capacity in the US with 4,600 potential megawatts to generate. Based on the data from <a href="https://www.eia.gov/electricity/sales_revenue_price/pdf/table5_a.pdf">EIA</a>, the average daily Texan household energy consumption is 37.7 kWh, which is  4,600 megawatts is enough to power 2.9 million households if adequate storage is employed. Over the long run, renewable energy provides a good return on investment. Not only can it reduce the energy bills for homeowners, but it can also generate profit by selling part of the energy back to the grid. Another way to be a part of the renewable energy network is to join community solar groups, where energy resources are shared within the community. This is an alternative solution to homeowners whose roof is not suitable for installing solar panels. Tori sees a bigger picture of the future of energy. She said “solar is the most democratic form of energy we have, and we should all have a right to own a piece of the sun”. Matt Dulin from Rice University also agrees that solar roofs “offer a kind of "energy independence" for the homeowner who may not want to be reliant on the energy grid, which has been known to fail during weather disasters”, which is what Texans need.',
        location: {
            center: [-95.5, 29.8],
            zoom: 11,
            pitch: 40,
            bearing: 30
        },
        onChapterEnter: [
            {
                layer: 'solarData',
                opacity: 1
            }
        ],
        onChapterExit: [
            {
                layer: 'solarData',
                opacity: 0
            }
        ]
      },
    ]
};



