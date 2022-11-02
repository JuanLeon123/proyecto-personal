const express = require('express');
const router = express.Router();
router.post('/', () => {
    console.log('Creando Usuario...')
})
module.exports = router;