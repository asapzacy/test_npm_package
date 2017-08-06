const expect = require('chai').expect
const app = require('../app')

describe('#app', () => {
  it('should capitalize a first name', () => {
    const result = app('zac')
    expect(result).to.equal('Zac')
  })
  it('should capitalize a full name', () => {
    const result = app('zac arellano')
    expect(result).to.equal('Zac Arellano')
  })
  it('should capitalize a sentence', () => {
    const result = app('the quick brown fox jumps over the lazy dog')
    expect(result).to.equal('The Quick Brown Fox Jumps Over The Lazy Dog')
  })
 it('should do nothing on an emtpy string', () => {
    const result = app('')
    expect(result).to.equal('')
  })
})