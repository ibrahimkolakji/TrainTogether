# TrainTogether – Social Media Sport-Community-App

## 🚀 Projektidee

TrainTogether ist eine Social-Media-Webanwendung, die Sportbegeisterte verbindet. Nutzer:innen können Trainingspartner finden, gemeinsame Sportaktivitäten planen und sich über Kommentare und Likes austauschen. Die Plattform richtet sich an alle, die Sport nicht alleine, sondern gemeinsam erleben wollen.

## 🎯 Features

- Nutzerregistrierung und Login mit Session-Handling
- Sport-Posts erstellen: z. B. „Laufen im Park, Mittwoch 18 Uhr“
- Kommentare und „Ich bin dabei“-Funktion für Posts
- Profilseiten mit eigenen Posts und Aktivitäten
- Responsive Design mit React und Bootstrap
- Backend-API mit Express und SQLite
- Sichere Passwörter durch bcrypt-Hashing

## 🏗️ Technologien

### Frontend (React)
- React (Create React App)
- React Router
- Axios (API-Requests)
- React-Bootstrap
- SCSS für Stylesheets

### Backend (Node.js / Express)
- Express
- express-session (Session-Management)
- sqlite3 (Datenbank)
- bcrypt (Passwort-Hashing)
- CORS & Cookie-Parser für Frontend-Integration

### Tools & Umgebung
- Node.js & npm
- Git & GitHub (Versionskontrolle)
- Postman (API-Testing)

## 🗂️ Projektstruktur
train-together/
├── client/ (React-Frontend)
│ ├── src/
│ │ ├── components/ (Navbar, PostCard, usw.)
│ │ ├── pages/ (Login, Register, Feed, Profile)
│ │ ├── services/ (Axios-API: login, register, posts)
│ │ └── App.js
│ ├── public/
│ └── package.json
├── server/ (Express-Backend)
│ ├── routes/ (auth, users, posts, comments)
│ ├── controllers/ (auth.js mit Login, Register, Logout)
│ ├── config/connect.js (SQLite-Datenbank)
│ ├── database.sqlite (Datenbankdatei)
│ └── index.js
├── .gitignore
├── README.md
└── package.json


## 💻 Installation & Start
### 1. Backend-Setup
```bash
cd server
npm install
2. Frontend-Setup
node index.js
cd client
npm install
npm start

3. Projekt aufrufen
Frontend: http://localhost:3000
Backend-API: http://localhost:8800/api

🔒 Authentifizierung mit express-session
Login speichert User-Session (req.session.userId)
Session-Daten werden via Cookies zwischen Frontend und Backend ausgetauscht (withCredentials: true in Axios)

🧪 API-Routen (Backend)
Route	Methode	Beschreibung
/api/auth/register	POST	Nutzer registrieren
/api/auth/login	POST	Nutzer einloggen
/api/auth/logout	POST	Session beenden
/api/posts	GET/POST	Posts abrufen/erstellen
/api/posts/:id/comments	GET/POST	Kommentare verwalten
/api/posts/:id/join	POST	Teilnahme an Post zusagen
