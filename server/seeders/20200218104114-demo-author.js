"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jane Doe",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("authors", null, {});
  }
};
