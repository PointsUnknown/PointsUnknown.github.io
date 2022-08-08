// let topTitleDiv = "";

// let titleDiv = "";

// let bylineDiv = "";

// let descriptionDiv = "";
// let footerDiv = "";

// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 19;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
// var followZoomLevel = 14;
// var followBearing = 29;
// var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running Order total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoiaWxlbmFwIiwiYSI6ImNsNW44NjJtNDAwZ2czYm4wZXdhZTBzNjUifQ.Ye-KUj_EW3nZ5Jgb9bd_mg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'The Title Text of this Story',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    // topTitle: topTitleDiv,
    // title: titleDiv,
    // subtitle: "Sergio's Morning Commute",
    // byline: bylineDiv,
    // description: descriptionDiv,
    // footer: footerDiv,
    chapters: [
        {
            id: 'drive-slide-0',
            title: '9:05 AM | Chick-fil-A | 918 8th Ave',
            // image: 'https://freesvg.org/img/Placeholder.png',
            description: 
                '<p>Delivery pay: $3.51</p>' + 
                '<p>Mileage: $0.20 for biking 0.833 miles</p>' + 
                '<p>Tip: $2.65</p>' + '<hr>' + 
                '<p><b>Order total: $6.36</b></p>',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-01',
            title: '9:36 AM | Pick a Bagel - 8th Ave | 891 8th Ave',
            description: 
                '<p>Delivery pay: $3.75</p>' + 
                '<p>Mileage: $0.36 for biking 1.5 miles</p>' + 
                '<p>Tip: $3.59</p>' + '<hr>' + 
                '<p><b>Order total: $7.70</b></p>' + 
                '<h3>Total: $14.06</h3>',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-02',
            title: '10:11 AM | Health King | 526 Fashion Ave #1',
            image: 'images/_MG_3366.jpg',
            description: 
                '<p>Delivery pay: $2.77</p>' + 
                '<p>Mileage: $0.23 for biking 0.958 miles</p>' + 
                '<p>Tip: $2.70</p>' + '<hr>' + 
                '<p><b>Order total: $5.70</b></p>' + 
                '<h3>Total: $19.76</h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-03',
            title: "10:20 AM | Junior's Restaurant | 1515 Broadway @, W 45th St",
            image: 'images/_MG_3378.jpg',
            description: 
                '<p>Delivery pay: $2.51</p>' + 
                '<p>Mileage: $0.21 for biking 0.875 miles</p>' + 
                '<p>Tip: $10.00</p>' + '<hr>' + 
                '<p><b>Order total: $12.72</b></p>' + 
                '<h3>Total: $32.48</h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-04',
            title: '10:55 AM | Juice Generation | 979 8th Ave',
            description: 
                '<p>Delivery pay: $2.89</p>' + 
                '<p>Mileage: $0.11 for biking 0.458 miles</p>' + 
                '<p>Tip: $2.12</p>' + '<hr>' + 
                '<p><b>Order total: $5.12</b></p>' + 
                '<h3>Total: $37.60</h3>',    
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-05',
            title: '11:00 AM | Le Pain Quotidien | 250 W 55th Street',
            image: 'images/_MG_3343.jpg',
            description: 
                '<p>Delivery pay: $2.14</p>' + 
                '<p>Mileage: $0.16 for biking 0.667 miles</p>' + 
                '<p>Tip: $5.53</p>' + '<hr>' + 
                '<p><b>Order total: $7.83</b></p>' + 
                '<h3>Total: $45.43</h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in the middle of the drive slides to take a break
        // {
        //     id: 'slide-4',
        //     title: 'Second Title',
        //     image: 'https://freesvg.org/img/Placeholder.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'drive-slide-06',
            title: '11:18 AM | Joe & The Juice | 801 Lexington Ave',
            description: 
                '<p>Delivery pay: $1.85</p>' + 
                '<p>Mileage: $0.15 for biking 0.625 miles</p>' + 
                '<p>Tip: $5.27</p>' + '<hr>' + 
                '<p><b>Order total: $7.27</b></p>' + 
                '<h3>Total: $52.70</h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-07',
            title: '11:27 AM | Americas Burgers And Wraps | 1159 3rd Ave #6067',
            description: 
                '<p>Delivery pay: $2.63</p>' + 
                '<p>Mileage: $0.37 for biking 1.542 miles</p>' + 
                '<p>Tip: $4.29</p>' + '<hr>' + 
                '<p><b>Order total: $7.29</b></p>' + 
                '<h3>Total: $59.99</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-08',
            title: '12:00 PM | Saar Indian Bistro | 241 W 51st Street',
            description: 
                '<p>Delivery pay: $2.79</p>' + 
                '<p>Mileage: $0.1 for biking 0.875 miles</p>' + 
                '<p>Tip: $4.81</p>' + '<hr>' + 
                '<p><b>Order total: $7.81</b></p>' + 
                '<h3>Total: $67.80</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-09',
            title: '12:15 PM | Vegan On The Fly | 24 W 45th Street',
            description: 
                '<p>Delivery pay: $2.81</p>' + 
                '<p>Mileage: $0.19 for biking 0.792 miles</p>' + 
                '<p>Tip: $4.47</p>' + '<hr>' + 
                '<p><b>Order total: $7.47</b></p>' + 
                '<h3>Total: $75.27</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-10',
            title: '12:33 PM | Panera Bread | 452 5th Ave',
            description: 
                '<p>Delivery pay: $2.92</p>' + 
                '<p>Mileage: $0.28 for biking 1.167 miles</p>' + 
                '<p>Tip: $3.69</p>' + '<hr>' + 
                '<p><b>Order total: $6.89</b></p>' + 
                '<h3>Total: $82.16</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-11',
            title: '12:46 PM | Cafe 37 | 47 W 37th St',
            image: 'images/_MG_3409.jpg',
            description: 
                '<p>Delivery pay: $2.79</p>' + 
                '<p>Mileage: $0.26 for biking 1.083 miles</p>' + 
                '<p>Tip: $3.15</p>' + '<hr>' + 
                '<p><b>Order total: $6.20</b></p>' + 
                '<h3>Total: $88.36</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-12',
            title: "1:07 PM | Capriotti's Sandwich Shop | 300 E 61st Street",
            description: 
                '<p>Delivery pay: $2.81</p>' + 
                '<p>Mileage: $0.19 for biking 0.792 miles</p>' + 
                '<p>Tip: $6.76</p>' + '<hr>' + 
                '<p><b>Order total: $9.76</b></p>' + 
                '<h3>Total: $94.72</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-13',
            title: '1:19 PM	| Veritable | 1201 2nd Ave',
            description: 
                '<p>Delivery pay: $2.57</p>' + 
                '<p>Mileage: $0.35 for biking 1.458 miles</p>' + 
                '<p>Tip: $5.26</p>' + '<hr>' + 
                '<p><b>Order total: $8.18</b></p>' + 
                '<h3>Total: $102.85</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-14',
            title: '1:39 PM | Taco Bell | 840 8th Ave',
            description: 
                '<p>Delivery pay: $2.80</p>' + 
                '<p>Mileage: $0.20 for biking 0.833 miles</p>' + 
                '<p>Tip: $2.64</p>' + '<hr>' + 
                '<p><b>Order total: $5.64</b></p>' + 
                '<h3>Total: $108.49</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-15',
            title: "1:53 PM | Emack & Bolio's | 1564 1st Ave",
            description: 
                '<p>Delivery pay: $1.80</p>' + 
                '<p>Mileage: $0.20 for biking 0.833 miles</p>' + 
                '<p>Tip: $5.00</p>' + '<hr>' + 
                '<p><b>Order total: $7.00</b></p>' + 
                '<h3>Total: $115.49</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-16',
            title: '2:03 PM | Milano Market | 1582 3rd Ave',
            description: 
                '<p>Delivery pay: $1.86</p>' + 
                '<p>Mileage: $0.14 for biking 0.583 miles</p>' + 
                '<p>Tip: $4.55</p>' + '<hr>' + 
                '<p><b>Order total: $6.55</b></p>' + 
                '<h3>Total: $122.04</h3>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-17',
            title: '2:09 PM | Milano Market | 1582 3rd Ave',
            description: 
                '<p>Delivery pay: $2.87</p>' + 
                '<p>Mileage: $0.13 for biking 0.542 miles</p>' + 
                '<p>Tip: $5.00</p>' + '<hr>' + 
                '<p><b>Order total: $8.00</b></p>' + 
                '<h3>Total: $130.04</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-18',
            title: '2:34 PM | SUBWAY® | 52 Vanderbilt Ave',
            description: 
                '<p>Delivery pay: $2.90</p>' + 
                '<p>Mileage: $0.10 for biking 0.417 miles</p>' + 
                '<p>Tip: $5.00</p>' + '<hr>' + 
                '<p><b>Order total: $8.00</b></p>' + 
                '<h3>Total: $138.04</h3>',            
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-19',
            title: '2:38 PM | Green Bean Cafe | 1413 York Ave',
            description: 
                '<p>Delivery pay: $1.95</p>' + 
                '<p>Mileage: $0.05 for biking 0.208 miles</p>' + 
                '<p>Tip: $4.00</p>' + '<hr>' + 
                '<p><b>Order total: $6.00</b></p>' + 
                '<h3>Total: $144.04</h3>',           
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
