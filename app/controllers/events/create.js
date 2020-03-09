const User = require('../../models/event.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/event/create', (req, res) => {
      try {
        const eventModel = new this.EventModel(req.body)

        eventModel.save().then(user => {
          res.status(200).json(user || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Create
