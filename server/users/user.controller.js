const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/login', login);
router.post('/contact', contact);
router.post('/register', register);
router.get('/list', getAll);
router.get('/:id', getById);
router.post('/update/:id', update);

module.exports = router;

function login(req, res, next) {
    userService.login(req.body)
        .then(admin => admin ? res.json(admin) : res.status(400).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
}

function contact(req, res, next) {
    userService.contact(req.body)
        .then((contact) => res.json(contact))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then((admin) => res.json(admin))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(admins => res.json(admins))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}