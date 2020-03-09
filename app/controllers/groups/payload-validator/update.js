// Dependecies

const _ = require('node-validator')

module.exports = _.isObject()
  .withRequired('group_name', _.isString())
  .withOptional('group_description', _.isString())
  .withOptional('group_icon', _.isString())
  .withOptional('group_banner', _.isString())
  .withRequired('group_type', _.isString())
  .withOptional('group_member', _.isObject()
    .withOptional('user_id', _.isString())
    .withOptional('can_post', _.isBoolean())
    .withOptional('is_admin', _.isBoolean()))
  