require('dotenv').config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const UserController = require("./../lib/controllers/userController");
const TaskController = require("./../lib/controllers/taskController");
const RewardsController = require("./../lib/controllers/rewardsController");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.get("/", (req, res) =>{
  res.json({message: "Alive"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
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




// ****************************** TASKS ********************************
app.post("/createTask", async (req,res) => {
  const task = TaskController.createTask(req.body);
  const message = "Task Creado.";
  await prisma.task.create({
    data: {
      description: task.description,
			points: task.getPoints,
			itsDone: task.getItsDone,
			itsAvailable: task.getItsAvailable,
    }
  });
  return res.json({message});
});

app.post("/getTaskbyId", async (req,res) => {
  const id = parseInt(req.body.id);
  const result = await prisma.task.findUnique({
    where: {
      id: id,
    },
  })
  if(result == null){ 
    return res.json({message: "Error: Task not found"});
  }
  else{
    const task = TaskController.createTask(result);
    return res.json({task});
  }
})

app.post('/getTaskInfo', async (req, res) => {
  const id = parseInt(req.body.id);
  const result = await prisma.task.findUnique({
    where: {
      id: id,
    },
  })
  if(result == null){ 
    return res.json({message: "Error: Task not found"});
  }
  else{
    const taskResponse = TaskController.getInfo(result);
    return res.json({taskResponse});
  }
});

app.post('/updateAvailability', async (req, res) => {
  const id = parseInt(req.body.id);
  const avStatus =  req.body.available;

  const result = await prisma.task.findUnique({ where: {id: id,},})
  if(result == null){ 
    return res.json({message: "Error: Task not found"});
  }
  else{
    const taskResponse = TaskController.updateItsAvailable(result,avStatus);
    if (typeof taskResponse != 'object'){ 
      return res.json({taskResponse}); 
    }
    else{
      const r = await prisma.task.update({
        where: {
          id: taskResponse.id
        },
        data: {
          itsAvailable: taskResponse.itsAvailable
        }
      })
      return res.json({r});
    }
  }
});

app.post('/updateItsDone', async (req, res) => {
  const id = parseInt(req.body.id);
  const doneStatus =  req.body.done;

  const result = await prisma.task.findUnique({ where: {id: id,},})
  if(result == null){ 
    return res.json({message: "Error: Task not found"});
  }
  else{
    const taskResponse = TaskController.updateItsDone(result,doneStatus);
    if (typeof taskResponse != 'object'){ 
      return res.json({taskResponse}); 
    }
    else{
      const r = await prisma.task.update({
        where: {
          id: taskResponse.id
        },
        data: {
          itsDone: taskResponse.itsDone
        }
      })
      return res.json({r});
    }
  }
});