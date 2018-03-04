const express = require('express');
const router  = express.Router();

const api_controller = require('../controllers/api_controller');

router.get('/', api_controller.index);

router.get('/profile/:email?', api_controller.profile);
router.post('/profile', api_controller.saveProfile);
router.post('/profile/picture', api_controller.savePicture);
// router.post('/logIn', api_controller.logIn);

router.post('/userInterest', api_controller.addInterest);

router.post('/request', api_controller.request);

router.post('/signup', api_controller.signup);

router.get('/story/:id?', api_controller.loadStory);
router.get('/storyLocation/:zipCode?', api_controller.getStoryLocation);
router.delete('/story', api_controller.deleteStory);

router.get('/leaders/:zipCode?', api_controller.getLeaders);



module.exports = router;