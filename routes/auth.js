const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

//base de datos simulada
const users = []

//Registro
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Faltan datos')
    users.push({ email, password })
    res.status(201).send('Usuario registrado')
})

//inicio de sesion
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if(!user)return res.status(400).send('email o contraseña incorrecta');

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});
module.exports = router;