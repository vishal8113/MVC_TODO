const express = require("express");
const Todo = require("../models/todoModel");
const app = express();

app.use(express.json());

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await Todo.create({ title, description });

    res.status(211).json({
      success: true,
      data: result,
      message: "Entry Successful",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Problem Occurred",
      message: err.message,
    });
  }
};
