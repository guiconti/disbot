const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const middleware = require('../controllers/middleware');
const playAudio = require('../controllers/playAudio');
const playStream = require('../controllers/playStream');

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({msg: 'Hi!'});
});

router.get('/play/file/:audioId', middleware, playAudio);
router.get('/play/stream', playStream);

module.exports = router;
