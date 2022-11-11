const mongoose = require('mongoose')
const { Router } = require('express')

const router = Router()
const { manadaGet, registerGet, detalleGet, editarGet, destruirGet, registerPost, editarPost, editarPost2 } = require('../controllers/quotes')

router.get('/', manadaGet)

router.get('/register', registerGet)

router.get('/detalle/:id', detalleGet)

router.get('/editar/:id', editarGet)

router.post('/editar/:id', editarPost)

router.get('/destruir/:id', destruirGet)

router.post('/editar', editarPost2)

router.post('/register', registerPost)

module.exports = router;