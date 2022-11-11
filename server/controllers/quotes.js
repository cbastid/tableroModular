const Manada = require('../models/manada')

const manadaGet = (req, res) => { 
    
    Manada.find({})
    .then(manada => {
        res.render("index",{infoAnimales: manada})
        // lógica con otros resultados
    })
    .catch(err => res.json(err));
            
}

const registerGet = (req, res) => {

    res.render('register', {mensaje: " "})
}

const detalleGet = (req, res) => {
    
    Manada.findOne({_id: req.params.id})
    .then(manada => {
        res.render("detalle",{infoAnimales: manada})
        // lógica con otros resultados
    })
    .catch(err => res.json(err));
            
}

const editarGet = (req, res) => {
    
    Manada.findOne({_id: req.params.id})
    .then(manada => {
        res.render("editar",{infoAnimales: manada})
       
    })
    .catch(err => res.json(err));
            
}

const editarPost = (req, res) => {

    Manada.updateOne({_id: req.params.id},req.body)
    .then(manada => {
        res.redirect("/")
        
    })
    .catch(err => res.json(err));
            
}

const destruirGet = (req, res) => {
    
    Manada.deleteOne({_id: req.params.id})
    .then(manada => {
        res.redirect("/")
    })
    .catch(err => res.json(err));
            
}

const editarPost2 = function(req, res) {

}

const registerPost = function(req, res) {
    console.log(req.body)
    const { animalName, animalRace, animalAge } = req.body
    const manada = new Manada()
    manada.animalName = animalName
    manada.animalRace = animalRace 
    manada.animalAge = animalAge
    manada.save()
    .then(
        () => res.render('register',{mensaje: "agregado con exito"})
    )
    .catch (
        (error) =>{ console.log(error)
        },    
    )
}

module.exports={manadaGet, registerGet, detalleGet, editarGet, editarPost, destruirGet, editarPost2, registerPost}