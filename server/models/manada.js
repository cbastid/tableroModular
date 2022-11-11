const mongoose = require('mongoose')

const ManadaSchema = new mongoose.Schema({
    animalName: {type: String, require: [true, 'Nombre requerido'],},
    animalRace: {type: String, require: [true, 'Raza requerida']},
    animalAge: {type: String, require: [true, 'Edad requerida']},
})

const Manada = mongoose.model('manada', ManadaSchema)

module.exports = Manada;