const app = "I don't do much."
//Set Constant for directions
const leftDir = -1;
const rightDir = 1;

var positionNum
//returns dodger position as an integer value
function getNumericPosition(){
  var position = $("#dodger")[0].style.left.replace('px','');
  positionNum = parseInt(position,10);
}
//checks for Dodger at boundary, returns true if at boundary
function dodgerAtBoundary(){
  if (positionNum === 0 || positionNum === 360){
    return "LeftBoundary";
  }
  return false;
}
//Move left
function dodgerMove(dir){
  if(dodgerAtBoundary()===false){
    $("#dodger")[0].style.left = `${positionNum+dir}px`;}
}

$(document).on("keydown",function(e){
  switch (e.which) {
//Left Arrow
    case 37:
      getNumericPosition();
      dodgerMove(leftDir);
      break;
    case 39:
    getNumericPosition(rightDir);
    dodgerMove();
    default:
  }
})
//document.addEventListener("keydown",function(e){
//  console.log(e.which);
//})
