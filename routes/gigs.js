const express = require('express');
const db = require('../config/database');
const Gig = require('../models/Gig');

const router = express.Router();

router.get('/', (req, res) => {
    Gig.findAll().then(gigs => {
        console.log(gigs);
        res.sendStatus(200);
        }).catch(error => console.log(error));
});

module.exports = router;
