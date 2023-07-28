// const server = require('../expres')
const express = require('express');
const routerDetail = express.Router();


const ex = [
    {
        id: 1,
        name: 'Josefina',
        edad: '29 años'
    },
    {
        id: 2,
        name: 'Jessica',
        edad: '32 años'
    },
    {
        id: 3,
        name: 'Luli',
        edad: '30 años'
    },
    {
        id: 4,
        name: 'Lucia',
        edad: '31 años'
    },
] 

routerDetail.get('/:id', (req, res) => {
    
    const {id} = req.params;
    
    
    if (id) {
       
        const chica = ex.find(chica => chica.id === Number(id)) 
        res.json(chica)
    }
});

routerDetail.get('/', (req, res) => {
    res.json(ex)
})

module.exports = routerDetail;