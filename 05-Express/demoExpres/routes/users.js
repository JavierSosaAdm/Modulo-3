
const express = require('express');
const routerGet = express.Router();

routerGet.get('/users', (req, res) => {
    // console.log(req.query)
    const {name} = req.query;
    if (name) {
        res.send('llego la query')
    } else {
        res.send('no hay query, pero esta doto ok')
    }
})

module.exports = routerGet;