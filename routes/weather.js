const router = require('express').Router();
const axios = require('axios');

const weather = [
    {
        "datetime": "00:00:00",
        "datetimeEpoch": 1669141800,
        "temp": 62.5,
        "feelslike": 62.5,
        "humidity": 55.39,
        "dew": 46.3,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 4.3,
        "windspeed": 0,
        "winddir": 0,
        "pressure": 1015,
        "visibility": 1.9,
        "cloudcover": 0,
        "solarradiation": 0,
        "solarenergy": null,
        "uvindex": 0,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-night",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "03:00:00",
        "datetimeEpoch": 1669152600,
        "temp": 58.9,
        "feelslike": 58.9,
        "humidity": 58.78,
        "dew": 44.5,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 7.4,
        "windspeed": 0,
        "winddir": 0,
        "pressure": 1014,
        "visibility": 1.9,
        "cloudcover": 0,
        "solarradiation": 0,
        "solarenergy": null,
        "uvindex": 0,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-night",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "06:00:00",
        "datetimeEpoch": 1669163400,
        "temp": 55.3,
        "feelslike": 55.3,
        "humidity": 66.92,
        "dew": 44.5,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 8.7,
        "windspeed": 0,
        "winddir": 0,
        "pressure": 1014,
        "visibility": 1.2,
        "cloudcover": 0,
        "solarradiation": 0,
        "solarenergy": null,
        "uvindex": 0,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-night",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "09:00:00",
        "datetimeEpoch": 1669174200,
        "temp": 62.5,
        "feelslike": 62.5,
        "humidity": 51.73,
        "dew": 44.5,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 10.3,
        "windspeed": 5.8,
        "winddir": 260,
        "pressure": 1017,
        "visibility": 1.2,
        "cloudcover": 0,
        "solarradiation": 152,
        "solarenergy": 0.5,
        "uvindex": 2,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-day",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "12:00:00",
        "datetimeEpoch": 1669185000,
        "temp": 75.1,
        "feelslike": 75.1,
        "humidity": 29.25,
        "dew": 40.9,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 11.9,
        "windspeed": 10.3,
        "winddir": 270,
        "pressure": 1015,
        "visibility": 2.5,
        "cloudcover": 0,
        "solarradiation": 603,
        "solarenergy": 2.2,
        "uvindex": 6,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-day",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "15:00:00",
        "datetimeEpoch": 1669195800,
        "temp": 78.7,
        "feelslike": 78.7,
        "humidity": 22.56,
        "dew": 37.3,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 10.5,
        "windspeed": 8.1,
        "winddir": 290,
        "pressure": 1013,
        "visibility": 2.5,
        "cloudcover": 0,
        "solarradiation": 522,
        "solarenergy": 1.9,
        "uvindex": 5,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-day",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "18:00:00",
        "datetimeEpoch": 1669206600,
        "temp": 69.7,
        "feelslike": 69.7,
        "humidity": 35.1,
        "dew": 40.9,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 9.4,
        "windspeed": 3.4,
        "winddir": 250,
        "pressure": 1014,
        "visibility": 1.9,
        "cloudcover": 0,
        "solarradiation": 32,
        "solarenergy": 0.1,
        "uvindex": 0,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-night",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    },
    {
        "datetime": "21:00:00",
        "datetimeEpoch": 1669217400,
        "temp": 64.3,
        "feelslike": 64.3,
        "humidity": 42.3,
        "dew": 40.9,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 8.5,
        "windspeed": 4.7,
        "winddir": 250,
        "pressure": 1015,
        "visibility": 1.9,
        "cloudcover": 0,
        "solarradiation": 0,
        "solarenergy": null,
        "uvindex": 0,
        "severerisk": 10,
        "conditions": "Clear",
        "icon": "clear-night",
        "stations": [
            "VIDP"
        ],
        "source": "obs"
    }
];


const results = [
    {
        "address_components": [
            {
                "long_name": "FF6X+QG",
                "short_name": "FF6X+QG",
                "types": [
                    "plus_code"
                ]
            },
            {
                "long_name": "Greater Noida",
                "short_name": "Greater Noida",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Gautam Buddh Nagar",
                "short_name": "Gautam Buddh Nagar",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "FF6X+QG Greater Noida, Uttar Pradesh, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.462,
                    "lng": 77.49887500000001
                },
                "southwest": {
                    "lat": 28.461875,
                    "lng": 77.49875
                }
            },
            "location": {
                "lat": 28.4619594,
                "lng": 77.49886939999999
            },
            "location_type": "GEOMETRIC_CENTER",
            "viewport": {
                "northeast": {
                    "lat": 28.4632864802915,
                    "lng": 77.50016148029152
                },
                "southwest": {
                    "lat": 28.4605885197085,
                    "lng": 77.4974635197085
                }
            }
        },
        "place_id": "GhIJbBSj-EJ2PEARaH7ree1fU0A",
        "plus_code": {
            "compound_code": "FF6X+QG Greater Noida, Uttar Pradesh, India",
            "global_code": "7JWVFF6X+QG"
        },
        "types": [
            "plus_code"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "Unnamed Road",
                "short_name": "Unnamed Road",
                "types": [
                    "route"
                ]
            },
            {
                "long_name": "Knowledge Park II",
                "short_name": "Knowledge Park II",
                "types": [
                    "political",
                    "sublocality",
                    "sublocality_level_1"
                ]
            },
            {
                "long_name": "Greater Noida",
                "short_name": "Greater Noida",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Gautam Buddh Nagar",
                "short_name": "Gautam Buddh Nagar",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            },
            {
                "long_name": "201310",
                "short_name": "201310",
                "types": [
                    "postal_code"
                ]
            }
        ],
        "formatted_address": "Unnamed Road, Knowledge Park II, Greater Noida, Uttar Pradesh 201310, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.4623534,
                    "lng": 77.49911370000001
                },
                "southwest": {
                    "lat": 28.4619989,
                    "lng": 77.49861460000001
                }
            },
            "location": {
                "lat": 28.4621762,
                "lng": 77.49886409999999
            },
            "location_type": "GEOMETRIC_CENTER",
            "viewport": {
                "northeast": {
                    "lat": 28.4635251302915,
                    "lng": 77.50021313029153
                },
                "southwest": {
                    "lat": 28.4608271697085,
                    "lng": 77.49751516970852
                }
            }
        },
        "place_id": "ChIJ1fdKy97BDDkR-Dd5QO81rTU",
        "types": [
            "route"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "Knowledge Park II",
                "short_name": "Knowledge Park II",
                "types": [
                    "political",
                    "sublocality",
                    "sublocality_level_1"
                ]
            },
            {
                "long_name": "Greater Noida",
                "short_name": "Greater Noida",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Gautam Buddh Nagar",
                "short_name": "Gautam Buddh Nagar",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            },
            {
                "long_name": "201310",
                "short_name": "201310",
                "types": [
                    "postal_code"
                ]
            }
        ],
        "formatted_address": "Knowledge Park II, Greater Noida, Uttar Pradesh 201310, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.4782901,
                    "lng": 77.504875
                },
                "southwest": {
                    "lat": 28.452599,
                    "lng": 77.48773299999999
                }
            },
            "location": {
                "lat": 28.4609559,
                "lng": 77.49693789999999
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 28.4782901,
                    "lng": 77.504875
                },
                "southwest": {
                    "lat": 28.452599,
                    "lng": 77.48773299999999
                }
            }
        },
        "place_id": "ChIJTcrI9t3BDDkR-L9WWwoYzTk",
        "types": [
            "political",
            "sublocality",
            "sublocality_level_1"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "201310",
                "short_name": "201310",
                "types": [
                    "postal_code"
                ]
            },
            {
                "long_name": "Noida",
                "short_name": "Noida",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Noida, 201310, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.5130029,
                    "lng": 77.61479949999999
                },
                "southwest": {
                    "lat": 28.398169,
                    "lng": 77.41500140000001
                }
            },
            "location": {
                "lat": 28.4552521,
                "lng": 77.5046101
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 28.5130029,
                    "lng": 77.61479949999999
                },
                "southwest": {
                    "lat": 28.398169,
                    "lng": 77.41500140000001
                }
            }
        },
        "place_id": "ChIJbfmF2trBDDkRH9BeoK1A2GQ",
        "types": [
            "postal_code"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "Greater Noida",
                "short_name": "Greater Noida",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Gautam Buddh Nagar",
                "short_name": "Gautam Buddh Nagar",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Greater Noida, Uttar Pradesh, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.617099,
                    "lng": 77.61943819999999
                },
                "southwest": {
                    "lat": 28.3796206,
                    "lng": 77.41255290000001
                }
            },
            "location": {
                "lat": 28.4743879,
                "lng": 77.50399039999999
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 28.617099,
                    "lng": 77.61943819999999
                },
                "southwest": {
                    "lat": 28.3796206,
                    "lng": 77.41255290000001
                }
            }
        },
        "place_id": "ChIJ75r4uGTqDDkRLpYXU7vKDOw",
        "types": [
            "locality",
            "political"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "Gautambudhnagar",
                "short_name": "Gautambudhnagar",
                "types": [
                    "administrative_area_level_4",
                    "political"
                ]
            },
            {
                "long_name": "Gautam Buddh Nagar",
                "short_name": "Gautam Buddh Nagar",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Gautambudhnagar, Uttar Pradesh, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.5401576,
                    "lng": 77.7379186
                },
                "southwest": {
                    "lat": 28.2473836,
                    "lng": 77.3528187
                }
            },
            "location": {
                "lat": 28.3937706,
                "lng": 77.5453686
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 28.5401576,
                    "lng": 77.7379186
                },
                "southwest": {
                    "lat": 28.2473836,
                    "lng": 77.3528187
                }
            }
        },
        "place_id": "ChIJkW7q2rvADDkRn7PQcu2ahvA",
        "types": [
            "administrative_area_level_4",
            "political"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "Gautam Buddh Nagar",
                "short_name": "Gautam Buddh Nagar",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Gautam Buddh Nagar, Uttar Pradesh, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 28.6544428,
                    "lng": 77.7379186
                },
                "southwest": {
                    "lat": 28.0851174,
                    "lng": 77.29709430000001
                }
            },
            "location": {
                "lat": 28.338333,
                "lng": 77.6077865
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 28.6544428,
                    "lng": 77.7379186
                },
                "southwest": {
                    "lat": 28.0851174,
                    "lng": 77.29709430000001
                }
            }
        },
        "place_id": "ChIJZc0VBFPkDDkRaCE3BhJhWPQ",
        "types": [
            "administrative_area_level_3",
            "political"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "Uttar Pradesh",
                "short_name": "UP",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Uttar Pradesh, India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 30.4062757,
                    "lng": 84.63466009999999
                },
                "southwest": {
                    "lat": 23.8701098,
                    "lng": 77.0839482
                }
            },
            "location": {
                "lat": 27.1381928,
                "lng": 80.8593042
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 30.4062757,
                    "lng": 84.63466009999999
                },
                "southwest": {
                    "lat": 23.8701098,
                    "lng": 77.0839482
                }
            }
        },
        "place_id": "ChIJ0wlKe59OmTkRnSQXNm1HpfY",
        "types": [
            "administrative_area_level_1",
            "political"
        ]
    },
    {
        "address_components": [
            {
                "long_name": "India",
                "short_name": "IN",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "India",
        "geometry": {
            "bounds": {
                "northeast": {
                    "lat": 35.6745457,
                    "lng": 97.39535869999999
                },
                "southwest": {
                    "lat": 6.4626999,
                    "lng": 68.1097
                }
            },
            "location": {
                "lat": 20.593684,
                "lng": 78.96288
            },
            "location_type": "APPROXIMATE",
            "viewport": {
                "northeast": {
                    "lat": 35.6745457,
                    "lng": 97.39535869999999
                },
                "southwest": {
                    "lat": 6.4626999,
                    "lng": 68.1097
                }
            }
        },
        "place_id": "ChIJkbeSa_BfYzARphNChaFPjNc",
        "types": [
            "country",
            "political"
        ]
    }
];



router.get('/getLocation', (req, res) => {
    console.log(req.query.latitude + ' <---> ' + req.query.longitude)
    res.json(weather);
});

router.get('/getAddress', async (req, res) => {
    // const latitude = req.query.latitude;
    // const longitude = req.query.longitude;
    // console.log(latitude + ' <---> ' + longitude);
    // const URL = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBW5ezxxrJqLOOZryhdRU6fprDGoy7Qdqw&latlng=`+latitude+`,`+longitude;
    // const response = await axios.get(URL);
    // if(response){
    //     console.log(response.data.results);
    //     res.json(response.data);
    // }
    res.json({address: results});
});


module.exports = router;