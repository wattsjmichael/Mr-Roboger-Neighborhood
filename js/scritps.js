/*$(document).ready(function() {
  $("form#robogerFrom").submit(function(event) {
    let number = parseInt($("input#numberInput").val());
    let roboSpeak = roboSpeak(speak);
    $("#result").text(result);
  });
})*/



//Split array into a string to find 3, 2, 1
function makeRobotTalk() {
  let robotSpeak = $("number").val;
  alert("This worked" + makeRobotTalk);
/*for (let i = 0; i <= "robotSpeak".length; i++){
    if (robotSpeak[i] === "3")
      robotSpeak[i] = "Won't You Be My Neighbor?";
    if (robotSpeak[i] === "2")
      robotSpeak[i] = "Boop!";
    if (robotSpeak[i] === "1")
      robotSpeak[i] = "Beep!";
}
}
