module.exports = (sequelize, DataTypes) => {
    const Players = sequelize.define("Players", {
        first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        fam_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        phone: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        address_city: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        full_address: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        points: {
        type: DataTypes.INTEGER,
        allowNull:false
        },
    });
  
  Players.associate = (models) => {
    Players.belongsTo(models.Users, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
  };
    return Players;
  };