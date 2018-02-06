const express = require('express');
const router  = express.Router();

const api_controller = require('../controllers/api_controller');

router.get('/', api_controller.index);

router.get('/profile', api_controller.profile);
router.post('profile', api_controller.saveProfile);

router.post('/userInterest', api_controller.addInterest);

router.post('/request', api_controller.request);

router.post('/signup', api_controller.signup);

router.get('/story', api_controller.loadStory);
router.delete('/stroy', api_controller.deleteStory);

router.get('/leaders', api_controller.getLeaders);



module.exports = router;