import express from 'express';
import { index,web } from '../controllers/HomeController.js';

const router = express.Router();

router.post('/test',index);
router.get('/',web);

export default router;