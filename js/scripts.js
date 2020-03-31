
$(document).ready(function(){
  $("#calculate").click(function(event){
     console.log("value");
     var countBy = parseInt($("#countBy").val());
     var countTo = parseInt($("#countTo").val());
     isNum
     
      console.log(calculate(countBy,countTo));
    
    
    event.preventDefault();
  });
});


function calculate(countBy,countTo){
var result = "";
  for(var i=1;i<= countTo;i++){
    if((i % countBy) === 0){
      result += " " + i;
      console.log("result")
    }
  }
  return result;
}