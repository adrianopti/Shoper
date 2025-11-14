const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { shop, code } = req.query;
    console.log("📥 Instalacja ze sklepu:", shop);

    res.redirect(`/auth?shop=${shop}&code=${code}`);
});

module.exports = router;
