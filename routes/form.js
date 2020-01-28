const path = require('path');
const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next)=> {
    res.render('form', {
        pageTitle: 'Form'
    });
});

router.post('/', (req, res, next)=> {
    users.push({userName: req.body.title});
    res.redirect('/users');
});

exports.routes = router;
exports.data = users;
