// const jwt = require('jsonwebtoken')

// //generar el token 
// const token = jwt.sign({userId:1818, role:'admin'}, 'secretKey', {expiresIn: '1h'});
// console.log('Token: ',token)

// //decodificar el token
// const decodificar = jwt.verify(token, 'secretKey')
// console.log('decodificar: ',decodificar)

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();

// Metodo stateless 

// // Middleware para validar JWT
// app.use((req, res, next) => {
//     const token = req.headers['authorization']; //colocarlo en thunder client o postman (ruta get http://localhost:3000/data en Headers colocar authorization y en value el token)
//     if (!token) return res.status(401).send('Access Denied');

//     try {
//         const verified = jwt.verify(token, 'secretKey');
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).send('Invalid Token');
//     }
// });

// app.get('/data', (req, res) => { //colocarlo en thunder client o postman (ruta get http://localhost:3000/data en Headers colocar authorization y en value el token)
//     res.send('Secure data accessed');
// });

// app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
