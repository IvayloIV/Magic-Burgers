const router = require('express').Router();
const burgerController = require('../controllers/burger');
const isAuth = require('../middleware/is-auth');

router.get('/top', burgerController.top);
router.get('/all', burgerController.all);

router.post('/create', isAuth, burgerController.create);
router.get('/details/:id', burgerController.details);

router.patch('/like/:id', isAuth, burgerController.like);
router.patch('/dislike/:id', isAuth, burgerController.dislike);

module.exports = router;