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

  // Define the Team model
  const PadelTeam = sequelize.define('PadelTeam', {
    playerOne: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    playerTwo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('men', 'women', 'mixt'),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('Male 1', 'Male 2', 'Male 3', 'Female 1', 'Female 2', 'Female 3', 'Mixt 1', 'Mixt 2', 'Mixt 3'),
      allowNull: false
    },
    gamesPlayed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gamesWon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gamesLost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });

  PadelTeam.associate = (models) =>{
    PadelTeam.belongsTo(models.PadelEvent, {
      foreignKey: "EventId",
      onDelete: "cascade",
    });
    PadelTeam.belongsTo(models.PadelChampionship, {
      foreignKey: "ChampionshipId",
      onDelete: "cascade",
    });
    PadelTeam.hasOne(models.PadelPlayer, {
      foreignKey: "playerOne",
      as: "player1",
    });
    PadelTeam.hasOne(models.PadelPlayer, {
      foreignKey: "playerTwo",
      as: "player2",
    });
  }


  //   // Define the relationships between models
//   Player.belongsTo(Category);
//   Player.belongsTo(UserType);
//   Player.belongsTo(Sponsor);
//   Team.belongsTo(Category);
//   Game.belongsTo(Team, { as: 'team1' });
//   Game.belongsTo(Team, { as: 'team2' });
//   Championship.belongsTo(Category);
//   Championship.hasMany(Game);
//   ChampionshipScoreTable.belongsTo(Championship);
//   Training.belongsTo(Category);
//   Training.belongsTo(Player, { as: 'trainer' });
  return PadelTeam;
};