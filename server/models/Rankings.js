module.exports = (sequelize, DataTypes) => {
  const Rankings = sequelize.define("Rankings", {
    rank_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Rankings;
};
