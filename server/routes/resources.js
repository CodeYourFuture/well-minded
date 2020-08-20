const express = require("express");
const router = express.Router();
const Resource = require("../models/resource.js");




//@route GET api/resources

router.get("/", (req, res) =>
  { Resource
    .find()
    .then((resources) => res.status(200).json(resources));
  }
);

//@route POST api/resources
router.post("/", (req, res) => {
  const resource = new Resource({
    logo: req.body.logo,
    name: req.body.name,
    category: req.body.category,
    website: req.body.website,
  });
  
  resource
    .save()
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      });
    });
})     

//@route GET api/resources/:id
router.get("/:resourceId", (req, res) => {
  
  Resource.findById(req.params.resourceId)
    .exec()
    .then((resource) => {
      console.log("from database", resource);
      if (resource) {
        res.status(200).json(resource);
      } else {
        res.status(404).json({ message: "not valid entry" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
//@route PUT api/resources/:id
router.put("/:resourceId", (req, res) => {
  const searchId=({_id:req.params.resourceId})
  delete req.body.id
  const data = {}
  if (req.body.name){
    data.name= req.body.name
  }
  if (req.body.logo) {
    data.logo = req.body.logo;
  }
  if (req.body.category) {
    data.category = req.body.category;
  }
  if (req.body.website) {
    data.website = req.body.website;
  }
  const options = {returnOriginal:false}
  
  Resource.findOneAndUpdate(searchId,{$set: data}, options)
    .exec()
    .then(() => {
      res.status(200).json({message:"Resource Updated"});
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
//@route DELETE api/resources/:id
router.delete("/:resourceId", (req, res) => {
  const id = req.params.resourceId
  Resource.remove({ _id: id })
    .exec()
    .then(() => {
      res.status(200).json({
        message: "Resource deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});



module.exports = router;