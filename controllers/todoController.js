// get all the todo items, every user can see all todos
const getTodos = (req, res) => {
    res.json(todos)
};

// create a todo item
const createTodo = (req, res) => {
    const title = req.body.title;
    if (!title) {
        res.status(400).json({ error: "Title cannot be empty" });
    }
    const description = req.body.description;
    const userId = req.user.id;
    const newTodoItem = {
        // id: 
    }
    // append the new todo to the db.js array
};

const updateTodo = (req, res) => {
    const todoId = Number(req.params.id);
    const oldTodoItem = todos.find((element => element.id == todoId));
    // if the todo item to be updated doesn't exist, then send error response with status code 404
    if (!oldTodoItem) {
        res.status(404).json({ error: "Todo item not found" });
    }
    // first verify req.user.id matches todo.userId
    // if yes, then:
    const userId = req.user.id;
    if (userId == oldTodoItem.userId) {
        // update this given oldTodoItem in the database
    }
    else {
        // else send error message with unauthorized access
    }
};

const deleteTodo = (req, res) => {
    const todoId = req.params;
    const todoItem = todos.find((element => element.id == todoId));
    // if the todo item to be updated doesn't exist, then send error response with status code 404
    if (!todoItem) {
        res.status(404).json({ error: "Todo item not found" });
    }
    // first verify req.user.id matches todo.userId
    // if yes, then:
    const userId = req.user.id;
    if (userId == todoItem.userId) {
        // delete this given todoItem from the database
    }
    else {
        // else send error message with unauthorized access
    }
};