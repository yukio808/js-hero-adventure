
// gather information from story
var firstName = 'Jon';
var lastName = 'Cornfield';
var age = 24;
var bag = ['excalibur', 'potion', 'armor', 'map'];

// build hero based on information gathered
var hero = {
  name: firstName + ' ' + lastName,
  health: 11,
  age: age,
  bag: bag,
  equipped: null
};
// conditionals can be the 'training area'
// if(hero.equiped == 'excalibur'){
// console.log('I will defeat the dragon');
// } else {
//   console.log('You cannot defeat the dragon');
// }

// send hero off to find and kill the dragon terrorizing the town
// $ npm run adventure
//
// tests will run and the story will either pass or fail
// if it fails, it will output data to the student about what went wrong and
// based on the information they will need to update the hero object and retry.
