import { createPool } from 'mysql2/promise'

export async function connect(){
    const config = require('../config.js');
    const connection = await createPool({
        user: "root",
        host: "143.110.156.3",
        password: "prueba_tecnicas",
        database: "db_data",
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0
    });
    return connection;
}
