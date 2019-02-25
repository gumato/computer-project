$(document).ready(function() {
$("input[type='button']").click(function(event) {

var question1 = parseInt($('input[name = "one"]:checked').val());
var question2 = parseInt($('input[name = "two"]:checked').val());
var question3 = parseInt($('input[name = "three"]:checked').val());
var question4 = parseInt($('input[name = "four"]:checked').val());
var question5 = parseInt($('input[name = "five"]:checked').val());

var result = question1 + question2 + question3 + question4 + question5;
//$("score").text("your score is" + result);
document.getElementById("display").innerHTML= result;
$("#display").text("you got " + result);

event.preventDefault();
});
});
