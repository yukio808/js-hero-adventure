
const Test = require('tape')
const VM = require('vm')
const FS = require('fs')

const CharacterFile = FS.readFileSync('./character.js')
const script = new VM.Script(CharacterFile)
script.runInThisContext()

Test('Hero', t => {
  t.equal(typeof hero, 'object', 'is the correct data type: Object')

  let correctKeys = [
    'name',
    'health',
    'age',
    'bag',
    'equipped'
  ]

  Object
    .keys(hero)
    .forEach(key => {
      t.true(correctKeys.includes(key), `has proper key: ${key}`)
    })

  t.end()
})