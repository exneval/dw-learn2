"use strict";
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define(
    "author",
    {
      name: DataTypes.STRING
    },
    {}
  );
  author.associate = function(models) {
    author.belongsToMany(models.book, {
      through: models.order,
      foreignKey: "author_id"
    });
  };
  return author;
};
