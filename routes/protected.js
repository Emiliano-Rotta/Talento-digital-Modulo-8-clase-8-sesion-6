const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

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

// Endpoint protegido
router.get('/data', verifyToken, (req, res) => {
    res.send(`Hola, ${req.user.email}. Acceso confirmado.`);
});

module.exports = router;
