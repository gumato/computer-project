$(document).ready(function() {
$("input[type='button']").click(function(event) {

var question1 = parseInt($('input[name = "one"]:checked').val());
var question2 = parseInt($('input[name = "two"]:checked').val());
var question3 = parseInt($('input[name = "three"]:checked').val());
var question4 = parseInt($('input[name = "four"]:checked').val());
var question5 = parseInt($('input[name = "five"]:checked').val());

var result = question1 + question2 + question3 + question4 + question5;
//$("score").text("your score is" + result);
var percent=(result*100)/75
document.getElementById("display").innerHTML= result;
document.getElementById("percent").innerHTML= "Your score is" + " " + percent + "%" ;
$("#display").text("You got " + result + " " + "out of 75");
$("#form").hide();
$("#retake").show();

event.preventDefault();
});
});
$(document).ready(function() {
      $(".clickable").click(function() {
        $("#hint-showing").toggle();
        $("#hint-hidden").toggle();
      });
    });
