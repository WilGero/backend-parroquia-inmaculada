import express from 'express';
import rolesController from '../controllers/rolesController.js'; // Ajusta la ruta según tu estructura
// import auth from '../auth.js'; // Ajusta la ruta según tu estructura

const router = express.Router();

// Definir las rutas
router.get('/', rolesController.getAll);
router.get('/:id', rolesController.getById);
router.post('/create', rolesController.create);
router.delete('/delete/:id', rolesController.delete);
router.put('/update', rolesController.update);

// Exportar el router
export default router;