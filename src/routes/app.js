import userRouter from './users.route.js';
import authRouter from './auth.route.js';
import pollRouter from './polls.route.js';
import voteRouter from './vote.route.js';
import { Router } from 'express';
import upload from '../providers/upload.provider.js';
import { ValidateMiddleware } from '../middlewares/validate.middleware.js';
import { VerifyMiddleware } from '../middlewares/verify.middleware.js';

const router = Router();
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/polls',
  VerifyMiddleware.validateToken, 
  pollRouter);
router.use('/vote',
  VerifyMiddleware.validateToken,
  ValidateMiddleware.validateUser, 
  voteRouter);

router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file)
  });
  
router.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
})

export default router;