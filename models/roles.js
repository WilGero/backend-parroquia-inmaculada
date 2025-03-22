import coneccion from "../database/connectdb.js";

class RolUsuario {
    static getAll(callBack) {
        coneccion.query(
            `SELECT * FROM roles`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
    static getById(rolId, callBack) {
        coneccion.query(
            `SELECT * FROM roles WHERE id = ?`,
            [rolId],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
    static create(datos, callBack) {
        coneccion.query(
            `INSERT INTO roles (rol_name) VALUES (?)`,
            [datos.rol_name],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

    static delete(rolId, callBack) {
        coneccion.query(
            `DELETE FROM roles WHERE id = ?`,
            [rolId],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

    static update(datos, callBack) {
        coneccion.query(
            `UPDATE roles SET rol_name = ? WHERE id = ?`,
            [datos.rol_name, datos.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}
export default RolUsuario;