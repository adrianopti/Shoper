const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// route modules (na przyszłość — działają tylko jeśli istnieją pliki)
const installRoute = require('./routes/install');
const authRoute = require('./routes/auth');
const settingsRoute = require('./routes/settings');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// public assets (np. public/main.js)
app.use('/public', express.static(path.join(__dirname, 'public')));


// ========= STRONA GŁÓWNA =========
app.get("/", (req, res) => {
  res.send(`
    <h1>Aplikacja Shoper — backend działa! 🚀</h1>
    <p>Twoja aplikacja jest poprawnie uruchomiona na Render.</p>
    <p>➡ Test instalacji: <a href="/install">/install</a></p>
    <p>➡ Panel ustawień: <a href="/settings">/settings</a></p>
  `);
});


// ========= MOCK /install =========
app.get("/install", (req, res) => {
  res.send(`
    <h1>Instalacja aplikacji — wersja testowa</h1>
    <p>To jest mock wersja endpointu /install.</p>
    <p>W przyszłości Shoper będzie tu przekazywał parametry sklepu.</p>
    <p>➡ Wróć do panelu: <a href="/">Strona główna</a></p>
  `);
});


// ========= MOCK PANEL USTAWIEŃ (/settings) =========
app.get("/settings", (req, res) => {
  res.send(`
    <h1>Ustawienia aplikacji (mock)</h1>
    <form style="display:flex;flex-direction:column;max-width:300px;gap:10px;font-family:sans-serif;">
      
      <label><strong>Tytuł dymka:</strong></label>
      <input type="text" placeholder="Znalazłeś taniej?" style="padding:8px;">

      <label><strong>Opis:</strong></label>
      <textarea placeholder="Skontaktuj się z nami – dopasujemy cenę" style="padding:8px;"></textarea>

      <label><strong>Numer telefonu:</strong></label>
      <input type="text" placeholder="+48 724 663 000" style="padding:8px;">

      <label><strong>Kolor tła:</strong></label>
      <input type="color" value="#335E2A" style="padding:4px;height:40px;">

      <label><strong>Pozycja:</strong></label>
      <select style="padding:8px;">
        <option value="top-right">Prawy górny róg</option>
        <option value="bottom-right">Prawy dolny róg</option>
      </select>

      <label><strong>Opóźnienie (ms):</strong></label>
      <input type="number" value="1500" style="padding:8px;">

      <button style="padding:10px;background:black;color:white;border:none;border-radius:4px;cursor:pointer;">
        Zapisz (mock)
      </button>

    </form>

    <p style="margin-top:20px;">
      ➡ Wróć do panelu: <a href="/">Strona główna</a>
    </p>
  `);
});


// ========= ROUTES z folderu routes/ (na przyszłość) =========
app.use('/install', installRoute);
app.use('/auth', authRoute);
app.use('/settings', settingsRoute);


// ========= START SERVERA =========
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend działa na porcie", PORT));
