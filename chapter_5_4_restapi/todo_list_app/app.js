const express = require("express");
const {
  todoListDatabase,
  createNewTodo,
  updateTodoItemStatus,
} = require("./todo_list_controller");

const app = express();

app.use(express.json());

// cara penulisan 1
app.get("/todo", (req, res) => {
  res.json(todoListDatabase);
});

// cara penulisan 2
app.get("/todo", function (req, res) {
  res.json(todoListDatabase);
});

app.post("/todo", (req, res) => {
  const body = req.body;
  createNewTodo(body);
  res.json(todoListDatabase);
});

app.put("/todo/:id", (req, res) => {
  const id = req.params.id;
  updateTodoItemStatus(id);
  res.json(todoListDatabase);
});

app.listen(9000, () => {
  console.log(
    "Server sudah menyala di http://localhost:9000"
  );
});
