import express from "express";
import { deleteFromTasks, getAllTasks, postToTasks, editCompleteStatus } from "../models/models.js";

const router = express.Router();

router.get("/user_table", async function(req, res){
    const result = await getAllTasks();
      res.json({
          success : true,
          message : "Here are your tasks",
          payload : result });
});

router.post("/user_table", async function(req, res){
    const reqData = req.body;
    const newTask = await postToTasks({reqData});
    res.json({ success: true,
               payload: newTask});
})

router.patch("/user_table", async function(req, res){
    const reqData = req.body;
    const updateTask = await editCompleteStatus({reqData});
    res.json({ success: true,
               message: "status updated",
               payload: updateTask});
})


router.delete("/user_table", async function(req, res){
    const reqData = req.body;
    const deleteTask = await deleteFromTasks({reqData});
    res.json({ success: true,
               message: "row deleted",
               payload: deleteTask});
})

export default router;