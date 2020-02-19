const models = require("../models");
const Book = models.book;
const Author = models.author;

exports.index = async (req, res) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book }]
    });
    res.send(authors);
  } catch (err) {
    console.log(err);
  }
};
