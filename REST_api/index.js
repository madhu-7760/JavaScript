const express = require("express");
const users = require("./Mock_Data.json");

const app = express();
const port = 3000;

//Route to get all users
app.get("/users", (req, res) => {
 return res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   );