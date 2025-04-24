import userRouter from './users.route.js';
import authRouter from './auth.route.js';
import { Router } from 'express';

const router = Router();
router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;