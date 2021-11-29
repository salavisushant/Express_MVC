const express = require("express");
const router = express.Router();

const Evaluation = require("../models/eval.model");
const crudController = require("./crud.controller")



router.post("", crudController.post(Evaluation))


router.get("", crudController.get(Evaluation))

router.get("/:id", async (req, res) => {
  try {
    const user = await Evaluation.findById(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const user = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Evaluation.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


module.exports = router;