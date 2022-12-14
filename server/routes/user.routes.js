import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

router.route('/api/users')
.post(userCtrl.create)

router.route('/api/users/:userId')
    .get(authCtrl.requireSignin, userCtrl.read)

router.param('userId', userCtrl.userByID)

export default router;