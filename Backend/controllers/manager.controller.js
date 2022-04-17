const express = require("express");

const Manager = require("../models/manager.model");

const router = express.Router();

//-----Sign Up--------

router.post("", async (req, res) => {
  try {
    let newManager = await Manager.create(req.body);
     
    return res.status(201).send({ newManager });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

//-------Log In-------

router.post("/:email", async (req, res) => {
  try {
    let manager = await Manager.findOne({ email: req.params.email });

    if (!manager) {
      return res.status(404).json({ status: "Failed", message: "Manager not found" });
    }


    const match = await manager.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).json({ status: "Failed", message: "Incorrect password" });
    }

    let token = 1234+manager.name+"tushar" 

    return res.status(200).send({ manager,token });
  } catch (e) {
    
    res.status(500).json({ status: "Failed", message: e.message });
  }
});



module.exports = router;
