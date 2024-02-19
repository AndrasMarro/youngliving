import express from 'express';
import asyncHandler from 'express-async-handler';

import { getArticles, patchLikes } from '../controllers/articles.js';

const router = express.Router();

router.get('/', asyncHandler(getArticles));
router.patch('/:id', asyncHandler(patchLikes));

export default router;
