const express = require('express');;
const router = express.Router();
const Building = require('../models/building');

router.get('/', (req, res) => {
    res.send("<h2 style='text-align: center; margin: auto; padding-top: 30px; font-family: sans'>Server is Working.... </h2>");
});

router.get('/api/reflectancedata', (req, res) => {
    const data = {
        "reflectanceData":[
            [50, 45, 70, 280, 75, 60, 100, 202],
            [50,60, 75,80, 85, 75, 47, 60, 70, 85, 85],
            [null, 76]
        ]
    };
    console.log(data);
    res.json(data);
});

router.get('/api/coolingload', (req, res) => {
    const coolingLoad = {
        "coolingLoad": 216,
        "unit": "kW",
        "time" : [10.6, 15.3, 21.7, 13.2, 23.4, 43.1, 61.9 ,21.6]
    };
    res.json(coolingLoad);
});

router.get('/api/savings', (req, res) => {
    const savings = {
            "savings": 156.6,
            "unit": "kW",
            "time" : [80.3, 67.6, 42.1, 72.2, 82.8, 76.3, 56.3, 84.28],
            "savingsAmount": 1124,
            "currency": "USD",
            "unitPrice": 0.5
    };
    res.json(savings);
});

router.get('/api/rooftophealth', (req, res) => {
    const rooftopHealth = {
        // health[0] --> Good, health[1] -->degraded
        "health": [52.5, 47.5],
        "degraded": 52.5,
        "unit": "%",
    };
    res.json(rooftopHealth);
});

router.get('/api/buildings', (req, res) => {
    const buildings = {
        "buildings": [
             {
                "id": 1,
                "name": "Building 1",
             }
        ]
    };
    res.json(buildings);
});

router.get('/api/notifications', (req, res) => {
    const notifications = {
        "notifications": [
            {
                "id": 1,
                "message": "Notification 1",
                "time": "2021-05-28T17:00:00.000Z",
                "read": false
            },
            {
                "id": 2,
                "message": "Notification 2",
                "time": "2021-05-28T17:00:00.000Z",
                "read": false
            },
            {
                "id": 3,
                "message": "Notification 3",
                "time": "2021-05-28T17:00:00.000Z",
                "read": false
            },
            {
                "id": 4,
                "message": "Notification 4",
                "time": "2021-05-28T17:00:00.000Z",
                "read": false
            },
        ]
    };
    res.json(notifications);
});

router.get('/api/rooftopReportTable', (req, res)=>{
    const health = [
        {
            "id": 1,
            "name": "Building 1",
            "avgReflectance": 0.52,
            "avgCoolingLoad": 216.6,
            "unit": "kW",
            "atTemp": 25,
            "tempUnit": "C",
            "SRI": 53,
            "Area (in sq. meter)": 1100,
            "savings": 1124,
            "unit": "KWh",
        }
    ]
    res.json(health);
});

router.get('/map', (req, res) => {
    res.render('map');
})

const data = [];


router.post('/save-area', async (req, res)=>{
    const area = req.body.area;
    const data = await Building.findById('637f6c07cd78bb26c018b2eb');
    if(data){
        data.area = area;
        await data.save();
    }
    res.render('save-area');
});


router.get('/area', async (req, res)=>{
    const data = await Building.findById('637f6c07cd78bb26c018b2eb');
    if(data){
        res.json(data);
    }else{
        res.json({error});
    }
});

router.get('/save-data/', (req, res) => {
    data.push(req.body);
    res.render('openingPage');
})

let location = "";

router.post('/locationdata', async(req, res) => {
    const name = req.body.name;
    console.log(req.body.name);
    console.log(name);
    const saveData = await Building.findById('637f6c07cd78bb26c018b2eb');
    saveData.name = name;
    const saved = await saveData.save();
    if(saved){
        res.redirect('http://localhost:3000/select-area');
    }else{
        console.log("Error");
    }
});

router.get('/locationdata', async (req, res) => {
    const data = await Building.findById('637f6c07cd78bb26c018b2eb');
    if(data.length > 0) {
        res.json(data);
    }
    res.json(location);
});






module.exports = router;