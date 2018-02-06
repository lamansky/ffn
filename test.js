'use strict'

const assert = require('assert')
const ffn = require('.')

const arr = [1, 2, 3, 4, 5]

describe('ffn()', function () {
  it('should return a function as-is', function () {
    assert.strictEqual(arr.find(ffn(x => x % 2 === 0)), 2)
  })

  it('should test for inclusion in an array', function () {
    assert.strictEqual(arr.find(ffn([4, 5])), 4)
  })

  it('should test for equality with a value', function () {
    assert.strictEqual(arr.find(ffn(3)), 3)
  })

  it('should test for truthiness if argument is undefined', function () {
    assert.strictEqual(arr.find(ffn()), 1)
  })
})
