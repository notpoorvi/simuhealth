# A simple Todo API

Made using Node Js and Express for Simuhealth's backend exercise

## Includes:

- Simple user authentication
- Authentication middleware
- CRUD operations performed on the todo items: read, create, update, delete
- Request logger middleware
- Filtering of todos by either one or all of: userId, title, or description of the todo item

## Project Structure:

├── config
│ └── db.js
├── controllers
│ ├── authController.js
│ └── todoController.js
├── middlewares
│ ├── authMiddleware.js
│ └── loggerMiddleware.js
├── routes
│ ├── authRoutes.js
│ └── todoRoutes.js
├── README.md
└── server.js
