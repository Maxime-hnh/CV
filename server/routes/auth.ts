const router = require('express').Router();
import authController from '../controllers/authController'
// const auth = require('../middleware/auth');
// const acl = require('express-acl');


router.post('/', authController.SignUp.bind(authController))
router.get('/me', authController.GetMe.bind(authController))


export default router
