const { Thought, User } = require('../models');

const userControllerObject = {

  getUsers: async (req, res) => {
    try {
   
      const users = await User.getUserSchema();
   
      res.status(200).json(users);
   
    } catch (error) {
     res.status(500).json(error);
    }
   
   },
   
  getOneUser: async (req,res) => {
   try {
     const oneUser = await User.getOneUserSchema(req.params.userId);
   
     res.status(200).json(oneUser);
   } catch (error) {
     res.status(500).json(error);
   }
   },
   
   
   createUser: async (req, res) => {
     try {
       const newUser = await User.createUserSchema(req.body);
   
       res.status(200).json(newUser);
     } catch (error) {
       res.status(500).json(error);
     }
   },
   
   updateUser: async (req, res) => {
    try {
      const id = req.params.userId;
      const updateInfo = req.body;

     const updateUser = await User.updateUserSchema(id, updateInfo);

     res.status(200).json(updateUser);
    } catch (error) {
     res.status(500).json(error);
    }
     
   },
   
   deleteUser: async (req, res) => {
    try {
      
      const id = req.params.userId;
  
      const userRemoved = await User.deleteByIdUserSchema(id);

      const associatedThoughts = userRemoved.username;
      await Thought.removeThoughtsByUsernameThoughtSchema(associatedThoughts)
     
      res.status(200).json(userRemoved);
    } catch (error) {
      res.status(500).json(error);
    }
   },

   addFriends: async (req, res) => {
    try {
      const id = req.params.userId;
      const newFriend = req.params.friendId;

      const friendAdded = await User.addFriendByIdUserSchema(id,newFriend);

      res.status(200).json(friendAdded);
    } catch (error) {
      res.status(500).json(error);
    }
   },

   deleteFriend: async (req, res) => {
    try {
      const id = req.params.userId;
      const removeFriend = req.params.friendId;

      const friendRemoved = await User.removeFriendByIdUserSchema(id,removeFriend);

      res.status(200).json(friendRemoved);
    } catch (error) {
      res.status(500).json(error);
    }
   }

  };

module.exports = userControllerObject;