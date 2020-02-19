"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  book.associate = function(models) {
    book.belongsToMany(models.author, {
      through: models.order,
      foreignKey: "book_id"
    });
  };
  return book;
};
