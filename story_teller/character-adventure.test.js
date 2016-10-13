
const Test = require('ava')
const VM = require('vm')
const FS = require('fs')

const CharacterFile = FS.readFileSync('../character.js')
const script = new VM.Script(CharacterFile)
script.runInThisContext()

// check Hero attributes
Test.serial('Hero is prepared for adventure', t => {
  t.plan(7)

  t.pass('Your Hero is prepared for adventure!');
  t.is(typeof hero, 'object', 'is the correct data type: Object')

  let correctKey = [
    'name',
    'health',
    'age',
    'bag',
    'equipped'
  ].forEach(key => {
    let hasKey = hero.hasOwnProperty(key)
    t.true(hasKey, `missing property on hero: ${key}`)
  })

})

Test.serial('Something in the woods: FangBat', t => {
  t.plan(4)

  t.pass('You encounter a FangBat in the woods just outside of town')

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

  if (hero.bag.includes('potion')) {
    t.pass('Your hero uses a cure poison potion to heal')
    hero.bag.splice(hero.bag.indexOf('cure poison potion'), 1)
  } else {
    t.fail(`${hero.name} cannot heal and returns to town`)
  }

  t.pass('you complete the first adventure')
})