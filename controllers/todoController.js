const { todos, idCounters } = require("../config/db.js")

// get all the todo items, every user can see all todos
const getTodos = (request, response) => {
    response.json({ todos })
};

// create a todo item
const createTodo = (request, response) => {
    const title = request.body.title;
    if (!title) {
        response.status(400).json({ error: "Title cannot be empty" });
    }
    // create new todo item with given params
    const newTodoItem = {
        id: idCounters.todoIdCounter++,
        title: title,
        description: request.body.description,
        userId: request.user.id,
    };
    // append the new todo to the db.js array
    todos.push(newTodoItem);
    response.status(201).json(newTodoItem);
};

const updateTodo = (request, response) => {
    const todoId = Number(request.params.id);
    // get reference to oldTodoItem
    const oldTodoItem = todos.find((element => element.id === todoId));
    // if the todo item to be updated doesn't exist, then send error response with status code 404
    if (!oldTodoItem) {
        response.status(404).json({ error: "Todo item not found" });
        return;
    }
    const userId = request.user.id;
    // first verify userId matches todo.userId
    if (userId !== oldTodoItem.userId) {
        // send error message with unauthorized access status 403
        response.status(403).json({ error: "Unauthorized access: you're not the owner of this todo item" });
        return;
    }

    // update this given oldTodoItem in the database
    const updatedTodoItem = { ...oldTodoItem, title: request.body.title, description: request.body.description }
    const todoIdx = todos.indexOf(oldTodoItem);
    todos[todoIdx] = updatedTodoItem;

    response.status(200).json(updatedTodoItem);
};

const deleteTodo = (request, response) => {
    const todoId = Number(request.params.id);
    // get reference to todoItem
    const todoItem = todos.find((element => element.id === todoId));
    // if the todo item to be deleted doesn't exist, then send error response with status code 404
    if (!todoItem) {
        response.status(404).json({ error: "Todo item not found" });
        return;
    }
    const userId = request.user.id;
    // first verify userId matches todoItem.userId
    if (userId !== todoItem.userId) {
        // send error message with unauthorized access status 403
        response.status(403).json({ error: "Unauthorized access: you're not the owner of this todo item" });
        return;
    }
    const todoIdx = todos.indexOf(todoItem);
    todos.splice(todoIdx, 1);
    response.status(200).json({ message: "Todo item succesfully deleted!" });
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};