const sha1 = require("sha1");

let congressmen = [
  "Alcee Hastings",
  "Alfred Lawson",
  "Bill Posey",
  "Brian Mast",
  "Carlos Curbelo",
  "Charlie Crist",
  "Daniel Webster",
  "Darren Soto",
  "Debbie Wasserman Schultz",
  "Dennis Ross",
  "Francis Rooney",
  "Frederica Wilson",
  "Gus Bilirakis",
  "Ileana Ros-Lehtinen",
  "John Rutherford",
  "Kathy Castor",
  "Lois Frankel",
  "Mario Diaz-Balart",
  "Matt Gaetz",
  "Neal Dunn",
  "Stephanie Murphy",
  "Ted Deutch",
  "Ted Yoho",
  "Thomas Rooney",
  "Val Demings",
  "Vern Buchanan"
];

function BinarySearchTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.getMin = function() {
  if (this.left) {
    return this.left.getMin();
  } else {
    return this.value;
  }
};

BinarySearchTree.prototype.insert = function(value) {
  let subtree = value < this.value ? "left" : "right";
  if (this[subtree]) {
    this[subtree].insert(value);
  } else {
    this[subtree] = new BinarySearchTree(value);
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value) {
    return true;
  }

  let subtree = val < this.value ? "left" : "right";

  if (this[subtree]) {
    return this[subtree].contains(val);
  } else {
    return false;
  }
};

let encryptedCongressData = [];

for (let i = 0; i < congressmen.length; i++) {
  encryptedCongressData.push(sha1(congressmen[i]));
}

let keyVal = [];

for (let k = 0; k < congressmen.length; k++) {
  keyVal.push({
    name: congressmen[k],
    value: encryptedCongressData[k],
  });
}

let binarySearch = new BinarySearchTree(encryptedCongressData[0]);

for (let i = 1; i < encryptedCongressData.length; i++) {
  binarySearch.insert(encryptedCongressData[i]);
}

BinarySearchTree.prototype.findvalue = function(keyValObj, searchLetter) {
  for (let i = 0; i < keyValObj.length; i++) {
      if(keyValObj[i].name.substring(0,1) == searchLetter ){
        console.log(`${keyValObj[i].name} : ${keyValObj[i].value}`);
      }
    
  }
};

console.log(" ");
binarySearch.findvalue(keyVal, "D");
