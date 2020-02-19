const models = require("../models");
const Todo = models.todo;
const User = models.user;

exports.index = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({
      include: [
        {
          model: User,
          // as: "createdBy"
          attributes: ["name"]
        }
      ],
      attributes: { exclude: ["created_by", "createdAt", "updatedAt"] },
      where: { id }
    });
    res.send(todo);
  } catch (err) {
    console.log(err);
  }
};

exports.store = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    console.log(req.user);
    res.status(200).send({ message: "success", data: todo });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.update(req.body, { where: { id } });
    // res.status(200).send({ message: "success", data: todo });
    if (todo.length > 0 && todo[0]) {
      const data = await Todo.findAll();
      res.status(200).send({ message: "success", data });
    } else {
      res.status(404).send({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.destroy({ where: { id } });
    // res.status(200).send({ message: "success", data: todo });
    if (todo) {
      res.status(200).send({ message: "success", data: todo });
    } else {
      const data = await Todo.findAll();
      res.status(404).send({ message: "success", data });
    }
  } catch (err) {
    console.log(err);
  }
};
