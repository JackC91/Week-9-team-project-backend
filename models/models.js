import { query } from "../db/index.js";

// ORDER BY ASC included in the SQL string to fix behaviour of order of list rendering on screen
export async function getAllTasks() {
    const result = await query(`SELECT * FROM user_table ORDER BY task_id ASC;`);
    return result};

//We have removed values from SQL strings to prevent malicious injection
export async function postToTasks({reqData}) {
   const data = await query(`INSERT INTO user_table (user_id, task, is_complete, topic) VALUES (1, $1, 'false', $2);`, [reqData.task, reqData.topic]);
    return data;};

export async function editCompleteStatus({reqData}) {
    const data = await query(`UPDATE user_table
                              SET is_complete = NOT is_complete 
                              WHERE task_id = $1;`, [reqData.task_id]);
    return data;}

 export async function deleteFromTasks ({reqData}){
     const data = await query(`DELETE FROM user_table WHERE task_id = $1 RETURNING *;`, [reqData.task_id]);
    return data;}  