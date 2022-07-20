const { Thought, User } = require('../models');

thoughtControllerObject = {
  getThoughts: async (req, res) => {
    try {
   
      const thoughts = await Thought.getThoughtSchema();
   
      res.status(200).json(thoughts);
   
    } catch (error) {
     res.status(500).json(error);
    }
   
   },
   
  getOneThought: async (req,res) => {
   try {
     const oneThought = await Thought.getOneThoughtSchema(req.params.thoughtId);

      res.status(200).json(oneThought);
        
   } catch (error) {
     res.status(500).json(error);
   }
   },
   
   
   createThought: async (req, res) => {
     try {
       const newThought = await Thought.createThoughtSchema(req.body);

       await User.findOneAndUpdate(
        {_id: req.body.userId},
        {$addToSet: {thoughts: newThought._id}},
        {runValidators: true, new: true}
       );
   
       res.status(200).json(newThought);
     } catch (error) {
       res.status(500).json(error);
     }
   },
   
   updateThought: async (req, res) => {
    try {
      const id = req.params.thoughtId;
      const updateInfo = req.body;

     const updateThought = await Thought.updateThoughtSchema(id, updateInfo);

     res.status(200).json(updateThought);
    } catch (error) {
     res.status(500).json(error);
    }
     
   },
   
   deleteThought: async (req, res) => {
    try {
      
      const id = req.params.thoughtId;
  
      const thoughtRemoved = await Thought.deleteByIdThoughtSchema(id);
     
      res.status(200).json(thoughtRemoved);
    } catch (error) {
      res.status(500).json(error);
    }
   },

   postReactions: async (req, res) => {
    try {
      const id = req.params.thoughtId;
      const reaction = req.body;

      const newReaction = await Thought.addReactionByIdThoughtSchema(id,reaction);

      res.status(200).json(newReaction);
    } catch (error) {
      res.status(500).json(error);
    }
   },

   removeReaction: async (req, res) => {
    try {
      const id = req.params.thoughtId;
      const deleteReaction = req.body.reactionId;

      const reactionRemoved = await Thought.removeReactionByIdThoughtSchema(id,deleteReaction);

      res.status(200).json(reactionRemoved);
    } catch (error) {
      res.status(500).json(error);
    }
   }
};

module.exports = thoughtControllerObject
