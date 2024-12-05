const express = require("express");
const router = express.Router();
const comment = require("../controlers/comment");

router.get("/", comment.getAllComments);
router.get("/:id", comment.getCommentById);
router.post("/", comment.addNewComment); 
router.put("/:id", comment.updateComment); 
router.delete("/:id", comment.deleteComment); 

module.exports = router;