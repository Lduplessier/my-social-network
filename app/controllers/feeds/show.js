const User = require('../../feed/user.js')

/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('Feed', Feed)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/feed/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.FeedModel.findById(id).then(feed => {
          res.status(200).json(feed || {})
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

module.exports = Show
