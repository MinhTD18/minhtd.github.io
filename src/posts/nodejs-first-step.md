---
title: Building a Basic Node.js Project
author: MinhTD
description: "In this tutorial, we'll walk you through the process of creating a simple Node.js project that features user authentication with login and logout functionality, as well as a basic todo list. This project will utilize popular Node.js frameworks such as Express.js for handling HTTP requests and sessions, and it will employ a straightforward in-memory storage mechanism for demonstration purposes.

The project begins with setting up a Node.js environment and initializing a new project using npm. We then install necessary dependencies like Express.js, body-parser, and express-session to handle routing, parsing request bodies, and managing user sessions, respectively.

The core functionality of the project revolves around user authentication. We define middleware functions to check if a user is authenticated before granting access to certain routes. Users are stored in memory with their usernames and passwords, and authentication is performed by comparing provided credentials with those stored in memory.

Once authenticated, users are granted access to the main todo list page, where they can add tasks to their list. The todo list itself is managed in-memory and is displayed dynamically on the page.

Additionally, users have the option to log out, which destroys their session and redirects them back to the login page.

This tutorial provides a foundational understanding of building a Node.js application with basic user authentication and data management functionalities. From here, you can extend the project by implementing features like user registration, persistent data storage with databases, and more advanced todo list functionalities. Happy coding!"
tag: 
  - NodeJS
category:
  - Guide
date: 2024-02-07
---

First, make sure you have Node.js installed on your machine. Then follow these steps to create the project:

## Create a new directory for your project:
```bash
mkdir nodejs-login-todolist
cd nodejs-login-todolist
```

## Initialize a new Node.js project:
```bash
npm init -y
```

## Install necessary dependencies:
```bash
npm install express body-parser express-session
```

## Create a file named `app.js`:
```bash
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// In-memory storage for demonstration purpose
let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];
let todos = [];

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Routes
app.get('/', isAuthenticated, (req, res) => {
    res.send('Welcome to Todo List App');
});

app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <input type="text" name="username" placeholder="Username"><br>
            <input type="password" name="password" placeholder="Password"><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.send('Invalid username or password');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/login');
        }
    });
});

app.get('/todo', isAuthenticated, (req, res) => {
    res.send(`
        <form action="/todo" method="post">
            <input type="text" name="task" placeholder="Enter your task">
            <button type="submit">Add</button>
        </form>
        <ul>
            ${todos.map(todo => `<li>${todo}</li>`).join('')}
        </ul>
        <a href="/logout">Logout</a>
    `);
});

app.post('/todo', isAuthenticated, (req, res) => {
    const task = req.body.task;
    todos.push(task);
    res.redirect('/todo');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

Run the application:
```bash
node app.js
```

Now you can open your browser and navigate to `http://localhost:3000/login` to access the login page. You can use the credentials from the users array defined in the code to login. After logging in, you will be redirected to the todo list page (`http://localhost:3000/todo`) where you can add tasks. You can also logout by clicking the `Logout` link.