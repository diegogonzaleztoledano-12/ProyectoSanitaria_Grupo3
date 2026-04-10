const express = require('express');
const router = express.Router();

const casseteRoutes = require('./casseteRoutes');
const muestraRoutes = require('./muestraRoutes');

router.use('/cassetes', casseteRoutes);
router.use('/muestras', muestraRoutes);

module.exports = router;