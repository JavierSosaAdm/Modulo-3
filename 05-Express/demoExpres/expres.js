const express = require('express');
const routerDetail = require('./routes/detail');
const routerPost = require('./routes/posteo');
const routerGet = require('./routes/users');
const server = express();

server.use(express.json());

server.use('/posteo', routerPost)

server.use('/users', routerGet);

server.use('/home/:id', routerDetail)

server.listen(3001, () => {
    console.log('server on port 3001')
});

module.exports = express;


