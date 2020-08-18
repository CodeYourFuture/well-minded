const express = require('express')
const router = express.Router();

//@route GET api/resources
router.get("/", (req, res) => 
res.json({ message: "Resources api work" }));

router.get("/user",(req,res)=>
{res.json({ message: "Resources  user api work" });})


module.exports= router;