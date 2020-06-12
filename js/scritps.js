/*$(document).ready(function() {
  $("form#robogerFrom").submit(function(event) {
    let number = parseInt($("input#numberInput").val());
    let roboSpeak = roboSpeak(speak);
    $("#result").text(result);
  });
})*/



//Split array into a string to find 3, 2, 1

for (let i = 0; i < robotSpeak.length; i++){
    if(robotSpeak[i] == "3")
      robotSpeak[i] = "Won't You Be My Neighbor?";
    else if (robotSpeak[i] == "2")
      robotSpeak[i] == "Boop!";
    else if (robotSpeak[i] == "3")
      robotSpeak[i] == "Beep!";
}
console.log(robotSpeak)
