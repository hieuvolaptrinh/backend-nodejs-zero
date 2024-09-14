const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};
const getUserByID = async (userId) => {
  let [results, fields] = await connection.query(
    `SELECT * From Users Where id = ?`,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {}; // điều kiện để sau này có làm  thì tránh lỗi
  return user;
};
const updateUserById = async (userId, email, name, city) => {
  let [results, fields] = await connection.query(
    `UPDATE Users SET email=?, name=?, city=? WHERE id=?`,
    [email, name, city, userId]
  );
  return results;
};
const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id=?`,
    [userId]
  );
};
module.exports = {
  getAllUsers,
  getUserByID,
  updateUserById,
  deleteUserById,
};
