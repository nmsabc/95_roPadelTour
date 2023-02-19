module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
    Users.hasMany(models.Comments, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
    Users.hasOne(models.Players, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
    Users.hasOne(models.PadelUserType, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
    Users.hasOne(models.PadelPlayer, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
  };

  return Users;
};
