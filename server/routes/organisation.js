const express = require('express')
const router = express.Router();
​
//@route GET api/organizations
router.get("/", (req, res) => 
res.json({ message: "organisation api work" }));
​
router.get("/user",(req,res)=>
{res.json({ message: "Resources  user api work" });})
​
​
module.exports= router;