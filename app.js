// Consigna:
// Crea una API REST que implemente un sistema de autenticación con JWT. Debe tener los siguientes endpoints:

// Registro de usuarios: Permite a un usuario registrarse con email y contraseña.

// Inicio de sesión: Valida las credenciales del usuario y devuelve un token JWT.

// Acceso a recursos protegidos: Un endpoint que solo puede ser accedido si el usuario proporciona un token válido en el encabezado de autorización.

// Asegúrate de:
// Usar un modelo stateless.
// Implementar un middleware para validar el token.
// Configurar el token con un tiempo de vida de 1 hora.

require('dotenv').config()
const express = require('express');
const authRoutes = require('./routes/auth')
const protectedRoutes = require('./routes/protected')
const app = express();
app.use(express.json())
const PORT = 3000

app.use('/auth', authRoutes)
app.use('/protected', protectedRoutes)

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
