module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Posts, {
      foreignKey: "PostId",
      onDelete: "cascade",
    });
    Comments.belongsTo(models.Users, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });
  };

  return Comments;
};
