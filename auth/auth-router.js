const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/user-model');

router.post('/register', (req, res) => {
  let users = req.body;

  const hash = bc.hashSync(req.body.password, 8);

  users.password = hash;

  Users.add(users)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({
        message: 'server issue'
      });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bc.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'invalid credentials' });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'server issue'
      });
    });
});

module.exports = router;
