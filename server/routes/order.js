const router = require('express').Router();
const orderController = require('../controllers/order');
const isAuth = require('../middleware/is-auth');

router.get('/all', isAuth, orderController.all);
router.post('/create/:burgerId', isAuth, orderController.create);

router.get('/my', isAuth, orderController.my);
router.get('/user/:username', isAuth, orderController.getByUsername);

router.get('/details/:id', orderController.details);
router.patch('/edit/:id', isAuth, orderController.edit);

module.exports = router;