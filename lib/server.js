require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const UserController = require("./../lib/controllers/userController");
const RewardsController = require("./../lib/controllers/rewardsController");

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

  const newUser = UserController.createUser(user);
  if(typeof newUser == "object")
    newUser.id = user.id;
  return res.json(newUser);
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

app.post("/rewards/create", async (req,res) => {
  const reward = RewardsController.createReward(req.body);
  const message = "Recompensa Creado.";
  await prisma.rewards.create({data: reward});
  return res.json({message});
});

app.post("/rewards", async (req, res) => {
  const id = parseInt(req.body.id);
  const reward = await prisma.rewards.findUnique({where: {id: id}});

  if(reward == null){
    return res.json({message: "Error: user not found"});
  }

  const newReward = RewardsController.createReward(reward);

  return res.json(newReward);
})

app.post("/rewards/all", async (req, res) => {
  const id = parseInt(req.body.id);
  const reward = await prisma.rewards.findMany({});

  if(reward == null){
    return res.json({message: "Error: rewards not found"});
  }

  return res.json(reward);
})
app.post("/tasks/all", async (req, res) => {
  const id = parseInt(req.body.id);
  const task = await prisma.task.findMany({});

  if(task == null){
    return res.json({message: "Error: tasks not found"});
  }

  return res.json(task);
})




app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});