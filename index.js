const app = "I don't do much."
var positionNum
//returns dodger position as an integer value
function getNumericPosition(){
  var position = $("#dodger")[0].style.left.replace('px','');
  positionNum = parseInt(position,10);
  console.log("got numeric position " + positionNum)
}
//checks for Dodger at boundary, returns true if at boundary
function dodgerAtBoundary(){
  if (positionNum === 0 || positionNum === 360){
    return true;
  }
  console.log("THROUGH DODGER AT BOUNDARY FALSE")
  return false;
}
//Move left
function dodgerLeft(){
  console.log("THROUGH DODGERLEFT")
  if(dodgerAtBoundary()===false){
    console.log("INSIDE CONDITIONAL DODGER LEFT " + positionNum)
    $("#dodger")[0].style.left = `${positionNum}px`;}
}

$(document).on("keydown",function(e){
  console.log(e.which);
  switch (e.which) {
//Left Arrow
    case 37:
    console.log("THROUGH CASE")
      getNumericPosition();
      dodgerLeft();
      break;
    default:
  }
})
//document.addEventListener("keydown",function(e){
//  console.log(e.which);
//})
