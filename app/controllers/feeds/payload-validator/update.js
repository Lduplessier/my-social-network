// Dependencies
const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('feed_host', _.isString())
  .withOptional('message', _.isObject()
    .withOptional('message_content', _.isString())
    .withOptional('message_datetime', _.isDate())
    .withOptional('message_author', _.isString())
    .withOptional('message_comments', _.isObject()
      .withOptional('comment_content', _.isString())
      .withOptional('comment_datetime', _.isDate())
      .withOptional('comment_author', _.isString())
    )
  )