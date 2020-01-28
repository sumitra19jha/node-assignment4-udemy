const express = require('express');
const router = express.Router();

const formData = require('./form');

router.get('/users', (req, res, next) => {
    const users = formData.data;
    res.render('user', {
        users: users,
        pageTitle: 'Users'
    });
});

exports.routes = router;