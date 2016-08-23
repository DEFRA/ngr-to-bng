'use strict'

const Lab = require('lab')
const lab = exports.lab = Lab.script()
const Code = require('code')
const ngrToBng = require('../index')
const data = require('./data.json')

lab.test('Convert NGR to BNG', (done) => {
  data.forEach((item) => {
    console.log('convert', item)
    let point = ngrToBng(item.ngr)
    Code.expect(point.easting).to.equal(item.easting)
    Code.expect(point.northing).to.equal(item.northing)
  })
  done()
})
