const express = require("express");
const router = express.Router();
const User = require("../models/user.model");


router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
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
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});

module.exports = router;