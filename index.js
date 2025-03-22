import express from "express";
import 'dotenv/config' //para las variables de entorno
import rolesRoute from './routes/rolesRoute.js';
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());
// Middleware para parsear datos de formularios (opcional, si necesitas enviar datos desde formularios HTML)
app.use(express.urlencoded({ extended: true })); // Para parsear application/x-www-form-urlencoded
// Usar las rutas de roles
app.use('/roles', rolesRoute);
app.listen(5000, () => console.log(`🔥🔥🔥 http://localhost:${PORT}`));