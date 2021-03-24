const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');
//const pk = require('../pokedex.json').pokemon;

pokemon.post("/", (req, res, next)=>{
   
    return res.status(200).send(req.body);
});


pokemon.get('/', async (req, res, next)=>{
    const pkmn = await db.query("SELECT * FROM pokemon");
    res.status(200).json.pkmn;
   

});

pokemon.get('/:id([0-9]{1,3})', (req, res, next) =>{

    const id = req.params.id - 1;
    if(id >= 0 && id <= 150){
        res.status(200);
        res.json.pkmn[req.params.id - 1];
    }else{
        res.status(404);
        res.send("Pokemon no encontrado...");
    }

});

pokemon.get('/:name([A-Za-z]+)', (req, res, next) => {

    const name = req.params.name;
    
    
    const pkmn1 = pk.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) && p;
    
    });
   
    (pkmn1.length > 0) ? res.status(200).send(pkmn1) : res.status(404).send("Pokemon no encontrado...");
    });
    

    module.exports = pokemon;
    