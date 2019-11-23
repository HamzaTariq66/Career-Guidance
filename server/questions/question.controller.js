const express = require('express');
const router = express.Router();
const responseService = require('./question.service');

// routes
router.post('/create', create);
router.get('/list/:id?/', getAll);
router.get('/search/:id', getById);
router.get('/generate_test/:id?/', generate_test);
router.post('/generate_test_result', generate_test_result);
router.post('/update/:id', update);
router.delete('/delete/:id', _delete);
router.get('/test_list/', test_list);

module.exports = router;

function create(req, res, next) {
    responseService.create(req.body)
        .then((question) => res.json(question))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    let ids = (typeof req.params.id !== 'undefined') ? req.params.id : 0;
    responseService.getAll(ids)
        .then(questions => res.json(questions))
        .catch(err => next(err));
}

function getById(req, res, next) {
    responseService.getById(req.params.id)
        .then(question => question ? res.json(question) : res.sendStatus(404))
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

function generate_test(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    responseService.generate_test(req.params.id,token)
        .then(test => test ? res.json(test) : res.sendStatus(404))
        .catch(err => next(err));
}

function generate_test_result(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    responseService.generate_test_result(req.body,token)
        .then(test => test ? res.json(test) : res.sendStatus(404))
        .catch(err => next(err));
}

function test_list(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    responseService.test_list(token)
        .then(test => test ? res.json(test) : res.sendStatus(404))
        .catch(err => next(err));
}