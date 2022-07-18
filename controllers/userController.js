const { Thought, User } = require('../models');

// const getAllUsers = (req, res) => {
//     User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(500).json(err));
// };

// const getSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.userId })
//       .select('-__v')
//       .populate('thought')
//       .populate('user')
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'No user with that ID' })
//           : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
// };

// const newUser = (req, res) => {
//     User.create(req.body)
//       .then((dbUserData) => res.json(dbUserData))
//       .catch((err) => res.status(500).json(err));
// }

// const updateUser = (req, res) => {
//     User.findOneAndUpdate(
//         {_id: req.params.ThoughtId},
//         { $set: req.body },
//         { runValidators: true, new: true }
//     )
//     .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'No user with this id!' })
//           : res.json(user)
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// }
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
     
      res.status(200).json(userRemoved);
    } catch (error) {
      res.status(500).json(error);
    }
   }

  };

module.exports = userControllerObject;