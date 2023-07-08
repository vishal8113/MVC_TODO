const Todo = require("../models/todoModel");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: "Data was Updated Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message,
    });
  }
};
