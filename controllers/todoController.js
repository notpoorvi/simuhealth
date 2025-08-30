const { todos, idCounters } = require("../config/db.js")

// get all the todo items, every user can see all todos
const getTodos = (req, res) => {
    res.json({ todos })
};

// create a todo item
const createTodo = (req, res) => {
    const title = req.body.title;
    if (!title) {
        res.status(400).json({ error: "Title cannot be empty" });
    }
    // create new todo item with given params
    const newTodoItem = {
        id: idCounters.todoIdCounter++,
        title: title,
        description: req.body.description,
        userId: req.user.id,
    };
    // append the new todo to the db.js array
    todos.push(newTodoItem);
    res.status(201).json(newTodoItem);
};

const updateTodo = (req, res) => {
    const todoId = Number(req.params.id);
    // get reference to oldTodoItem
    const oldTodoItem = todos.find((element => element.id === todoId));
    // if the todo item to be updated doesn't exist, then send error response with status code 404
    if (!oldTodoItem) {
        res.status(404).json({ error: "Todo item not found" });
        return;
    }
    const userId = req.user.id;
    // first verify userId matches todo.userId
    if (userId !== oldTodoItem.userId) {
        // send error message with unauthorized access status 403
        res.status(403).json({ error: "Unauthorized access: you're not the owner of this todo item" });
        return;
    }

    // update this given oldTodoItem in the database
    const updatedTodoItem = { ...oldTodoItem, title: req.body.title, description: req.body.description }
    const todoIdx = todos.indexOf(oldTodoItem);
    todos[todoIdx] = updatedTodoItem;

    res.status(200).json(updatedTodoItem);
};

const deleteTodo = (req, res) => {
    const todoId = Number(req.params.id);
    // get reference to todoItem
    const todoItem = todos.find((element => element.id === todoId));
    // if the todo item to be deleted doesn't exist, then send error response with status code 404
    if (!todoItem) {
        res.status(404).json({ error: "Todo item not found" });
        return;
    }
    const userId = req.user.id;
    // first verify userId matches todoItem.userId
    if (userId !== todoItem.userId) {
        // send error message with unauthorized access status 403
        res.status(403).json({ error: "Unauthorized access: you're not the owner of this todo item" });
        return;
    }
    const todoIdx = todos.indexOf(todoItem);
    todos.splice(todoIdx, 1);
    res.status(200).json({ message: "Todo item succesfully deleted!" });
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};