import setupDebug from 'debug'
import objectifyFolder from '../modules.js'
import path from 'path'
import assert from 'assert'

let debug = setupDebug('objectify-folder')
debug('starting module tests')

const test = async () => {
  let modules = await objectifyFolder(path.resolve(process.cwd(), 'support-mjs'))

  debug(modules)

  assert(modules['module'].module === 'module')
  assert(modules['default'].default.hello === 'world')

  try {
    await objectifyFolder(path.resolve(process.cwd(), 'support-mjs-broken'))
  } catch (e) {
    assert(e instanceof Error)
  }

  debug('module tests passed')

}

test()
