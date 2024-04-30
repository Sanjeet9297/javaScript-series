const button = document.querySelectorAll(".box")
const body = document.querySelector("body")

button.forEach(function(box){
  box.addEventListener("click", function(color){
    if(color.target.id === "box1"){
      body.style.backgroundColor = "aqua"
    }

    if (color.target.id === "box2") {
      body.style.backgroundColor = "indianred";
    }

    if (color.target.id === "box3") {
      body.style.backgroundColor = "antiquewhite";
    }

    if (color.target.id === "box4") {
      body.style.backgroundColor = "coral";
    }

    if (color.target.id === "box5") {
      body.style.backgroundColor = "blue";
    }
  })
})