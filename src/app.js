const express = require('express');
const res = require('express/lib/response');
const app= express();
//const bodyParser=require('body-parser');

const musicas= require('./routes/musica.Routes');
const index= require('./routes/index')

//app.use(bodyParser.json())
app.use(express.json());

const cors=require("cors");
app.use(cors());

app.use(express.static('public'))

app.use('/',index);
app.use('/musicas', musicas);

//app.get('*',(req,res)=>{
    //res.status(404).sendFile('./views/erro.html',{root:__dirname})

//})

module.exports=app