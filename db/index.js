
import pg from "pg"; //pulled from modules is postgres

// pools will use environment variables
// for connection information
 const pool = new pg.Pool({
    user: process.env.PGUSER,
    host:process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,   
    ssl:{rejectUnauthorized:false} 
})

// Saves writing pool.query each time pool is used.
export function query(text, params, callback){
    return pool.query(text, params, callback)
}