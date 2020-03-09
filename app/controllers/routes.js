const CreateUser = require('./users/create.js')
const ShowUser = require('./users/show.js')
const UpdateUser = require('./users/update.js')
const DeleteUser = require('./users/delete.js')
const CreateEvent = require('./events/create.js')
const ShowEvent = require('./events/show.js')
const UpdateEvent = require('./events/update.js')
const DeleteEvent = require('./events/delete.js')
const CreateGroup = require('./groups/create.js')
const ShowGroup = require('./groups/show.js')
const UpdateGroup = require('./groups/update.js')
const DeleteGroup = require('./groups/delete.js')
const CreateFeed = require('./feeds/create.js')
const ShowFeed = require('./feeds/show.js')
const UpdateFeed = require('./feeds/update.js')
const DeleteFeed = require('./feeds/delete.js')

module.exports = {
  users: {
    CreateUser,
    ShowUser,
    UpdateUser,
    DeleteUser
  },
  events: {
    CreateEvent,
    ShowEvent,
    UpdateEvent,
    DeleteEvent
  },
  groups: {
    CreateGroup,
    ShowGroup,
    UpdateGroup,
    DeleteGroup
  },
  feeds: {
    CreateFeed,
    ShowFeed,
    UpdateFeed,
    DeleteFeed
  }
}
