const express = require('express');
const { getUsersData } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/dashboard', getUsersData);

module.exports = router;
