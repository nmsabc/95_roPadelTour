module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Users, {
      onDelete: "cascade",
    });
  };
  Comments.associate = (models) => {
    Comments.belongsTo(models.Posts, {
      onDelete: "cascade",
    });
  };

  return Comments;
};
