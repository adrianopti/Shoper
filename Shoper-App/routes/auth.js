const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { shop, code } = req.query;

    console.log("🔑 Auth – sklep:", shop, "kod:", code);

    res.send("Aplikacja zainstalowana (test)");
});

module.exports = router;
