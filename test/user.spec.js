/*eslint-env node, mocha */

// Dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../app/server.js')

// Core
const server = new Server()

server.run()

const app = server.app
const should = chai.should()

chai.use(chaiHttp)

let userCreate

/**
 * GET /user
 */
describe('/user', () => {
  it('GET /create should and 404 error', (done) => {
    const result = '{"code":404,"message":"Not Found"}'

    chai.request(app)
      .post('/user/notexist')
      .end((err, res) => {
        res.should.have.status(404)

        JSON.stringify(JSON.parse(res.text)).should.be.eql(result)

        done()
      })
  })

  it('POST /create should create an user', (done) => {
    const result = '{"image_profil":"https://www.g33kmania.com/wp-content/uploads/Tyrion-Lannister-400x400.jpg","email":"cyril@gmail.com","password":"123456789"}'
    const payload = { "email": "cyril@gmail.com", "password": "123456789" }

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse(res.text)

        userCreate = JSON.parse(JSON.stringify(response))

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })
})
