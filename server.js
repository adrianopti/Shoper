const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const installRoute = require('./routes/install');
const authRoute = require('./routes/auth');
const settingsRoute = require('./routes/settings');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test endpoint
app.get("/", (req, res) => {
    res.send("Shoper backend działa 🚀");
});

// public assets (main.js)
app.use('/public', express.static(path.join(__dirname, 'public')));

// routes
app.use('/install', installRoute);
app.use('/auth', authRoute);
app.use('/settings', settingsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend działa na porcie", PORT));
