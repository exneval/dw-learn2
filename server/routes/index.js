const express = require("express");
const router = express.Router();

const TodosController = require("../controllers/todos");
const BooksController = require("../controllers/books");
const AuthorsController = require("../controllers/authors");
const { login } = require("../controllers/auth");

const { auth } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.send("<strong>Hello DumbWays Rumah Tengah</strong>");
});

router.get("/todos", TodosController.index);
router.get("/todo/:id", TodosController.show);
router.post("/todo", auth, TodosController.store);
router.patch("/todo/:id", auth, TodosController.update);
router.delete("/todo/:id", auth, TodosController.destroy);

router.get("/books", BooksController.index);

router.get("/authors", AuthorsController.index);

router.post("/login", login);

module.exports = router;
