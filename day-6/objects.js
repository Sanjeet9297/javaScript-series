// Singleton
// ---- Object.create -----


// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Sanjeet",
  "full name": "Sanjeet Kumar",
  [mySym]: "mykey1",
  age: 20,
  location: "Bhopal",
  email: "oksanjeet@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email); // 1st Tarika
//console.log(JsUser["email"]); // 2nd Tarika
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "Sanju@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "kushwaha@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
  console.log("HEllo JS User");
}

JsUser.greeting2 = function () {
  console.log(`HEllo JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());