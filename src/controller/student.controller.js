const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");

const crudController = require("./crud.controller")
router.post("", crudController.post(Student))


router.get("", async (req, res) => {
  try {
    const user = await Student.find().populate("user_id").lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});  


router.get("/:id", async (req, res) => {
  try {
    if (req.params.id == 10) {
      const user = await Student.find()
        .sort({ score_in_evaluation: -1 })
        .populate("user_id")
        .lean()
        .exec();
      return res.status(201).send(user[0]);
    } else if (req.params.id == "Present" || req.params.id == "Absent") {
      const user = await Student.find({
        evaluation_status: { $eq: req.params.id },
      })
        .populate("user_id")
        .lean()
        .exec();
      console.log(user);
      return res.status(201).send(user);
    } else {
      const user = await Student.findById(req.params.id)
        .populate("user_id")
        .lean()
        .exec();
      return res.status(201).send(user);
    }
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});



router.patch("/:id", async (req, res) => {
  try {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body, {
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
    const user = await Student.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});

module.exports = router;