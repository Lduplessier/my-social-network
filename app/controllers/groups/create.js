const User = require('../../models/group.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/group/create', (req, res) => {
      try {
        const groupModel = new this.GroupModel(req.body)

        userModel.save().then(user => {
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
