const express = require("express")
const router = express.Router()

//@route GET api/contact/messages
router.get("/messages", (req, res) =>{ res.json({message: working})})

module.exports= router;