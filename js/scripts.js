function robotSpeaks(number) {
  let output = [];
  for (i = 0; i <=number; i++){
    //pseudo code - 1 - need to push out an array of numbers
    // 2 Splice out the numbers
    // 3 return the code with beep, boop, wont you be my neighbor
    output.push(i);

  }
}

$(document).ready(function(){
  $("#numberInput").submit(function(event){
    event.preventDefault();
    let numberInput = $("#numberInput").val();
    let output = robotSpeaks(number);
    output.forEach(function(element){
      $("#robotSpoke").append(element);
    });
  });
});
