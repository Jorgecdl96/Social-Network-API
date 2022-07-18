const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true

    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => {
           return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
        message: 'Please enter a valid email'
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

userSchema.statics.getUserSchema = function() {
 return this.find({});
};

userSchema.statics.getOneUserSchema = function (id){
  return this.findById(id).populate('thoughts').populate('friends');
};

userSchema.statics.createUserSchema = function (data){
  return this.create(data);
};

userSchema.statics.updateUserSchema = function (id, body){
  return this.findOneAndUpdate(
    {_id: id},
    { $set: {body} },
    { runValidators: true, new: true }
  );
};

userSchema.statics.deleteUserSchema = function (id){
  return this.findByIdAndDelete(id);
};

const User = model('user', userSchema);


module.exports = User; 
