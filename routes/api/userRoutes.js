const router = require('express').Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  deleteFriend,
  userIdExists,
  userAndFriendIdExists
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

router.use('/:userId', userIdExists);

// /api/users/:userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.use('/:userId/friends/:friendId', userAndFriendIdExists);

router.route('/:userId/friends/:friendId').post(addFriends).delete(deleteFriend);

module.exports = router;
