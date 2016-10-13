
// gather base information from story or through instruction
var firstName = 'Jon';
var lastName = 'Cornfield';
var age = 24;
var bag = ['armor', 'map'];

// build hero based on information gathered
var hero = {
  name: firstName + ' ' + lastName,
  health: 11,
  age: age,
  bag: bag,
  equipped: null
};

// go to store to purchase items?
// inventory can be updated through store function
hero = store(hero, 'cure poison potion')

// store interface mock
function store(person, itemToBuy) {
  let itemsForSale = [
    'cure poison potion'
  ];

  if (itemsForSale.includes(itemToBuy)) {
    person.bag.push(itemToBuy);
    return person;
  } else {
    throw Error(`Sorry out of ${itemToBuy}`)
  }
}

// send hero off to find and kill the dragon terrorizing the town
// $ npm run adventure
//
// hero will experience encounters while on the journey to find the dragon
//
// tests will run and the story will either pass or fail
// if it fails, it will output data to the student about what went wrong and
// based on the information they will need to update the
// hero by going to the store, etc.