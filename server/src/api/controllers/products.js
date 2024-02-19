import { dbgetProducts } from '../models/products.js';

const getProducts = async (req, res) => {
  let result = null;

  result = await dbgetProducts();
  res.status(200).json(result.rows);
};

export { getProducts };
