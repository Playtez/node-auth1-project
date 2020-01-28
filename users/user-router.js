const router = require('express').Router();

const Users = require('./user-model');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({
        message: 'server Issue'
      });
    });
});

// const restricted = (req, res, next) => {
//   const { username, password } = req.body;
//   if(username )
// };

module.exports = router;
