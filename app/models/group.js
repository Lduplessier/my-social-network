const mongoose = require('mongoose')

const SchemaGroup = new mongoose.SchemaGroup({
  group_name: String,
  group_description: String,
  group_icon: String,
  group_banner: String,
  group_type: String,
  groupe_members: 
    {
      user_id: String,
      can_post: Boolean,
      is_admin: Boolean
    }
}, {
  collection:'group',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})
