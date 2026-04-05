const { Signup, Login, Profile, Logout } = require('../controllers/AuthController');
const { authenticateToken, userVerification } = require('../middlewares/AuthMiddleware');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/logout', Logout);
router.get('/verify', authenticateToken, userVerification);
router.get('/profile', authenticateToken, Profile);

module.exports = router;
