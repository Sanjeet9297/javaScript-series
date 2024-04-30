let myCreateDate = new Date(2024, 3, 30);
let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default", {
  weekday: "long",
})

