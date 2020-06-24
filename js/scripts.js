function robotSpeaks(number) {
  let output = [];
  for (i = 0; i <=number; i++){
    if (i.toString().includes(3)) {
      output.push("Wont You Be My Neighbor?!");
    } else if (i.toString().includes(2)) {
      output.push("boop");
    } else if (i.toString().includes(1)) {
      output.push("beep");
    }  else {
        output.push(i);

  }
}
  return output;
};


$(document).ready(function(){
  $("#robogerForm").submit(function(event){
    event.preventDefault();

    let number = $("#numberInput").val();
    let newArray = robotSpeaks(number);


    $("#leetSpeak").text(newArray);
    $("#robotSpoke").show();
    });
  });
