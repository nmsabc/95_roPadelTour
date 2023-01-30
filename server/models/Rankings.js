module.exports = (sequelize, DataTypes) => {
  const Rankings = sequelize.define("Rankings", {
    r_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    r_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    r_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Rankings;
};
