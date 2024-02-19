import { query } from '../../db/index.js';

const dbgetArticles = () => query('SELECT * from articles ORDER BY id');
const dbgetArticlesbyId = (id) => query('SELECT * from articles WHERE id = $1 ORDER BY id', [id]);
const dbupdateLikesbyId = (id, likes) => {
  query('UPDATE articles SET likes = $1 WHERE id = $2', [likes, id]);
};

export { dbgetArticles, dbgetArticlesbyId, dbupdateLikesbyId };
