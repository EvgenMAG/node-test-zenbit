const mongoose = require('mongoose')
const { Schema } = mongoose
const mongoosePaginate = require('mongoose-paginate-v2')

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
      min: 2,
      max: 24,
    },
    email: {
      type: String,
      required: [true, 'User email is required'],
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
    },

  },
  { versionKey: false, timestamps: true }
)

feedbackSchema.plugin(mongoosePaginate)

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback
