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
    this.app.delete('/feed/delete/:id', (req, res) => {
      try {
        const { id } = req.params

        res.status(200).json(feeds.map(feed => feed.id !== id ? feed : false))
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
