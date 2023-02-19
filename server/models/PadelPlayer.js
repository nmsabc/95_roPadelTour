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
  const PadelPlayer = sequelize.define("PadelPlayer", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        "Male 1",
        "Male 2",
        "Male 3",
        "Female 1",
        "Female 2",
        "Female 3",
        "Mixt 1",
        "Mixt 2",
        "Mixt 3"
      ),
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    games: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    wonGames: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lostGames: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  PadelPlayer.associate = (models) => {
    PadelPlayer.hasMany(models.PadelCategory, {
      foreignKey: "PadelPlayerId",
      onDelete: "cascade",
    });

    PadelPlayer.hasMany(models.PadelChampionship, {
      foreignKey: "PadelPlayerId",
      onDelete: "cascade",
    });

    PadelPlayer.hasMany(models.PadelEvent, {
      foreignKey: "PadelPlayerId",
      onDelete: "cascade",
    });

    PadelPlayer.hasMany(models.PadelGame, {
      foreignKey: "PadelPlayerId",
      onDelete: "cascade",
    });

    PadelPlayer.hasMany(models.PadelTeam, {
      foreignKey: "PadelPlayerId",
      onDelete: "cascade",
    });

    PadelPlayer.belongsTo(models.Users, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
  };

  return PadelPlayer;

};

