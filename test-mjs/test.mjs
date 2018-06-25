import objectifyFolder from '../modules.js'
import path from 'path'
import assert from 'assert'

console.log('starting module tests')

const test = async () => {
  let modules = await objectifyFolder(path.resolve(process.cwd(), 'support-mjs'))

  console.log('modules', modules)

  assert(modules['module'].module === 'module')
  assert(modules['default'].default.hello === 'world')

  try {
    await objectifyFolder(path.resolve(process.cwd(), 'support-mjs-broken'))
  } catch (e) {
    console.log(e)
    assert(e)
  }

  console.log('module tests passed')

}

test()
