import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import testRoute from './api/routes/test.js';
import articlesRoute from './api/routes/articles.js';
import productsRoute from './api/routes/products.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/test', testRoute);
app.use('/articles', articlesRoute);
app.use('/products', productsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
