const express = require('express');
const router = express.Router();
const responseService = require('./subject.service');

// routes
router.post('/create', create);
router.get('/list', getAll);
router.get('/:id', getById);
router.post('/update/:id', update);
router.delete('/delete/:id', _delete);

module.exports = router;

function create(req, res, next) {
    responseService.create(req.body)
        .then((subject) => res.json(subject))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    responseService.getAll()
        .then(subjects => res.json(subjects))
        .catch(err => next(err));
}

function getById(req, res, next) {
    responseService.getById(req.params.id)
        .then(subject => subject ? res.json(subject) : res.sendStatus(404))
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