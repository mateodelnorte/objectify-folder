import objectifyFolder from '../modules.js'
import path from 'path'
import assert from 'assert'

console.log('starting tests')

let f = objectifyFolder(path.resolve(process.cwd(), 'support-mjs'))
// assert(f.module)
setTimeout(() => {
  assert(f['module'].module === 'module')
  assert(f['default'].default.hello === 'world')
}, 100)

console.log('tests passed')