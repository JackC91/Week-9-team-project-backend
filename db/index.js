import pg from "pg"; 

// pools will use environment variables for connection information to keep credentials off of GitHub
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