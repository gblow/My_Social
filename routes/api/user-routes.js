const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  createUser,
  addFriend,
  removeFriend,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);
module.exports = router;
