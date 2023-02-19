module.exports = (sequelize, DataTypes) => {
  // Define the Championship model
  const PadelChampionship = sequelize.define("PadelChampionship", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prize1stPlace: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    prize2ndPlace: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    prize3rdPlace: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    prize4thPlace: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    totalCost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    totalRevenue: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    profit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  PadelChampionship.associate = (models) =>{
    PadelChampionship.belongsTo(models.PadelEvent, {
      foreignKey: "EventId",
      onDelete: "cascade",
    });
  }
  return PadelChampionship;
};
