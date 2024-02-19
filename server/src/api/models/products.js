import { query } from '../../db/index.js';

const dbgetProducts = () => query('SELECT * from products ORDER BY name');

export { dbgetProducts };
