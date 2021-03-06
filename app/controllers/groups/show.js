const User = require('../../models/group.js')

/**
 * Create
 * @class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.GroupModel = connect.model('Group', Group)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/group/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.GroupModel.findById(id).then(group => {
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

module.exports = Show
