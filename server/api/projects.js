const router = require('express').Router();
const Project = require('../db/projects');

router.get('/', (req, res, next) => {
  try {
    const projects = Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
