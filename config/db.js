let users = [
    { id: 1, username: "ron", password: "password123" },
    { id: 2, username: "harry", password: "watchoutvoldemort" },
    { id: 3, username: "hermione", password: "leviosar" },
    { id: 4, username: "draco", password: "qwerty123!" }
]

let todos = [
    { id: 1, title: 'Dishes', description: 'Wash the dishes today!', userId: 3 },
    { id: 2, title: 'Buy milk', description: 'Get 2% and almond milk', userId: 1 },
    { id: 3, title: 'Call mom', description: 'Weekly check-in, around 7pm', userId: 2 },
    { id: 4, title: 'Pay bills', description: 'Electricity and internet before Friday', userId: 4 },
    { id: 5, title: 'Book dentist', description: 'Cleaning appointment next month', userId: 3 },
    { id: 6, title: 'Read book', description: 'Finish chapter 5 of novel', userId: 3 },
    { id: 7, title: 'Leetcode', description: 'Complete 3 problems by EOD', userId: 1 },
    { id: 8, title: 'Workout', description: 'Leg day session at the gym', userId: 4 },
    { id: 9, title: 'Plan trip', description: 'Look at flights for weekend getaway', userId: 4 },
    { id: 10, title: 'Laundry', description: 'Wash dark clothes and bedsheets', userId: 1 },
    { id: 11, title: 'Study notes', description: 'Review last lecture slides', userId: 2 },
    { id: 12, title: 'Groceries', description: 'Eggs, bread, cheese, coffee', userId: 4 },
]

let idCounters = {
    userIdCounter: users.length + 1,
    todoIdCounter: todos.length + 1,
}

module.exports = {
    users,
    todos,
    idCounters
}