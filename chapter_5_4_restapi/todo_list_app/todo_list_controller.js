// const todoItem = {
//   "id": string,
//   "taskName": string,
//   "status": "belum" / "sudah",
// }

const { uuid } = require("uuidv4");

const todoListDatabase = [
  {
    id: generateRandomId(),
    taskName: "Kerjain PR Matematika",
    status: "belum",
  },
  {
    id: generateRandomId(),
    taskName: "Kerjain PR Biologi",
    status: "sudah",
  },
  {
    id: generateRandomId(),
    taskName: "Masak nasi buat makan malem",
    status: "belum",
  },
];

// Tujuan: [] -> [{ todoItem }]
function createNewTodo(newTodoItem) {
  const newTodoItemPlusId = {
    id: generateRandomId(),
    ...newTodoItem,
  };
  // newTodoItem { taskName: "", status: "" }
  // newTodoItemPlusId { taskName: "", status: "", id: "" }
  todoListDatabase.push(newTodoItemPlusId);
}

// Tujuan: [{ todoItem, status: "belum" }] -> [{ todoItem, status: "sudah"}]
function updateTodoItemStatus(id) {
  const index = todoListDatabase.findIndex(
    (todoItem) => todoItem.id === id
  );
  todoListDatabase[index].status = "sudah";
}

module.exports = {
  todoListDatabase,
  createNewTodo,
  updateTodoItemStatus,
};

// fungsi untuk generate random ID:
function generateRandomId() {
  return uuid();
}
