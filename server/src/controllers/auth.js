const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/User");

exports.register =  async (req, res) => {
  try {
    let { username,email, password, passwordCheck } = req.body;

    // validate

    if ( !username || !email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Please fill all the field required" });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password is too short" });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "The passwords doesn't match" });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });


    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Please fill all fields!" });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "An account with this email has not been found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("token",token);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.header('All Users: ');
		res.json(users);
	} catch (err) {
		console.log({
			message: err,
		});
	}
};

exports.getUserById = async (req,res) => {
  try{
    const id = req.params.userId;
		const user = await User.findOne({ _id: id });
		console.log('users  ' + user);
		res.json(user);
  }
   catch (error) {
  console.error(error);
  }
}

exports.deleteUser = async (req, res) => {

  const id = req.params.userId
  const deletedUser = await User.deleteOne({
    _id: id,
  })

  if(deletedUser.deletedCount == 0) {
    res.status(404)
    throw new Error("User not found")
  }

  console.log(deletedUser)
  res.status(200).json('User deleted' + deletedUser)
}

exports.tokenIsValid = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
