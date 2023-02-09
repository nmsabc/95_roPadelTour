const chai = require('chai')
const expect = chai.expect

const foo = require('../../src/pages/CountComments')

describe('CountComments', function () {
  it('should be a function', function () {
    expect(CountComments).to.be.a('function')
  })
  it('should take one parameter', function () {
    expect(
      CountComments.bind(null, { param1: 5, param2: 345, param3: 98 }))
      .to.not.throw(Error)
  })
  it('should throw error if the parameter is missing', function () {
    expect(CountComments.bind(null, {})).to.throw(Error)
  })
  it('should throw error if the parameter does not have 3 values', function () {
    expect(CountComments.bind(null, { param1: 4, param2: 1 })).to.throw(Error)
  })
  it('should return the sum of three values', function () {
    expect(CountComments({ param1: 1, param2: 2, param3: 3 })).to.equal(6)
  })
})