require('dotenv').config();

const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) =>{
  res.json({message: "Alive"});
});


// app.get("/explorers", async (req, res) => {
//   const allExplorers = await prisma.explorer.findMany({});
//   res.json(allExplorers);
// });


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});