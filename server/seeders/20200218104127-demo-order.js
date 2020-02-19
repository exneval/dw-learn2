"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          book_id: 1,
          author_id: 1,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          book_id: 2,
          author_id: 1,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          book_id: 3,
          author_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          book_id: 4,
          author_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  }
};
