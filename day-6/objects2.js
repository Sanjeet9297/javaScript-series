// Singleton

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.name = "Sanju"

//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sanjeet",
      lastname: "Kumar"
    }
  }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
  {
    id: 1,
    email: "Sanjeet@gmail.com",
  },
  {
    id: 1,
    email: "Sanjeet@gmail.com",
  },
  {
    id: 1,
    email: "Sanjeet@gmail.com",
  },
];

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));





// ----------OBJECT DESTRUCTURE ---------//
const course = {
  coursename: "JS in hindi",
  pric: "999",
  courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course 

//console.log(courseInstructor);
console.log(instructor);


/* DESTRUCTURING IN REACT */
// const navbar = ({company}) =>{

// }
// navbar(company= "Sanjeet")


// JSON FORM
// {
//   "name": "Sanjeet",
//   "coursename": "JS in Hindi",
//   "price": "free"
// }

[
  {},
  {},
  {}
]
