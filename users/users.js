const router = require('express').Router();

const user = require('./users-module');
const restrict = require('../auth/restricted');

router.get('/', restricted, (req, res) => {
user.find()
    .then(data => {
    res.json(data);
    })
    .catch(err => res.send(err));
});

module.exports = router;
