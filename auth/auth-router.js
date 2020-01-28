const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/user-model');

router.post('/register', (req, res) => {
  Users.find()
    .then()
    .catch(error => {
      res.status(500).json({
        message: 'server issue'
      });
    });
});

router.post('/login', (req, res) => {
  Users.find()
    .then()
    .catch(error => {
      res.status(500).json({
        message: 'server issue'
      });
    });
});

module.exports = router;
