/**
 * create a variable called `firstName` with your first name as a value.
 * @type {String}
 */
var firstName = 'Jon';

/**
 * create a variable called `lastName` with your first name as a value.
 * @type {String}
 */
var lastName = 'Cornfield';

/**
 * create a variable called `age` with your current age.
 * @type {Number}
 */
var age = 10;

/**
 * create a variable called `bag` with 2 items: `armor` and `map`.
 * @type {Array}
 */
var bag = ['armor', 'map'];

/**
 * create a variable called `heroClass` that will be one of 6 options.
 * You will determine what class you want to be and work with.
 * 'Archer', 'Swordsman', 'Sorcerous', 'thief', 'alchemist', or 'No Class'
 * @type {String}
 */
var heroClass = "No Class";// swordsman sourcerous archer thief alchemist

/**
 * Create a variable called hero
 * @type {Object}
 * @property `name`: Your first and last name separated with a space.
 * @property `health`: Set the value of your heath to be half your age.
 * @property `age`: Your age.
 * @property `bag`: Your bag that you created earlier.
 * @property `armorEquip`: Set it to `null` not in quotes.
 * @property `weaponEquip`: Set it to `null` not in quotes.
 * @property `heroClass`: Set it to your hero class.
 */
var hero = {
  name: firstName + ' ' + lastName,
  health: (age / 2),
  age: age,
  bag: bag,
  armorEquip: null,
  weaponEquip: null,
  heroClass: heroClass
};

/**
 * Create a condition that will equip the 'armor' from the bag
 * if your health is less than or equal to 10.
 */
if (hero.health <= 10) {
  hero.armorEquip = bag[0];
}

/**
 * Create conditions that will give you a spacific item based on what your class is.
 * `Archer`: Ichaival
 * `Swordsman`: Excalibur
 * `Sorcerous`: Staff of Origin
 * `thief`: Fragarach
 * `alchemist`: Philosopher Stone
 * `No Class`: Some Magical Rock
 */
if (hero.heroClass == "swordsman") {
  hero.weaponEquip = "Excaliber";
} else if (hero.heroClass == "sorcerous") {
  hero.weaponEquip = "Staff of Origin";
} else if (hero.heroClass == "archer") {
  hero.weaponEquip = "Ichaival";
} else if (hero.heroClass == "thief") {
  hero.weaponEquip = "Fragarach";
} else if (hero.heroClass == "alchemist") {
  hero.weaponEquip = "Philosopher Stone";
} else {
  hero.weaponEquip = "Some Magical Rock";
}
