require('dotenv').config();
const mongoose = require('mongoose');
// Connect with  MongoDb Atlas
const DB_URI = 'mongodb+srv://datawebapp:m5rgUw6w8HGJMJtw@web.zz78grr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;


module.exports = connection;