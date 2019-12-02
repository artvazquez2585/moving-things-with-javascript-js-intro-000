const app = "I don't do much."
function dodgerLeft(){
  $("#dodger").on("keyDown",function(e)
  if(e.which === 37){
    var left = $("#dodger")[0].style.left.replace('px','');
    var leftNumbers = parseint(left,10);

  })
}
