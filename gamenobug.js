class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
      this._item = "";
      this._lute = "";
      this._wrongitem = "";
    }
  
    set item(value) {
      this._item = value;
    }
  
    get item() {
      return this._item;
    }
    set wrongItem(value) {
      this._wrongitem = value;
    }
  
    get wrongItem() {
      return this._wrongitem;
    }
    set lute(value) {
        this._lute = value;
      }
    
    get lute() {
        return this._lute;
     }
  
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
  
    describe() {
      return "<u><strong>Location Description:</strong></u> Looking around the " + this._name + " you can see " + this._description;
    }
  
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
  
    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = [];
      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }
  
    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("You can't go that way");
        return this;
      }
    }
  }
  
  // Item class
  class Item {
    constructor(name) {
      this._name = name;
      this._description = "";
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Description is too short.");
        return;
      }
      this._description = value;
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    describe() {
      return "The friendly citizen in this room offers you the " + this._name + " is " + this._description;
    }
  }

// Item class
class wrongItem {
  constructor(name) {
    this._name = name;
    this._description = "";
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Description is too short.");
      return;
    }
    this._description = value;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  describe() {
    return "The other weapon in the room is the " + this._name + " is " + this._description;
  }
}

  
  // Character class
  class Character {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._conversation = "";
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Description is too short.");
        return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
        alert("Conversation is too short.");
        return;
      }
      this._conversation = value;
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
  
    describe() {
      return "<u><strong>Citizen:</strong></u> You have met " + this._name + ", " + this._name + " is " + this._description;
    }
  
    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
    }
  }
  
  // Enemy class
  class Enemy extends Character {
    constructor(name) {
      super(name);
      this._weakness = "";
    }
  
    set weakness(value) {
      if (value.length < 4) {
        alert("Description is too short.");
        return;
      }
      this._weakness = value;
    }
  
    fight(item) {
      if (item === this._weakness) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  
  
  
  // Individual room objects
  const Library = new Room("Library of Mushroom Land");
  Library.description = "a long narrow room with bookshelves on either side and multiple tables with 2 or 4 chairs.";
  
  const PoliceStation = new Room("Police Station");
  PoliceStation.description = "a small room with two desks, wardrobes with police uniforms and a large fireplace.";
  
  const MeatShop = new Room("Meat Shop of Mushroom Land");
  MeatShop.description = "a small shop with various meats and beverages on the shelves located behind the counter in the middle of the shop.";
  
  const KarateDojo = new Room("Karate Dojo");
  KarateDojo.description = "a wooden room with numerous karate posters on the walls and a large bench by the wall opposite the entrance of the room.";
  
  const CityCastle = new Room("City Castle");
  CityCastle.description = "a large room with large paintings around the walls, carpet on the floor, and a big wooden table.";
  
  // Link the rooms together
  PoliceStation.linkRoom("north", KarateDojo);
  KarateDojo.linkRoom("east", MeatShop);
  MeatShop.linkRoom("east", Library);
  Library.linkRoom("south", CityCastle);
  CityCastle.linkRoom("north", Library);
  Library.linkRoom("west", MeatShop);
  MeatShop.linkRoom("west", KarateDojo);
  KarateDojo.linkRoom("south", PoliceStation);
  
  // Set up items
  const Book = new Item("Book");
  Book.description = "which is a magical item with spells that should help defeat the Wizard Mushroom";
  
  const Pistol = new Item("Pistol");
  Pistol.description = "which is a powerful weapon with bullets, a good self-defense weapon";
  
  const Sword = new Item("Sword");
  Sword.description = "which is a magical sword with spells that should help defeat any enemy";

  
  
  // Assign items to rooms
  PoliceStation.item = Pistol;
  KarateDojo.item = Sword;
  Library.item = Book;
   
  MeatShop.item = "";
  CityCastle.item = "";
  
 // Set up items
 const Manuscript = new wrongItem("Manuscript");
 Manuscript.description = "which is a magical item ";
 
 const Knife = new wrongItem("Knife");
 Knife.description = "which is a powerful weapon ";
 
 const Nunchaku = new wrongItem("Nunchaku");
 Nunchaku.description = "which is a magical item";

//  Assign wrong items to rooms
 PoliceStation.wrongItem = Knife;
 KarateDojo.wrongItem = Nunchaku;
 Library.wrongItem = Manuscript;
 
 MeatShop.wrongItem = "";
 CityCastle.wrongItem = "";


 

// Allow user to collect item by pushing it to the array 
const itemsCreatedFromClass = []

itemsCreatedFromClass.push(Sword)
  itemsCreatedFromClass.push(Book)
  itemsCreatedFromClass.push(Pistol)


  // allow user to collect wrong item by pushing it to the array 
  const wrongItemsCreatedFromClass = []

  wrongItemsCreatedFromClass.push(Knife)
  wrongItemsCreatedFromClass.push(Nunchaku)
  wrongItemsCreatedFromClass.push(Manuscript)

  
  // Characters
  const ButcherMushroom = new Enemy("Butcher Mushroom");
  ButcherMushroom.conversation = "grrr need fresh royal blood";
  ButcherMushroom.description = "an angry butcher";
  ButcherMushroom.weakness = "sword";
  
  const KarateMushroom = new Enemy("Karate Mushroom");
  KarateMushroom.conversation = "grrr need fresh royal blood";
  KarateMushroom.description = "an angry karate teacher";
  KarateMushroom.weakness = "pistol";
  
  const WizardMushroom = new Enemy("Wizard Mushroom");
  WizardMushroom.conversation = "grrr need fresh royal blood";
  WizardMushroom.description = "an angry wizard";
  WizardMushroom.weakness = "book";
  
  const PoliceMushroom = new Character("Police Officer Mushroom");
  PoliceMushroom.conversation = "the state of the Mushroom Land and its citizens is horrifying. We need to end this madness.";
  PoliceMushroom.description = "good policeman";
  
  const WiseMushroom = new Character("Wise Mushroom");
  WiseMushroom.conversation = "Take my magical book to regain the power over the Mushroom Land";
  WiseMushroom.description = "a wise librarian";
  
  // Add characters to rooms
  CityCastle.character = WizardMushroom;
  KarateDojo.character = KarateMushroom;
  MeatShop.character = ButcherMushroom;
  PoliceStation.character = PoliceMushroom;
  Library.character = WiseMushroom;
  
  // Function to display room information
  function displayRoomInfo(room) {
    let occupantMsg = "";
    if (room.character === "") {
      occupantMsg = "";
    } else {
      occupantMsg = room.character.describe() + ". " + room.character.converse();
    }
    let itemMsg = ""
    if (room.item === "") {
      itemMsg = ""
    } else {
      itemMsg = room.item.describe() + ". "
    }
    let wrongitmMsg = ""
    if (room.wrongItem === "") {
      wrongitmMsg = ""
    } else {
      wrongitmMsg = room.wrongItem.describe() + ". "
    }
  
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
    occupantMsg + "</p>" + "<p>" + itemMsg + "</p>" + "<p>" + wrongitmMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("usertext").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
  }
  
  // Function to start the game
  function startGame() {
    // Set and display start room
    currentRoom = PoliceStation;
    console.log(currentRoom);
    displayRoomInfo(currentRoom);
  
    // Handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"];
        const validItems = ["pistol", "book", "sword"]
        const wrongItems = ["knife", "nunchaku", "manuscript"]
        if (directions.includes(command.toLowerCase())) {
          currentRoom = currentRoom.move(command);
          document.getElementById("usertext").value = "";
          displayRoomInfo(currentRoom);
        }  else if (
          command.startsWith("collect") && validItems.includes(command.split(" ")[1].toLowerCase())
        ) {
          const locateItemObject = itemsCreatedFromClass.find(item => item._name.toLowerCase() === command.split(" ")[1].toLowerCase())
          console.log(locateItemObject)
          collectItem(locateItemObject);
        } else if (
          command.startsWith("pickup") && wrongItems.includes(command.split(" ")[1].toLowerCase())
        ) {
          const wronglocateItemObject = wrongItemsCreatedFromClass.find(wrongitem => wrongitem._name.toLowerCase() === command.split(" ")[1].toLowerCase())
          console.log(wronglocateItemObject)
          collectWrongItem(wronglocateItemObject);
        } else if (
          command.trim().toLowerCase() === "hit") 
        {
          endGame();
        }       
        else {
          document.getElementById("usertext").value = "";
          alert("That is not a valid command. Please try again.");
        }
      }
    });
  }
  
  let userItems = [];

  function collectItem(itemName) {
    console.log(itemName)
    console.log(currentRoom)
      if (currentRoom._item && currentRoom._item._name.toLowerCase() === itemName._name.toLowerCase()) {
        console.log("condition is met")
        // Collect the item
        userItems.push(currentRoom.item);
        currentRoom._item = null; // Remove the item from the room
        console.log(currentRoom._item)
        
        
        const notificationElement = document.getElementById("textnotif");
        const itemStatus = document.getElementById("kingItem");

        // Modify the innerHTML to show the item has been collected
        notificationElement.innerHTML = "<p>You have successfully collected the item. Please move to the next location to continue the game.</p>";
        itemStatus.innerHTML = itemName._name + " has been collected";
        // Set a timeout to clear the notification after a few seconds (3 seconds)
        setTimeout(() => {
            notificationElement.innerHTML = "";
            
        }, 2000); // Adjust the duration as needed
    } else {
        const notificationElement = document.getElementById("textnotif");
        notificationElement.innerHTML = "<p>Sorry! There is no such item in this location. Try again :)</p>";

        // Set a timeout to clear the notification after a few seconds (3 seconds)
        setTimeout(() => {
            notificationElement.innerHTML = "";
        }, 2000);
    }
    

  }

  
  let wrongUserItems = [];

  function collectWrongItem(wrongitemName) {
    console.log(wrongitemName)
    console.log(currentRoom)
      if (currentRoom._item && currentRoom._wrongitem._name.toLowerCase() === wrongitemName._name.toLowerCase()) {
        console.log("condition is met")
        // Collect the item
        wrongUserItems.push(currentRoom.wrongitem);
        currentRoom._wrongitem = null; // Remove the item from the room
        console.log(currentRoom._wrongitem)
        
        
        const wrongnotificationElement = document.getElementById("textnotif");
        const wrongitemStatus = document.getElementById("kingItem");

        // Modify the innerHTML to show the item has been collected
        wrongnotificationElement.innerHTML = "<p>You have picked up the wrong item. You are losing the game!</p>";
        wrongitemStatus.innerHTML = wrongitemName._name + " has been picked up. This is not a good type of weapon to fight infected mushrooms. Game over ;(";
        // Set a timeout to clear the notification after a few seconds (3 seconds)
        setTimeout(() => {
            wrongnotificationElement.innerHTML = "";
            
        }, 2000); // Adjust the duration as needed
    } else {
        const wrongnotificationElement = document.getElementById("textnotif");
        wrongnotificationElement.innerHTML = "<p>Sorry! There is no such item in this location. Try again :)</p>";

        // Set a timeout to clear the notification after a few seconds (3 seconds)
        setTimeout(() => {
            wrongnotificationElement.innerHTML = "";
        }, 3000);
    }
    

  }

  //End game cotification 
function endGame() {
  const endNotification = document.getElementById("textnotif");
  endNotification.innerHTML = "<p> You won the game!</p>";
  console.log(endNotification);
}


  // User input
  let urName = "";
  
  // Function to take the user's name input
  const changeName = (name) => {
    urName = name;
    console.log(urName);
    un = document.getElementById("playerName");
    console.log(un);
    un.innerHTML = urName;
  };
  
  // Function to show the game area and populate player name
  const startG = () => {
    if (urName.length < 1) {
      alert("Please enter your name");
      return ;
    }
    document.getElementById("startpage").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
  };
  
  // Start the game
  startGame();