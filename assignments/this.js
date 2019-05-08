/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window scope is the window or console object that is "this"
* 2. A function that's called followed by a dot the object before the dot is "this"
* 3. When a constructor function is called the object that is returned is "this"
* 4. When .call() or .apply() is used "this" is explicitly defined 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const sayGoodbye = {
    farewell: 'Good bye',
    byeForever: function(name) {
        console.log(`${this.farewell}, ${name}`);
    }
}
sayGoodbye.byeForever('Steve');

// Principle 3
// code example for New Binding!
function GameObject(gameData) {
    this.createdAt = new Date();
    this.name = gameData.name;
    this.dimensions = gameData.dimensions;      
}
const gameData = {
name: 'Steve',
dimensions: { length: 50, width: 25, height: 65}
}
const game = new GameObject(gameData);

// Principle 4
// code example for Explicit Bindings
const yourObject = {
    name: 'Steve Barrett',
    city: 'Deland',
    favoriteFood: '🍕'
  }
  
  const thingsYouEnjoy = ['Gaming', 'JavaScript', 'Guitar']
  
  // Using yourObject and thingsYouEnjoy array, set the context of this on tellUsAboutYourself and call the function.
  const newFunction = tellUsAboutYourself.call(yourObject, thingsYouEnjoy[0], thingsYouEnjoy[1], thingsYouEnjoy[2]);

  newFunction;
  
  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
  } // The "this" above here is defined on the .call() ^^^ above and is "yourObject"