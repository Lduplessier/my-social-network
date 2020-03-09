const User = require('../../models/user.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.FeedModel = connect.model('Feed', Feed)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/feed/create', (req, res) => {
      try {
        const feedModel = new this.UserModel(req.body)

        feedModel.save().then(user => {
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
