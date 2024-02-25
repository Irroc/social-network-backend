const { Schema, model } = require('mongoose');

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
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'friends'}]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// userSchema.virtual('friendCount').get(function() {
//   return this.friendCount.length
// })

const User = model('user', userSchema)

module.exports = User