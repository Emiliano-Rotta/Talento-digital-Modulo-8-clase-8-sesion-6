const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Base de datos simulada para tareas
const tasks = [];

// Middleware para validar el token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Invalid token');
    }
};

// Crear una tarea
router.post('/create', verifyToken, (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).send('Title and description are required');
    
    const newTask = { id: tasks.length + 1, email: req.user.email, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Listar tareas del usuario
router.get('/list', verifyToken, (req, res) => {
    const userTasks = tasks.filter(task => task.email === req.user.email);
    res.json(userTasks);
});

module.exports = router;
