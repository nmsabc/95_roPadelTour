const express = require("express");
const app = express();

app.use(express.json());

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


