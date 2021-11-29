const post = (user) => async (req, res) => {
    try {
      const item = await user.create(req.body);
      return res.status(201).send(item);
    } catch (e) {
      return res.status(500).send({ message: e.message, status: "Failed" });
    }
  };
  

  const get = (model) => async (req, res) => {
    try {
      const user = await model.find().populate("instuctor_id").lean().exec();
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).send({ message: e.message, status: "Failed" });
    }
  };
  
  module.exports = {
    post,
    get,
  };