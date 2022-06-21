//ALL TABLE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END

import { query } from "../db/index.js";

//model for GET all from named table
export async function getAllList() {
    const result = await query("SELECT * FROM computational_thinking;");
    return result
};

//model for GET all from named table

//model for GET all from named table

//model for GET all from named table