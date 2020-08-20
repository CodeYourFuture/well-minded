const express = require("express");
const router = express.Router();
const data = require ("../data/organisations.json")
router.get("/", (req, res) => {
  res.json({ meg: "hello" });
});
// All Organizations
router.get("/orgs", (req, res) => {
  res.json(data);
});

// server.js
// const organisation = require("./routes/organisation")
//app.use("/organisation", organisation);

// router.get("/organizations/search", (req, res) => {
//   if (req.query.q) {
//     const organization = organizations.filter(
//       organization =>
//         organization.name.toLowerCase() ||
//         organization.category.toLowerCase().includes(req.query.q.toLowerCase())
//     );
//     res.send(organization);
//   } else {
//     res.send(400, "No parameter provided !");
//   }
// });

// // Create Organization
// router.post("/organizations", (req, res) => {
//   if (
//     req.body.logo &&
//     req.body.name &&
//     req.body.category &&
//     req.body.website &&
//     req.body.location &&
//     req.body.description
//   ) {
//     organizations.push(req.body);
//   } else {
//     res.send("Please fill the form");
//   }
// });

// // Delete Organization
// router.delete("/organizations", (req, res) => {
//   const { logo, name, category, website, location, description } = req.body;

//   if (
//     req.body.logo &&
//     req.body.name &&
//     req.body.category &&
//     req.body.website &&
//     req.body.location &&
//     req.body.description
//   ) {
//     res.json(
//       organizations.filter(
//         organization =>
//           organization.logo !== logo &&
//           organization.name !== name &&
//           organization.category !== category &&
//           organization.website !== website &&
//           organization.location !== location &&
//           organization.description !== description
//       )
//     );
//   } else {
//     ("Session not found");
//   }
// });

// router.use(express.static("public"));

// router.get("/", (request, response) => {
//   response.sendFile(__dirname + "/views/index.html");
// });

// router.listen(process.env.PORT || 3000);

module.exports = router;
