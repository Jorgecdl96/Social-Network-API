const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create user model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString('en-US'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

thoughtSchema.statics.getThoughtSchema = function() {
  return this.find({});
 };
 
 thoughtSchema.statics.getOneThoughtSchema = function (id){
   return this.findById(id);
 };
 
 thoughtSchema.statics.createThoughtSchema = function (data){
   return this.create(data);
 };
 
 thoughtSchema.statics.updateThoughtSchema = function (id, body){
   return this.findOneAndUpdate(
     {_id: id},
     { $set: body },
     { runValidators: true, new: true }
   );
 };
 
 thoughtSchema.statics.deleteByIdThoughtSchema = function (id){
   return this.findByIdAndDelete(id);
 };
 
 thoughtSchema.statics.addReactionByIdThoughtSchema = function (id,reaction){
   return this.findOneAndUpdate(
     {_id: id},
     { $addToSet: {reactions: reaction} },
     { runValidators: true, new: true }
   );
 };
 
 thoughtSchema.statics.removeReactionByIdThoughtSchema = function (id,deleteReaction){
   return this.findOneAndUpdate(
     {_id: id},
     { $pull: {reactions: {reactionId:  deleteReaction}} },
     { runValidators: true, new: true }
   );
 };
 
 thoughtSchema.statics.removeThoughtsByUsernameThoughtSchema = function (deleteThoughts){
  return this.findOneAndDelete({username: deleteThoughts});
};

const Thought = model('thought', thoughtSchema);

module.exports = Thought; 
