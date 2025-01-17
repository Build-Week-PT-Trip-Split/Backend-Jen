const router = require("express").Router();
const bcrypt = require("bcryptjs");

//require web token
const jwt = require("jsonwebtoken");

const secrets = require("./secrets");

const Users = require("../users/usersModel.js");

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  console.log("Req.body: ", req.body)
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2
  user.password = hash;

  Users.add(user)
    .then(user => {
      const token = generateToken(user);

      res.status(201).json({
        user,
        message: `Welcome ${user.username}!, have a token`,
        token
      });
    })
    .catch(error => {
      console.log("Register error: ", error)
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          user,
          message: `Welcome back ${user.username}!, have a token`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // This is where adding new roles data to token go
    // roles: ['Organizer'],
  };
  //how long we want token to last for
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
