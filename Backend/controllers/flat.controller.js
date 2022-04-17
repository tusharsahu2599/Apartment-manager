const express = require("express");

const Flat = require("../models/flat.model");

const router = express.Router();
router.post("", async (req, res) => {
  try {
    let flat = await Flat.create(req.body);
    
    return res.status(201).send({ flat });

  } catch (e) {
    return res.status(400).send({ error: "Error creating flat" });

  }
});
router.patch("/:id", async (req, res) => {
  try {
    let flat = await Flat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send({ flat });
  } catch (e) {

    return res.status(500).json({ status: "Error", message: e.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    let flat = await Flat.findById(req.params.id)
      .populate("residents")
      .lean()
      .exec();

    return res.status(201).send(flat);
  } catch (e) {

    return res.status(500).json({ status: "Error", message: e.message });
  }
});
module.exports = router;
