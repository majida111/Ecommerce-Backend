const express = require('express');
const router = express.Router(); // Create a router instance
//requiring routes
const userController=require('../controllers/userController');




router.get('/login',userController.getLogin);
router.post('/login',userController.userLogin);
router.post('/signUp',userController.postSignup);
router.get('/signUp',userController.getSignup);

module.exports = router;