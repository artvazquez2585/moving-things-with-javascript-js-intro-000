const app = "I don't do much."
//Don't go beyond boundaries
function AtBoundary(){
  var currentPosition = $("#dodger")[0].style.left.replace('px','');
  var currentPositionNum = parseInt(currentPosition,10);
  if (currentPositionNum === 0 || currentPositionNum === 360){
    return true;
  }
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
