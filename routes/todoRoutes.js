const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController.js");
const authMiddleware = require("../middlewares/authMiddleware.js")

router.get("/", todoController.getTodos);
router.post("/", authMiddleware, todoController.createTodo);
router.put("/:id", authMiddleware, todoController.updateTodo);
router.delete("/:id", authMiddleware, todoController.deleteTodo);

module.exports = router;