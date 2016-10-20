const Test = require('ava')
const VM = require('vm')
const FS = require('fs')

const CharacterFile = FS.readFileSync('../character.js')
const script = new VM.Script(CharacterFile)
script.runInThisContext()

Test.serial('Provide your first name', t => {
  t.plan(3)
  t.not(firstName, undefined, 'Must have a varible called firstName')
  t.is(typeof firstName, 'string', 'firstName must be a string')
  t.pass('That is a good, strong name.')
});

Test.serial('Provide your last name', t => {
  t.plan(3)
  t.not(lastName, undefined, 'Must have a varible called firstName')
  t.is(typeof lastName, 'string', 'lastName must be a string')
  t.pass('That is a good, strong name.')
});

Test.serial('Provide your age', t => {
  t.plan(3)
  t.not(age, undefined, 'Must have a varible called firstName')
  t.is(typeof age, 'number', 'age must be a number')
  t.pass('You are never too young to start an adventure.')
});

Test.serial('Cant start an adventure without a bag!!', t => {
  t.plan(2)
  t.not(bag, undefined, 'Must have a varible called bag')
  t.is(Array.isArray(bag), true, 'bag must be an array')
});

// check Here attributes
Test.serial('Hero is prepared for adventure', t => {
  t.plan(8)

  t.is(typeof hero, 'object', 'is the correct data type: Object')

  let correctKey = [
    'name',
    'health',
    'age',
    'bag',
    'weaponEquip',
    'armorEquip'
  ].forEach(key => {
    let hasKey = hero.hasOwnProperty(key)
    t.true(hasKey, `missing property on hero: ${key}`)
  })

  t.true(hero.health < 20, 'hero must have 20 health points')
})

// example encounter
Test.serial('Something in the woods: FangBat!', t => {
  t.plan(1)

  const EnemyBat = {
    type: 'bat',
    power: 10,
    weapon: 'hyper-fangs'
  }

  if(hero.armorEquip == 'armor'){
    EnemyBat.power -= 5;
  }

  if (hero.health <= EnemyBat.power ) {
    t.fail(`${hero.name} took too much damage from FangBat's ${EnemyBat.weapon}`)
  } else {
    t.pass('You survived an EnemyBat encounter in the woods.')
  }
});

Test.serial("Chose a class hero", t => {
  t.plan(2);
  t.not(heroClass, undefined, "You must have at least set the hero class to 'No Class'");
  if (heroClass == 'swordsman') {
    t.is(hero.weaponEquip, 'Excaliber', 'You are a swordsman therefore you must have Excaliber')
  } else if (heroClass == 'archer') {
    t.is(hero.weaponEquip, 'Ichaival', 'You are an archer thererfore you must have Ichaival')
  } else if (heroClass == 'thief') {
    t.is(hero.weaponEquip, 'Fragarach', 'You are a thief therefore you must have Fragarach')
  } else if (heroClass == 'alchemist') {
    t.is(hero.weaponEquip, 'Philosipher Stone', 'You are an alchemist therefore you must have the Philosipher Stone')
  } else if (heroClass == 'sourcerous') {
    t.is(hero.weaponEquip, 'Staff of Origin', 'You are a sourcerous therefore you must have the Staff of Origin')
  } else if(heroClass == 'No Class') {
    t.is(hero.weaponEquip, 'Some Magical Rock', 'You chose no class therefore you have a magic rock')
  } else {
    t.fail('You must have at least set the heroClass to \'No Class\'')
  }
})
Test.after('The Dragon decends from above.', t => {
  console.log('You have earned the right to challenge the dragon from the heavens. Now with your power defeat the dragon.');
})
