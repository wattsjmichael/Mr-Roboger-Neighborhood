/*$(document).ready(function() {
  $("form#robogerFrom").submit(function(event) {
    let number = parseInt($("input#numberInput").val());
    let roboSpeak = roboSpeak(speak);
    $("#result").text(result);
  });
})*/



//Split array into a string to find 3, 2, 1
let robotSpeak = [];


for (let i = 0; i <= "robotSpeak".length; i++){
    if(robotSpeak[i] == "3")
      robotSpeak[i] = "Won't You Be My Neighbor?";
    else if (robotSpeak[i] == "2")
      robotSpeak[i] = "Boop!";
    else (robotSpeak[i] == "3")
      robotSpeak[i] = "Beep!";
}
