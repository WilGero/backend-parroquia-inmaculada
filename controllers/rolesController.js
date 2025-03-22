import modelRol from '../models/roles.js';

class RolController {
    static getAll(req, res) {
        modelRol.getAll((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            console.log(results);
            return res.json({
                success: 1,
                data: results
            });
        });
    }
    static getById(req, res) {
        const rolId = req.params.id; // Obtener el ID de la URL
        console.log(rolId);
        modelRol.getById(rolId, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results[0]
            });
        });
    }
    static create(req, res) {
        const body = req.body;
        modelRol.create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }

    static delete(req, res) {
        const rolId = req.params.id;
        modelRol.delete(rolId, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }

    static update(req, res) {
        const body = req.body;
        modelRol.update(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}

export default RolController;