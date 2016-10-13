
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
  t.comment('Your Hero is prepared for adventure!')
  t.end()
})

Test('Something in the woods...', t => {
  t.comment('You encounter a FangBat in the woods just outside of town')
  const EnemyBat = {
    type: 'bat',
    power: 10,
    weapon: 'hyper-fangs'
  }

  if (hero.health <= EnemyBat.power) {
    t.fail(`${hero.name} took too much damage from FangBat's ${EnemyBat.weapon}`)
  } else {
    t.pass('You survived an EnemyBat encounter in the woods.')
  }

  t.end()
})