import express from 'express';
import { index } from '../controllers/HomeController.js';

const router = express.Router();

router.post('/test',index);

export default router;