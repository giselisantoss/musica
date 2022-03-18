const express=require('express');
const route = express.Router();
const controller = require('../controller/musicaController');

route.get('/',controller.getAll);
route.get('/:id',controller.getByID)
route.get('/musica/titulo',controller.getbyTitle)
route.post('/',controller.Postmusicas)
route.delete('/:id',controller.deleteMusica)
route.put('/:id',controller.putMusica)
route.patch('/:id' ,controller.patchMusica)


module.exports=route