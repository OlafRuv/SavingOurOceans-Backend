require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const UserController = require("./../lib/controllers/userController");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) =>{
  res.json({message: "Alive"});
});


// app.get("/explorers", async (req, res) => {
//   const allExplorers = await prisma.explorer.findMany({});
//   res.json(allExplorers);
// });
app.post("/createUser", async (req,res) => {
  const user = UserController.createUser(req.body);
  const message = "Explorer Creado.";
  await prisma.user.create({data: user});
  return res.json({message});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});