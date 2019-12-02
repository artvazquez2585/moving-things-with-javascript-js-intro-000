const app = "I don't do much."
function dodgerLeft(){
  var left = $("#dodger")[0].style.left.replace('px','');
  var leftNumbers = parseint(left,10) - 1;
  $("#dodger")[0].style.left = `$("leftNumbers")px`;
}

$("document").on("keydown",function(e){
  console.log(e.key);
  switch (e.which) {
//Left Arrow
    case 27:
      dodgerLeft();
      break;
    default:
  }
})
document.addEventListener("keydown",function(e){
  console.log(e.which);
})