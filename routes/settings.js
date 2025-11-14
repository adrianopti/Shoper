const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        popup_enabled: true,
        popup_text: "Domyślny tekst pop-upu"
    });
});

module.exports = router;
