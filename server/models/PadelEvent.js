module.exports = (sequelize, DataTypes) => {
  // Define the Event model
  const PadelEvent = sequelize.define("PadelEvent", {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    eventType: {
      type: DataTypes.ENUM("Training", "Simple Tournament", "Championship"),
      allowNull: false,
    },
  });

  PadelEvent.associate = (models) => {
    PadelEvent.hasOne(models.PadelChampionship, {
      foreignKey: "EventId",
      onDelete: "cascade",
    });
  }
  return PadelEvent;
};
