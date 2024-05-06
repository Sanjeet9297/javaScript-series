// if
//const isUserLoggedIn = true
//const temperature = 41

// if( temperature === 40 ){
//   console.log("Less than 50");
// }
// else{
//   console.log("Temperature is greater than 50");
// }

// console.log("Executed");


// < , > , <=, >=, != , ===, !==


// const score = 200 

// if(score > 100){
//   let power = "fly"
//   console.log(`User Power ${power}`);
// }
//  console.log(`User Power ${power}`);

//const balance = 1000 

//if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//   console.log("less than");

// } else if( balance < 750){
//   console.log("less than");
// }
// else if (balance < 900){
//   console.log("less than");
// }
//  else{
//   console.log("less than 1200");
//  }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2== 3)
  {
  console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");
}