const router = require("express").Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriend
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router
.route("/:userId")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route("/:userId/friend/:friendId")
.post(createFriend)
.delete(deleteFriend);

module.exports = router;
