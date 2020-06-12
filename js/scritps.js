$(document).ready(function() {
  $("form#robogerFrom").submit(function(event) {
    let number = parseInt($("input#number").val());
    let roboSpeak = roboSpeak(speak);
    $("result").text(result);
  })



    String.prototype.replaceArray = function(find, replace) {
      var number = [];
      for (var i = 0; i < find.length; i++) {
        result = number.replace(find["1", "2", "3"], replace["beep!", "boop!", "Won't you be my neighbor?" ]);
      }
      return result;
    };
