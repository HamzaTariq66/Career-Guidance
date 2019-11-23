const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/list', getAll);
router.get('/:id', getById);
router.post('/update/:id', update);

module.exports = router;

function authenticate(req, res, next) {
    adminService.authenticate(req.body)
        .then(admin => admin ? res.json(admin) : res.status(400).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    adminService.create(req.body)
        .then((admin) => res.json(admin))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    adminService.getAll()
        .then(admins => res.json(admins))
        .catch(err => next(err));
}

function getById(req, res, next) {
    adminService.getById(req.params.id)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    adminService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}