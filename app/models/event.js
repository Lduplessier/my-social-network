const mongoose = require('mongoose')

const SchemaEvent = new mongoose.SchemaEvent({
  event_name: String,
  event_description: String,
  start_date: Date,
  end_date: Date,
  location: String,
  event_banner: String,
  status: Boolean,
  organisator: String,
  participants: String,
  photo_album: [
    {
      photo: String,
      photo_comments: 
      {
        comments: String
      }
    }
  ],
  tickets: [
    {
      ticket_name: String,
      price: Number,
      amount: Number
    }
  ],
  envent_survey: [
    {
      survey: [
        {
          question: String,
          number_answer: [
            {
              answer: String
            }
          ]
        }
      ]
    }
  ]
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = SchemaEvent
