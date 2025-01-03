// Autenticación y autorización usando JWT para un Sistema de Tareas

// Consigna
// Crea una API REST que implemente un sistema de autenticación con JWT para gestionar tareas personales. 
 
// Debe incluir los siguientes endpoints:

// Registro de usuarios:
// Permite a un usuario registrarse con email y contraseña.

// Inicio de sesión:
// Valida las credenciales del usuario y devuelve un token JWT.

// Gestión de tareas protegidas:
// Un endpoint para crear tareas solo accesible si el usuario proporciona un token válido.
// Un endpoint para listar todas las tareas del usuario autenticado.

// Requerimientos:
// Usa un modelo stateless.
// Implementa un middleware para validar el token.
// Configura el token con un tiempo de vida de 1 hora.

// Las tareas deben estar relacionadas con el email del usuario (asignadas a él).

// Estructura de Archivos
// /project
//   /routes
//     auth.js
//     tasks.js
//   app.js
//   .env
