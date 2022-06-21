//ALL TABLE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END

import { query } from "../db/index.js";

//model for GET all from named table
export async function getAllList() {
    const result = await query(`SELECT * FROM computational_thinking;`);
    return result
};

//model for POST to named table
//Remove values from SQL strings to prevent malicious injection
export async function postToList() {
    await query(`INSERT INTO computational_thinking (user_id, task, is_complete) VALUES (1, "test task", false);`);
};

//model for PATCH to named table

//model for DELETE from named table