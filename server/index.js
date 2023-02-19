const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

// used to resolve the FE being blocked by CORS policy
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

//Comments
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const playerRouter = require("./routes/Players");
app.use("/players", playerRouter);

const rankingRouter = require("./routes/Rankings");
app.use("/rankings", rankingRouter);

const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

//weather API // 17 Feb 2023
const weatherRouter = require("./routes/OpenWeatherMap");
app.use("/weather", weatherRouter);

// Padel Padel Padel Padel Padel Padel Padel Padel Padel
// PadelEvents
const eventsRouter = require('./routes/PadelEvents');
app.use('/padel/events', eventsRouter);
// PadelChampionship
const championshipRouter = require('./routes/PadelChampionship');
app.use('/padel/championship', championshipRouter);

// Padel Padel Padel Padel Padel Padel Padel Padel Padel

db.sequelize.sync().then(() => {
  app.listen(3213, () => {
    console.log("Server running on port 3213");
  });
});


