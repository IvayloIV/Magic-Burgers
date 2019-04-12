const router = require('express').Router();
const commentController = require('../controllers/comment');
const isAuth = require('../middleware/is-auth');

router.get('/all/:burgerId', commentController.all);
router.post('/create/:burgerId', isAuth, commentController.create);
router.delete('/remove/:id', isAuth, commentController.remove);

module.exports = router;