const app = "I don't do much."
//returns dodger position as an integer value
function getNumericPosition(){

}
//checks for Dodger at boundary, returns true if at boundary
function dodgerAtBoundary(){
  var currentPosition = $("#dodger")[0].style.left.replace('px','');
  var currentPositionNum = parseInt(currentPosition,10);
  if (currentPositionNum === 0 || currentPositionNum === 360){
    return true;
  }
  return false;
}
//Move left
function dodgerLeft(){
  var left = $("#dodger")[0].style.left.replace('px','');
  var leftNumbers = parseInt(left,10) - 1;
  $("#dodger")[0].style.left = `${leftNumbers}px`;
}

$(document).on("keydown",function(e){
  console.log(e.which);
  switch (e.which) {
//Left Arrow
    case 37:
      dodgerLeft();
      break;
    default:
  }
})
//document.addEventListener("keydown",function(e){
//  console.log(e.which);
//})
