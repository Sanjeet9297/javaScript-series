const myNums = [1, 2, 3]

// +++++ FUNCTIONS ++++++++

// const myTotal = myNums.reduce(function(acc, currval){
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)


// ++++++++ ARROW FUNCTION ++++++++

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0 )

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },

  {
    itemName: "Python",
    price: 999,
  },

  {
    itemName: "Mobile Dev Course",
    price: 5999,
  },

  {
    itemName: "Data Science Course",
    price: 12999,
  },

  {
    itemName: "Cyber Security",
    price: 14999,
  },

  {
    itemName: "JAVA",
    price: 11999,
  },

  {
    itemName: "MY SQL",
    price: 1299,
  },

  {
    itemName: "Database",
    price: 8000,
  },
];

const priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price, 0)
console.log(priceToPay);