const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Base de datos simulada
const users = [];

// Registro
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Email and password are required');
    
    // Verificar si ya está registrado
    if (users.some(u => u.email === email)) return res.status(400).send('Email already registered');

    users.push({ email, password });
    res.status(201).send('User registered');
});

// Inicio de sesión
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
