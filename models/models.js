//ALL TABLE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END

import { query } from "../db/index.js";

//model for GET all from named table
export async function getAllList() {
    const result = await query(`SELECT * FROM user_table ORDER BY task_id ASC;`);
    return result
};

//model for POST to named table
//WE have removed values from SQL strings to prevent malicious injection
// computational_thinking table will need to be a variable sourced from react front end 
export async function postToList({reqData}) {
   const data = await query(`INSERT INTO user_table (user_id, task, is_complete, topic) VALUES (1, $1, 'false', $2);`, [reqData.task, reqData.topic]);
    return data;
};

//model for PATCH to named table
export async function editCompleteStatus({reqData}) {
    const data = await query(`UPDATE user_table SET is_complete = NOT is_complete WHERE task_id = $1;`, [reqData.task_id]);
    return data;
}

//model for DELETE from named table
 export async function deleteFromList ({reqData}){
     const data = await query(`DELETE FROM user_table WHERE task_id = $1 RETURNING *;`, [reqData.task_id]);
    return data;
    }  