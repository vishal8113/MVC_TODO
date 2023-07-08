const Todo = require("../models/todoModel");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "TODO Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message,
    });
  }
};
