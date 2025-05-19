const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/users.js');
const postRoutes = require('./routes/posts.js');
const commentRoutes = require('./routes/comments.js');
const dabeiButtonRoutes = require('./routes/dabeiButton.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API ist erreichbar.");
});

// Routen einbinden
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/dabeiButtons", dabeiButtonRoutes);

// Server starten
app.listen(8800, () => {
  console.log("API Working on http://localhost:8800");
});
