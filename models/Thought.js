const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  },
  {
    toJSON: {
    },
  }
);

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'reactionSchema', }]
  },
  {
    toJSON: {
    },
  }
);
reactionSchema.virtual('reactionCount').get(function () {
  return this.reactionCount.length
})

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;
