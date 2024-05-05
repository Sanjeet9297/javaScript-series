// This is a Current Context
// Browser me this value is Window
// Node me this value is empty

const user = {
  username: "Sanjeet",
  price: 999,

  welcomeMessage: function(){
    console.log(` ${this.username}, welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Sanjay"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//   let username = "Sanjeet"
//   console.log(this.username);
// }

// chai()

// const chai = function (){
//   let username = "Sanjeet";
//   console.log(this.username);
// }


const chai = () => {
  let username = "Sanjeet";
  console.log(this);
};

//chai()


// Basic Arrow Function (Explicit)
// const addTwo = (num1, num2) => {
//   return num1 +  num2
// }


// Implicit Return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Sanjeet"})

console.log(addTwo(3,4));

const myArray = [2, 5, 6, 8, 9]

// myArray.forEach(function () {})
myArray.forEach(() =>  {});
myArray.forEach();