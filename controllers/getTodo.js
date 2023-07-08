const Todo = require("../models/todoModel");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Data Fetched Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      res.status(400).json({
        success: false,
        message: "NO data Found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Data Fetched Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message,
    });
  }
};
