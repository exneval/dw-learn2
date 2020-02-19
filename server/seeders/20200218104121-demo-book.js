"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Mengapa aku dilahirkan?",
          description: "Ini adalah deskripsi book 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Ayah mengapa aku berbeda?",
          description: "Ini adalah deskripsi book 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Kevin cari pacar lagi!",
          description: "Ini adalah deskripsi book 3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Catatan si Kevin!",
          description: "Ini adalah deskripsi book 4",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  }
};
