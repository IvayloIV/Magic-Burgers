const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const toppingRoutes = require('./routes/topping');
const burgerRoutes = require('./routes/burger');
const commentRoutes = require('./routes/comment');
const orderRoutes = require('./routes/order');
require('./database/database')();
const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/user', userRoutes);
app.use('/topping', toppingRoutes);
app.use('/burger', burgerRoutes);
app.use('/comment', commentRoutes);
app.use('/order', orderRoutes);

// General error handling
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ success: false, message: message });
    next();
})

app.listen(port, () => { console.log(`REST API listening on port: ${port}`) });