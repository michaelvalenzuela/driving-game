let $carImg = document.getElementById("f1Car");

let car = {
  locationX: 0,
  locationY: 0
}

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowDown"){
    $carImg.style.transform = "rotate(0deg) rotate(90deg)";
  }
  else if(e.key === "ArrowLeft"){
    $carImg.style.transform = "rotate(0deg) rotate(180deg)";
  }
  else if(e.key === "ArrowRight"){
    $carImg.style.transform = "rotate(0deg)";
  }
  else if(e.key === "ArrowUp"){
    $carImg.style.transform = "rotate(0deg) rotate(-90deg)";
  }
});
