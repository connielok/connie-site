const router = require('express').Router();

router.use('/projects', require('./projects'));

router.use((req, res, next) => {
  const err = new Error('api route not found');
  err.status = 404;
  next(err);
});

module.exports = router;
