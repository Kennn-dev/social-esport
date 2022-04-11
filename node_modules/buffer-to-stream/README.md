[![Build Status](https://travis-ci.org/creeperyang/buffer-to-stream.svg?branch=master)](https://travis-ci.org/creeperyang/buffer-to-stream)
[![npm version](https://badge.fury.io/js/buffer-to-stream.svg)](https://badge.fury.io/js/buffer-to-stream)
[![Dependency Status](https://david-dm.org/creeperyang/buffer-to-stream.svg)](https://david-dm.org/creeperyang/buffer-to-stream)

# buffer-to-stream

> Convert buffer or string to readable stream.

[![NPM](https://nodei.co/npm/buffer-to-stream.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/buffer-to-stream/)

## Usage

```js
const toStream = require('buffer-to-stream')

const readable = toStream(Buffer.from('hello world!', 'utf8'))
readable.on('readable', () => {
  let chunk
  while ((chunk = reader.read()) !== null) {
    console.log('got data', chunk)
  }
})
readable.on('end', () => console.log('done'))
```

## API

**`toStream(buffer[, chunkSize])`**

- `buffer` is the source buffer or string, and the type is `String|Buffer`.
- `chunkSize` specifies stream data push chunk size, and type is `Number`.

And the return value is a readable stream.

## License

[MIT](/LICENSE)