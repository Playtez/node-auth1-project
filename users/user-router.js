const router = require('express').Router();

const Users = require('./user-model');

router.get('/', (req, res) => {
  Users.find()
    .then()
    .catch(error => {
      res.status(500).json({
        message: 'server Issue'
      });
    });
});

module.exports = router;
