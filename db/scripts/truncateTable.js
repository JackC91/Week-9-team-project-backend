import { query } from "../index.js"

//Hard code and run script for each topic in app
const sqlString = 'TRUNCATE TABLE computational_thinking;'

async function truncateTable() {
    const res = await query(sqlString);
  console.log(res.command, "table data deleted");
} 

truncateTable();