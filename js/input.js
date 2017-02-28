console.log("up!");

var textinput = document.getElementById("textinput");
var wordcount = 10;
var text = "i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you";
var textArray = text.split(" ");
var newtext = "";
function create() {
	for (i = 0; i < wordcount; i++) {
		newtext += textArray[i] + " ";
	}
}
create();
$("#wordcount").html("Words left: " + wordcount);

console.log(newtext);

var counter = 0;
$("#textinput").keypress(function() {
	console.log("key pressed");
	console.log(textinput.innerHTML)
	$("#textinput").val(newtext.substring(0,counter));
	if (newtext.charAt(counter) == " ") {
		wordcount--;
		$("#wordcount").html("Words left: " + wordcount);
	}
	counter++;
})