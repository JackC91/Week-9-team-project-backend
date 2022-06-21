import { query } from "../index.js";

//Hard code and run script for each topic in app
const sqlString = `CREATE TABLE IF NOT EXISTS computational_thinking (
    user_id INT,
    task_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    task TEXT,
    is_complete BOOLEAN
     );`;

 async function createNewTable() {
    const res = await query(sqlString);
  console.log(res.command, "table created");
} 

createNewTable();