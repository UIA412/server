/**
 *  ----- Team VIR - ŊUSĒ -----
 * 
 *  Developed By Kashif Raza
 *  Github: https://github.com/kashif-raza2019
 *  Contact: kashifraza.tech@gmail.com
 */

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

/*
    --- Hourly Data in Building Schema Example ---
    hourly_data: [
        {   
            timestamp: '2020-01-01 00:00:00',
            month: 'January',
            year: 2020,
            temperature: 32,
            roof_material: 'asphalt',
            roof_color: 'black',
            roof_age: 10,
            roof_condition: 'good',
            roof_insulation: 'yes'
            electrical_consumption: 1234,
            electrical_consumption_unit: 'kWh',
            estimated_unit_savings: 324;
            estimated_money_savings: 3421;
            currency: 'RAND',
            hours_of_operation: 8,
            reflectance: 0.5,
        },
        {
            timestamp: '2020-01-01 00:00:00',
            month: 'January',
            year: 2020,
            temperature: 32,
            roof_material: 'asphalt',
            roof_color: 'green',
            roof_age: 12,
            roof_condition: 'good',
            roof_insulation: 'yes'
            electrical_consumption: 1214,
            electrical_consumption_unit: 'kWh',
            estimated_unit_savings: 324;
            estimated_money_savings: 3421;
            currency: 'INR',
            hours_of_operation: 8,
            reflectance: 0.67,
        }
    ]

*/

const Building = new mongoose.Schema({
    name: {type : String, default: "Building 1"},
    latitude: {type: String, default: ""},
    longitude:{type: String, default: ""},
    area: Number,
    measurement: String,
    orientation: String,
    roof: String,
    roof_material: String,
    hourly_data: Array,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Building', Building);