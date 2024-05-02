// array

const myArr = [1, 2, 3, 4 , 5]
const myHeros = ["sanjeet", "Sanjay"]

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr[0]);

// array methods

// myArr.push(8)
// myArr.push(7);
// myArr.pop();

//myArr.unshift(9) // Start me no. adding
//myArr.shift(); // Start ka no. removing

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4));


// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);


// ---- Slice , Splice ------

console.log("A", myArr);

const myn1 = myArr .slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);