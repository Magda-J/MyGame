class Entity {
    constructor(name, description, location, occupation) {
        this._name = name
        this._description = description
        this._location = location
        this._occupation = occupation
    }

    describe() {
        return `I am a ${this._name} and I am ${this._description}.`
    }
}

class AngryMushroom extends Entity {
    constructor(name, description, location, occupation, murderWeapon, dialogue) {
        super(name, description, location, occupation)
        this._murderWeapon = murderWeapon
        this._dialogue = dialogue
    }

    describe() {
        return `I am a ${this._occupation}, I am ${this._description} and I am usually located at ${this._location}, my typical work tool is ${this._murderWeapon}.`
    }
    talk() {
                return this._dialogue
            }

    attack(target) {
        target._health -= this._attackDamage
    }
}

const WiseMushroom = new AngryMushroom('Wise Mushroom', 'a mushroom that is very knowledgeable', 'Library of Mushroom Land', 'Librarian','Book', 'I like books.')
const PoliceMushroom = new AngryMushroom('Police Officer Mushroom', 'a mushroom that keeps citizens safe', 'Police Station', 'Police Officer', 'Pistol', 'I like catching criminals.')
const ButcherMushroom = new AngryMushroom('Butcher Mushroom', 'a mushroom that works as a butcher', 'Meat Shop of Mushroom Land', 'Butcher', 'Axe', 'I like to provide fresh meat to citizens.')
const KarateMushroom = new AngryMushroom('Karate Mushroom', 'a mushroom that knows marital arts', 'Karate dojo of Mushroom Land', 'Karate Teacher', 'Kick', 'I like to teach karate to citizens.')

console.log(WiseMushroom.describe())
console.log(PoliceMushroom.describe())
console.log(ButcherMushroom.describe())
console.log(KarateMushroom.describe())

console.log(WiseMushroom.talk())
console.log(PoliceMushroom.talk())
console.log(ButcherMushroom.talk())
console.log(KarateMushroom.talk())

class GoodMushroom extends Entity {
    constructor(name, description, location, occupation, weapon) {
        super(name, description, location, occupation)
        this._weapon = weapon
        
    }

    describe() {
        return `I am a ${this._occupation}, I am ${this._description} and I am usually located at ${this._location}, my typical work tool is ${this._weapon}.`
    }

    attack(target) {
        target._health -= this._attackDamage
    }

}

const MushroomKing = new GoodMushroom('Mushroom King', 'a mushroom that is a king', 'Castle of Mushroom Land', 'Ruler of the Mushroom Land', 'Sword')
console.log(MushroomKing.describe())

class Room extends Entity {
    constructor(name, description, location, obstacles, linkedRooms) {
        super(name, description, location)
        this._obstacles = obstacles
        this._linkedRooms = {}
    
}
describe() {
    return `This is a ${this._name}, know by the citizens as ${this._description} and it is located at ${this._location}.`
}

linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }

move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      alert("You can't go that way",);
      alert(this._name)
      return this;
    }
  }


}



const Library = new Room('Library of Mushroom Land', 'a large library of mushrooms', 'City Centre', 'Shelves with books')
const PoliceStation = new Room('Police Station', 'a police station', 'Suburbs of Mushroom Land', 'Desks')
const MeatShop = new Room('Meat Shop of Mushroom Land', 'a large shop where all sorts of meat is sold', 'City Centre', 'Pieces of Meat')
const KarateDojo = new Room('Karate Dojo', 'a karate school', 'City Centre', 'Students')
const CityCastle = new Room('City Castle', 'a city castle', 'Heart of the City', 'Tables')

console.log(Library.describe())
console.log(PoliceStation.describe())
console.log(KarateDojo.describe())
console.log(MeatShop.describe())
console.log(CityCastle.describe())


PoliceStation.linkRoom("north", KarateDojo);
KarateDojo.linkRoom("east", MeatShop);
MeatShop.linkRoom("east", Library);
Library.linkRoom("south", CityCastle);
CityCastle.linkRoom("north", Library);
Library.linkRoom("west", MeatShop);
MeatShop.linkRoom("west", KarateDojo);
KarateDojo.linkRoom("south", PoliceStation);


