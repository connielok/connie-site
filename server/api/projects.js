const router = require('express').Router();
const Project = require('../db/projects');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
