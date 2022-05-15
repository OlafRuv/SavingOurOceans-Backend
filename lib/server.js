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

app.post("/createUser", async (req,res) => {
  const user = UserController.createUser(req.body);
  const message = "Usuario Creado.";
  await prisma.user.create({data: user});
  return res.json({message});
});
app.post("/user", async (req, res) => {
  const id = parseInt(req.body.id);
  const user = await prisma.user.findUnique({where: {id: id}});
  if(user == null){
    return res.json({message: "Error: user not found"});
  }
  return res.json(user);
})

app.put("/user/points/addPoints", async (req, res) => {
  const id = parseInt(req.body.id);
  const user = await prisma.user.findUnique({where: {id: id}});
  
  if(user == null){
    return res.json({message: "Error: user not found"});
  }

  const newUser = UserController.addPoints(user, req.body.points);

  await prisma.user.update({
    where: {id:id},
    data:{points: newUser.points}
  })
  return res.json(newUser);
})
app.put("/user/points/subtractPoints", async (req, res) => {
  const id = parseInt(req.body.id);
  const user = await prisma.user.findUnique({where: {id: id}});
  
  if(user == null){
    return res.json({message: "Error: user not found"});
  }
  
  const newUser = UserController.subtractPoints(user, req.body.points);

  await prisma.user.update({
    where: {id:id},
    data:{points: newUser.points}
  })
  return res.json(newUser);
})

app.put("/user/points", async (req, res) => {
  const id = parseInt(req.body.id);
  const user = await prisma.user.findUnique({where: {id: id}});
  
  if(user == null){
    return res.json({message: "Error: user not found"});
  }

  const newUser = UserController.getPoints(user);
  
  return res.json(newUser);
})



app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});