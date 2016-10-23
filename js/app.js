window.onload = function () {
	console.log("good to go!");

	// DECLARE DOM BINDINGS ----------------------------
	var text = document.getElementById("text");
	var header = document.getElementById("header");
	var background = document.getElementById("background");
	var char = document.getElementById("char");
	var nextbtn = document.getElementById("nextbtn")

	// DECLARE STATE TRACKING VARIABLES -------------------------
	var gamestate = 0;
	var gametext = [];
	var gamechoice = 0;
	var wordcount = 0;

	// DECLARE FUNCTIONS ----------------------------
	var clearText = function() {
		header.innerHTML = "";
		text.innerHTML = "";
	};

	var loadText = function() {
		clearText();
		header.innerHTML = gametext[gamestate].header;
		text.innerHTML = gametext[gamestate].text;
		gamestate++;
		console.log("this is line " + gamestate);
		console.log(gametext[gamestate]);
	}

	var push = function(header, text) {
		gametext.push({
			header: header,
			text: text
		})
	};

	// CONTENT ----------------------------------
	push("", "&quot;In an effort to get people to look into each other's eyes more,");
	push("", "&quot;In an effort to get people to look into each other's eyes more,<br> and also to appease the mutes,");
	push("", "the government has decided<br>");
	push("", "the government has decided<br> to allot each person exactly one hundred");
	push("", "the government has decided<br> to allot each person exactly one hundred<br> and sixty-seven words, per day.&quot;");
	push("", "- The Quiet World, by Jeffrey McDaniel.");
	push("", "");

	nextbtn.addEventListener("click", loadText);
	// background.style.backgroundImage = "url(assets/img/coffeeshop.jpg)";
	// char.style.backgroundImage = "url(assets/img/barista.jpg)";
}