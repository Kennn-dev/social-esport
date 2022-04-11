const assert = require('assert')
const convert = require('../src')

describe('Test buffer-to-stream', () => {
  const ERR_MSG = `"buf" argument must be a string or an instance of Buffer`

  it('should throw when arguments is invalid', () => {
    assert.throws(() => convert(), ERR_MSG)
    assert.throws(() => convert(null), ERR_MSG)
    assert.throws(() => convert(1), ERR_MSG)
    assert.throws(() => convert(true), ERR_MSG)
    assert.throws(() => convert({}), ERR_MSG)
  })

  it('should convert string to stream correctly', done => {
    const reader = convert('hello, world!')
    reader.on('readable', () => {
      let text = ''
      let chunk
      while ((chunk = reader.read()) !== null) {
        text += chunk
      }
      assert.equal(text, 'hello, world!')
    })
    reader.on('end', () => {
      done()
    })
  })

  it('should convert buffer to stream correctly', done => {
    const buffer = Buffer.from('hello, world!', 'utf8')
    const reader = convert(buffer)
    reader.on('readable', () => {
      let theBuf = Buffer.alloc(0)
      let chunk
      while ((chunk = reader.read()) !== null) {
        theBuf = Buffer.concat([theBuf, chunk])
      }
      assert.ok(theBuf.equals(buffer))
    })
    reader.on('end', () => {
      done()
    })
  })

  it('should convert work correctly when setting chunkSize', done => {
    // alloc 160KB, and highWaterMark is 16KB
    const buffer = Buffer.allocUnsafe(16 * 1024 * 10)
    let i = 0
    let count = 0
    for (; i < 16 * 1024 * 1024; i++) {
      buffer[i] = i % 255
    }
    i = 0
    const theBuf = Buffer.allocUnsafe(buffer.length)
    const reader = convert(buffer, 256)
    reader.on('readable', () => {
      let chunk
      while ((chunk = reader.read()) !== null) {
        chunk.copy(theBuf, i, 0, chunk.length)
        i += chunk.length
      }
      count++
    })
    reader.on('end', () => {
      assert.deepEqual(count, 11)
      assert.ok(theBuf.equals(buffer))
      done()
    })
  })
})
