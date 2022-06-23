//ALL ROUTE NAMES WILL NEED TO BE VARIABLES PASSED FROM FRONT END
//AND MATCH MODELS/TABLE NAMES

import express from "express";

const router = express.Router();

//model for GET/POST
import { deleteFromList, getAllList, postToList, editCompleteStatus } from "../models/models.js";

//route URI to GET all from named table
router.get("/user_table", async function(req, res){
    const result = await getAllList();
      res.json({
          success : true,
          message : "Here are your tasks",
          payload : result
      })
    });

//TEST ROUTE FOR FRONT END
// router.get("/test_route", async function(req, res){
//       res.json({
//           message : "Test successful",
//       })
//     });

//route URI to POST to named table
// computational_thinking will need to be changed to a variable for the table name at hand.
// req.body will be handed in as a fetch request from the front end using e.target.value
router.post("/user_table", async function(req, res){
    const reqData = req.body;
    console.log;(reqData)
    const newTask = await postToList({reqData});
    res.json({ success: true,
               payload: newTask});
})

//route URI to PATCH to named table
router.patch("/user_table", async function(req, res){
    const reqData = req.body;
    const updateTask = await editCompleteStatus({reqData});
    res.json({ success: true,
            message: "status updated",
               payload: updateTask});
})


//route URI to DELETE from named table
router.delete("/user_table", async function(req, res){
    const reqData = req.body;
    const deleteTask = await deleteFromList({reqData});
    res.json({ success: true,
            message: "row deleted",
               payload: deleteTask});
})

export default router;