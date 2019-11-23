const express = require('express');
const router = express.Router();
const responseService = require('./career.service');

// routes
router.post('/create', create);
router.get('/list', getAll);
router.get('/list/:id', getAll);
router.get('/:id', getById);
router.post('/update/:id', update);
router.delete('/delete/:id', _delete);

module.exports = router;

function create(req, res, next) {
    responseService.create(req.body)
        .then((career) => res.json(career))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    responseService.getAll(req.params.id)
        .then(careers => res.json(careers))
        .catch(err => next(err));
}

function getById(req, res, next) {
    responseService.getById(req.params.id)
        .then(career => career ? res.json(career) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    responseService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    responseService._delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}