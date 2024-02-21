import { dbgetArticles, dbgetArticlesbyId, dbupdateLikesbyId } from '../models/articles.js';

const getArticles = async (req, res) => {
  const { id } = req.params;
  let result = null;

  result = id ? await dbgetArticlesbyId(id) : await dbgetArticles();
  res.status(200).json(result.rows);
};
const patchLikes = async (req, res) => {
  const { id } = req.params;
  let { likes } = req.body;
  likes = parseInt(likes, 10);

  if (likes === null || likes === 0) likes = 1;
  console.log(likes);
  let check = null;

  await dbupdateLikesbyId(id, likes);
  check = await dbgetArticlesbyId(id);
  if (check.rows[0].likes !== likes) res.status(200).json('likes updated!');
  res.status(202).json('no change');
};

export { getArticles, patchLikes };
