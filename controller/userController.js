const Users = require("../model/user.model");
var bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, gender, password, age, city, is_married } = req.body;

  try {
    const userPresent = await Users.findOne({ email });
    if (userPresent) {
      return res.send({ msg: "User is already present" });
    } else {
      const newUser = new Users({
        name,
        email,
        gender,
        password,
        age,
        city,
        is_married,
      });

      const saveUser = await newUser.save();
      res.status(200).send("created", saveUser);
    }
    // const hashPassword = await bcrypt.hash(password);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const getAllUsers = await Users.find({});
    res.send(getAllUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  getUser,
};
