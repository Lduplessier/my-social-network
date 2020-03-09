const mongoose = require('mongoose')

const SchemaUser = new.mongoose.SchemaUser({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
}, {
  collection: 'users',
  minimmize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = SchemaUser
