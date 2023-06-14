const { Post } = require('../db.js');

async function getPosts (rea, res){
  return res.status(200).json("a");
}

module.exports = {
  getPosts
};