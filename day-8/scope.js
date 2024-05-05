// ----- Child funx Parent ke Variable ke funx ko access kar sakte hai parent child ka nhi ------------

function one(){
  const username = "Sanjeet"

  function two(){
    const website = "Youtube"
    console.log(username);
  }
  //console.log(website);

  two()
}

//one()

if(true){
  const username = "Sanjeet"
  if(username === "Sanjeet"){
    const website = " youtube"
    //console.log(username + website);
  }
  //console.log(website);
}

//console.log(username);



// +++++++++++++++++++ Interesting ++++++++++++

console.log(addone(5));
function addone(num){
  return num + 1
}


console.log(addTwo(5));
const addTwo = function (num){
  return num + 2
}

