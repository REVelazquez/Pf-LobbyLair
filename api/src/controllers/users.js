const { User } = require('../db.js');

async function getUsers (rea, res){
  return res.status(200).json("a");
}

module.exports = {
  getUsers
};