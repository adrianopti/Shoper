const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const installRoute = require('./routes/install');
const authRoute = require('./routes/auth');
const settingsRoute = require('./routes/settings');

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Aplikacja Shoper — backend działa! 🚀</h1>
    <p>Twoja aplikacja jest poprawnie uruchomiona na Render.</p>
    <p>Możesz teraz tworzyć kolejne endpointy.</p>
    <p>➡ Test instalacji: <a href="/install">/install</a></p>
  `);
});

app.get("/install", (req, res) => {
  res.send(`
    <h1>Instalacja aplikacji — wersja testowa</h1>
    <p>To jest mock wersja endpointu /install.</p>
    <p>W przyszłości Shoper będzie tu przekazywał parametry sklepu.</p>
    <p>Na razie to tylko test potwierdzający, że backend reaguje prawidłowo.</p>
  `);
});


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
