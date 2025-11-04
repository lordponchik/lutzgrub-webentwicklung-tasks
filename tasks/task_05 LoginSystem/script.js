const express = require("express");
const app = express();
const path = require("path");

const ACCOUNT_FILE = path.join(__dirname, "accounts.json");

app.use(express.static("public"));

const PORT = 3123;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
