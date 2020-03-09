const users = require('../../models/')
const check = require('./payload-validator/update.js')
const validator = require('node-validator')

/**
 * Create
 * @class
 */
class Update {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.put('/group/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        const group = group.find(group => group.id === id) || false

        if (!group) {
          res.status(200).json({})

          return
        }

        res.status(200).json(Object.assign({}, group, body))
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

module.exports = Update
