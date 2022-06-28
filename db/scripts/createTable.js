import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS user_table (
    user_id INT,
    task_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    task TEXT,
    is_complete BOOLEAN,
    topic TEXT
     );`;

 async function createNewTable() {
    const res = await query(sqlString);
  console.log(res.command, "table created");
} 

createNewTable();