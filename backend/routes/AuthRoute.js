const { Signup, Login } = require('../controllers/AuthController');
const { authenticateToken, userVerification } = require('../middlewares/AuthMiddleware');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.get('/verify', authenticateToken, userVerification);

module.exports = router;
