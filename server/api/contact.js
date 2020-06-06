const router = require('express').Router();
const sendMail = require('../mail');

router.post('/', (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    sendMail(name, email, message, (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json({
          reply:
            'Thank you for sending me a message! I will respond as soon as I can.',
        });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
