//ALL ROUTE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END
//AND MATCH MODELS/TABLE NAMES

import express from "express";

const router = express.Router();

//model for GET/POST
import { getAllList, postToList } from "../models/models.js";

//route URI to GET all from named table
router.get("/computational_thinking", async function(req, res){
    const result = await getAllList();
      res.json({
          success : true,
          message : "Here are your tasks",
          payload : result
      })
    });

//route URI to POST to named table
router.post("/computational_thinking", async function(req, res){
    const content = req.body.user_id;
    async function postToList() {
       response = await query(`INSERT INTO computational_thinking (user_id) VALUES (${content});`);
    };
    res.json({ success: true,
               payload: content});
    console.log(content)
    //res.json({})
})

//route URI to PATCH to named table

//route URI to DELETE from named table

export default router;