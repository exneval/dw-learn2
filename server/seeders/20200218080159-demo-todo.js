"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todos",
      [
        {
          title: "Walkin with mbake",
          is_done: false,
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Swimmin with mbake",
          is_done: true,
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
