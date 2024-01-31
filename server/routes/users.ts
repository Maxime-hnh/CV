const router = require('express').Router();
import userController from '../controllers/userController'
const acl = require('express-acl');


router.get('/me', userController.GetMe.bind(userController))


module.exports = router;