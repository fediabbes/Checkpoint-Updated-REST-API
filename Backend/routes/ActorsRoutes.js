
const express = require('express')
const ActorsRoutes = express.Router()
const { AddActor, GetAllActors, DeleteActor, UpdateActor, GetOneActor } = require('../controllers/ActorsControllers')

ActorsRoutes.post('/addActor', AddActor)
ActorsRoutes.get('/', GetAllActors)
//req.params.id
ActorsRoutes.delete('/:id', DeleteActor)
//req.params.id
//req.body
ActorsRoutes.put('/:id', UpdateActor)
//GetOneActor 
ActorsRoutes.get('/:id', GetOneActor)
module.exports = ActorsRoutes