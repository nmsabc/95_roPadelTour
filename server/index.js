const express = require("express");
const app = express();

app.use(express.json());

// used to resolve the FE being blocked by CORS policy
let cors = require("cors");
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const playerRouter = require("./routes/Players");
app.use("/players", playerRouter);

const rankingRouter = require("./routes/Rankings");
app.use("/rankings", rankingRouter);

db.sequelize.sync().then(() => {
  app.listen(3213, () => {
    console.log("Server running on port 3213");
  });
});


