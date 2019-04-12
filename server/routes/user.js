const router = require('express').Router();
const userController = require('../controllers/user');
const isAuth = require('../middleware/is-auth');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.patch('/block/:userId', isAuth, userController.block);
router.patch('/unblock/:userId', isAuth, userController.unblock);

router.get('/all', isAuth, userController.getAll);
router.get('/profile/:username', isAuth, userController.profile);

module.exports = router;
