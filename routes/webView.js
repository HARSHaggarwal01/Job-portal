import express from 'express';
import { web } from '../controllers/HomeController.js';

const router = express.Router();

router.get('/',web);

export default router;