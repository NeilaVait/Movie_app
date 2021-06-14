const express = require('express');
const router = express.Router();

router.get('/api/todos', (req, res) => {
  res.json({ msg: 'all todos' });
});

router.post('/api/todo/new', (req, res) => {
  console.log(req.body);
});

module.exports = router;
