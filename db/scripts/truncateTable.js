import { query } from "../index.js"


const sqlString = 'TRUNCATE TABLE ;'

async function truncateTable() {
    const res = await query(sqlString);
  console.log(res.command, "table data deleted");
} 

truncateTable();