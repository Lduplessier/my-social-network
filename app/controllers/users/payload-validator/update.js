// Dependencies
const _ = require('node-validator')

module.exports = _.isObject()
  .withRequired('first_name', _.isString())
  .withRequired('last_name', _.isString())
  .withRequired('email', _.isString({
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
    message: 'Invalid email'
  }))
  .withRequired('password', _.isString())
