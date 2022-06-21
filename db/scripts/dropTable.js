import { query } from "../index.js";

const sqlString = `DROP TABLE computational_thinking;`;

 async function dropTable() {
    const res = await query(sqlString);
  console.log(res.command, "table dropped");
} 

dropTable();