//     Players: username, password, first name, last name, email, phone, gender, birth date, category, points, games, won games, lost games
//     Category: type of {Male 1, Male 2, Male, 3, Female 1, Female 2, Female 3, Mixt 1, Mixt 2, Mixt 3}
//     User Type: type of {player, manager, administrator, editor, sponsor} linked to the username
//     Sponsor: full Name, contact person, list of events sponsored
//     Teams: player 1, player 2, type of {men, women, mixt}, category
//     Games: game date, duration, score, winner team, team 1, team 2, score table

//     Events: type of {Training, Simple Tournament, Championship}
//     Championships containing games in elimination mode until the final: name, gender, category, city, start date, end date, venue, prize 1st place, prize 2nd place, prize 3rd place, prize 4th place, total cost, total revenue, profit
//     Championship Score table: game, score

//     Training: trainer (linked to username), list of players(from the username), category

// Define the Player model
module.exports = (sequelize, DataTypes) => {
  // Define the Game model
  const PadelGame = sequelize.define("PadelGame", {
    gameDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    team1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    setsPlayed:{
      type: DataTypes.ENUM(
        "1",
        "2",
        "3",
      ),
      allowNull: true,
    },
    set1ScoreTeam1:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set1ScoreTeam2:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set2ScoreTeam1:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set2ScoreTeam2:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set3ScoreTeam1:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    set3ScoreTeam2:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    set_scores: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  // In this refactored model, set_scores is now of data type JSON. 
  // You can structure the data for set_scores as an object where 
  // each key represents the set number and the value 
  // is an array of scores for that set.
  // {
  //   "1": [6, 2],
  //   "2": [3, 6],
  //   "3": [7, 6]
  // }
    winnerTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "PadelTeam",
      //   key: 'id',
      // },
    },
    loserTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "PadelTeam",
      //   key: 'id',
      // },
    },
 

  });

  PadelGame.associate = (models) =>{
    PadelGame.belongsTo(models.PadelEvent, {
      foreignKey: "EventId",
      onDelete: "cascade",
    });
    PadelGame.belongsTo(models.PadelChampionship, {
      foreignKey: "ChampionshipId",
      onDelete: "cascade",
    });
    PadelGame.hasMany(models.PadelTeam, {
      foreignKey: "winnerTeam",
      as: "winningTeam",
    });
    PadelGame.hasMany(models.PadelTeam, {
      foreignKey: "loserTeam",
      as: "losingTeam",
    });
  }

  return PadelGame;
};
