const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const TOKEN_SECRET = process.env.TOKEN_SECRET || "" ;


async function getUsers() {
  return await User.find();
}


async function addUser(body, hashPassword) {
  const {
    name,
    email,
  } = body;

  const user = new User({
    name,
    email,
    password: hashPassword
  });

  return await user.save();
}


async function getByEmail(email) {
  return await User.findOne({
    email
  });
}


async function get(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) { // ?id=k1231 -> query paramet
      const id = req.query.id;
      const result = await getById(id);
      console.log('result of specific user =>', result);
      return res.send(result);
    }

    const result = await getUsers();
    console.log('result =>', result);

    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

async function register(req, res) {
  try {
    console.log(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const addUserResult = await addUser(req.body, hashPassword);
    console.log('addUserResult =>', addUserResult);
   
    return res.send({ user: addUserResult._id });
  } catch (error) {
    console.log(error);
  }
}

async function login (req, res) {
  try {
     const { email, password } = req.body;
     if (!(email && password)) {
        res.status(400).send("All input is required");
    }

    email.toLowerCase()
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_SECRET,
      );
      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};



module.exports = {
  get,
  register,
  login,
  addUser,
};