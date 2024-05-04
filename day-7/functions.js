

function sayMyName(){
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("J");
  console.log("E");
  console.log("E");
  console.log("T");
}

//sayMyName()

// function addTwoNumbers(number1, number2){ // parameters
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  
  // let result = number1 + number2 
  // return result

  return number1 + number2
  
}

const result = addTwoNumbers(3, 5) // arguments
//console.log("Result: ", result);


function loginUSerMessage(username = "Sanju") {
  // if(username === undefined){
    if (!username) {
      console.log("Please Enter a username");
      return;
    }
  return `${username} Just logged in`
}

//console.log(loginUSerMessage("Sanjeet"))
console.log(loginUSerMessage("Sanjeet"));