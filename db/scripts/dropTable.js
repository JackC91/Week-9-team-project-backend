import { query } from "../index.js";

//Hard code and run script for each topic in app if need to delete
const sqlString = `DROP TABLE computational_thinking;`;

 async function dropTable() {
    const res = await query(sqlString);
  console.log(res.command, "table dropped");
} 

dropTable();