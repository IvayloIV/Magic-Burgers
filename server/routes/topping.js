const router = require('express').Router();
const toppingController = require('../controllers/topping');
const isAuth = require('../middleware/is-auth');

router.get('/all', isAuth, toppingController.getAll);
router.post('/create', isAuth, toppingController.create);

module.exports = router;