
const express = require("express");
const fs = require('fs');
const users = require("./Mock_Data.json");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));

//Route to get all users
app.get("/api/users/", (req, res) => {
 return res.json(users);
});

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });



// app.patch("/api/users/:id", (req, res) => {
//   //Edit or Update user
//   return res.json({status: "pending"})
// });

// app.delete("/api/users/:id", (req, res) => {
//   //Delete user with id
//   return res.json({status: "pending"})
// });
//Other method 
app.route("/api/users/:id") 
  .get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
}).patch((req, res) => {
  //edit or update user with id
  res.json({status: "pending"})
})
.delete((req, res) => {
  //Delete user with id
    res.json({status: "pending"})

});

app.post("/api/users/", (req, res) => {
  const body = req.body;
  users.push({...body, id: users.length + 1});
  fs.writeFile('./Mock_Data.json', JSON.stringify(users), (err, data) => {

 // console.log("Body", body);
  //Create user
  return res.json({status: "success", id: users.length  })
  });
});

//REST API
app.get("/users", (req,res) => {
  const html =`<ul> 
  ${users.map(user => `<li>${user.first_name} - ${user.email}</li>`).join('')}
 </ul>`;
  res.send(html);
});
//



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   );

