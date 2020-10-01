const express = require("express");
const app = express();

let port = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index", {
    title: "TodoList - Vuejs"
  })
});

app.listen(port, () => console.log(`Listening to port ${port}`));
