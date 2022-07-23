const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/thoughts/:thoughtId/reactions
router.route('/:userId/friends/:friendId').post(addFriends).delete(deleteFriend);

module.exports = router;
