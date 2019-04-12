const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');
require('../models/Topping');
require('../models/Burger');
require('../models/Comment');
require('../models/Order');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/MagicBurgers', {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) {
            console.log(err);
        }
        User.seedAdminUser().then(() => {
            console.log('Database ready');                
        }).catch((reason) => {
            console.log('Something went wrong');
            console.log(reason);
        });
    });

    db.on('error', reason => {
        console.log(reason);
    });
};