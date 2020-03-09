const mongoose = require('mongoose')

const SchemaFeed = new mongoose.Schema({
  feed_host: String,
  message: [
    {
      message_content: String,
      message_datetime: Date,
      message_author: String,
      message_comments: [
        {
          comment_content: String,
          comment_datetime: Date,
          comment_author: String
        }
      ]
    }
  ]
}, {
  collection: 'feeds',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = SchemaFeed