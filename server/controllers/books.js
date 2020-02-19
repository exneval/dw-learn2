const models = require("../models");
const Book = models.book;
const Author = models.author;

exports.index = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Author }]
    });
    res.send(books);
  } catch (err) {
    console.log(err);
  }
};
