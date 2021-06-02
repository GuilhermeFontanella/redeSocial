const express = require('express');
const router = express.Router();
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const Auth = require('./middlewares/Auth');
const AuthValidator = require('./validators/AuthValidator');

router.get('/ping', (req, res) => {
    res.json({pong: true});
});

router.get('/states', UserController.getStates);

router.post('/users/signin', AuthValidator.signin, AuthController.signin);
router.post('/user/signup', AuthValidator.signup, AuthController.signup);

router.get('/user/me', Auth.private, UserController.info);
router.put('/user/me', Auth.private, UserController.editAction);

router.get('/post', PostController.getPosts);

router.post('/post/add', Auth.private, PostController.addAction);
router.get('/post/list', PostController.getList);
//router.get('/post/item', PostController.letList);
router.post('/post/:id', Auth.private, PostController.editAction);

module.exports = router;