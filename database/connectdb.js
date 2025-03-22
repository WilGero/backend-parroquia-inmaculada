import mysql from 'mysql';

// Crear el pool de conexiones
const pool = mysql.createPool({
    host: process.env.HOST,
    // port: process.env.MYSQL_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
});

// Verificar la conexión a la base de datos
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión con la BDD fue perdida');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La Base de datos tiene demasiadas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión con la BDD fue rechazada');
        }
        console.log('No se pudo conectar con la base de datos');
    } else {
        if (connection) connection.release(); // Liberar la conexión
        console.log('Se ha conectado a la BdD!!');
        return;
    }
});

// Exportar el pool de conexiones
export default pool;