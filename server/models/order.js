'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    book_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};