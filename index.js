const app = "I don't do much."
var positionNum
//returns dodger position as an integer value
function getNumericPosition(){
  var position = $("#dodger")[0].style.left.replace('px','');
  positionNum = parseInt(currentPosition,10);
}
//checks for Dodger at boundary, returns true if at boundary
function dodgerAtBoundary(){
  if (positionNum === 0 || positionNum === 360){
    return true;
  }
  return false;
}
//Move left
function dodgerLeft(){
  if(!==dodgerAtBoundary()){
    $("#dodger")[0].style.left = `${positionNum}px`;}
}

$(document).on("keydown",function(e){
  console.log(e.which);
  switch (e.which) {
//Left Arrow
    case 37:
      getNumericPosition();
      dodgerLeft();
      break;
    default:
  }
})
//document.addEventListener("keydown",function(e){
//  console.log(e.which);
//})
