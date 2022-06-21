//ALL TABLE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END

import { query } from "../db/index.js";

//model for GET all from named table
export async function getAllList() {
    const result = await query(`SELECT * FROM computational_thinking;`);
    return result
};

//model for POST to named table
//WE have removed values from SQL strings to prevent malicious injection
// computational_thinking table will need to be a variable sourced from react front end 

export async function postToList({reqData}) {
   const data = await query(`INSERT INTO computational_thinking (user_id, task, is_complete) VALUES (1, $1, 'false');`, [reqData.task]);
    return data;
};
//model for PATCH to named table
export async function editCompleteStatus({reqData}) {
    const data = await query(`UPDATE computational_thinking SET is_complete = NOT is_complete WHERE task_id = $1;`, [reqData.task_id]);
    return data;
}

//model for DELETE from named table
 export async function deleteFromList ({reqData}){
     const data = await query(`DELETE FROM computational_thinking WHERE task_id = $1 RETURNING *;`, [reqData.task_id]);
    return data;
    }  