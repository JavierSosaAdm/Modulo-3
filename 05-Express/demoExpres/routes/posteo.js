const express = require('express');
const routerPost = express.Router();
let info = [];

routerPost.post('/', (req, res) => {
    info.push(req.body)
    
    res.json(info)
})

module.exports = routerPost;