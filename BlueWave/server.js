require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// =========================
// Instellingen
// =========================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =========================
// Routes
// =========================

// Homepagina
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Login
app.get("/login", (req, res) => {
    res.render("login");
});

// Dashboard
app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

// Admin
app.get("/admin", (req, res) => {
    res.render("admin");
});

// Developer
app.get("/developer", (req, res) => {
    res.render("developer");
});

// Orders
app.get("/orders", (req, res) => {
    res.render("orders");
});

// Users
app.get("/users", (req, res) => {
    res.render("users");
});

// Tickets
app.get("/tickets", (req, res) => {
    res.render("tickets");
});

// Nieuws
app.get("/news", (req, res) => {
    res.render("news");
});

// Settings
app.get("/settings", (req, res) => {
    res.render("settings");
});

// =========================
// 404
// =========================

app.use((req, res) => {
    res.status(404).render("404");
});

// =========================
// Server starten
// =========================

app.listen(PORT, () => {

    console.log("");
    console.log("==================================");
    console.log(" BlueWave Website Gestart");
    console.log("==================================");
    console.log("");
    console.log(`Website: http://localhost:${PORT}`);
    console.log("");

});