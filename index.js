const app = "I don't do much."
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
