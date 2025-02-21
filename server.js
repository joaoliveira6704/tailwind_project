const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "public/json", "player_card.json");

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html file for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to add a player
app.post("/addPlayer", (req, res) => {
  const player = req.body;

  // Read existing players
  let players = [];
  if (fs.existsSync(DATA_FILE)) {
    players = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  }

  // Add new player
  players.push(player);

  // Write updated players to the JSON file
  fs.writeFileSync(DATA_FILE, JSON.stringify(players, null, 2));

  res.status(200).send("Player added successfully");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
