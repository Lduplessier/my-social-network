const users = require('../../models/')

/**
 * Create
 * @class
 */
class Delete {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/event/delete/:id', (req, res) => {
      try {
        const { id } = req.params

        res.status(200).json(events.map(event => event.id !== id ? event : false))
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

module.exports = Delete
