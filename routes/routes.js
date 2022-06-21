//ALL ROUTE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END
//AND MATCH MODELS/TABLE NAMES

import express from "express";

const router = express.Router();

//model for GET all from named table
import { getAllList } from "../models/models.js";

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

//route URI to PATCH to named table

//route URI to DELETE from named table

export default router;