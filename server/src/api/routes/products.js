import express from 'express';
import asyncHandler from 'express-async-handler';

import { getProducts } from '../controllers/products.js';

const router = express.Router();

router.get('/', asyncHandler(getProducts));

export default router;
