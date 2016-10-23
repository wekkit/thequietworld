window.onload = function () {
	console.log("good to go!");

	// DECLARE DOM BINDINGS ----------------------------
	var text = document.getElementById("text");
	var header = document.getElementById("header");
	var background = document.getElementById("background");
	var char = document.getElementById("char");
	var nextbtn = document.getElementById("nextbtn");

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

	var eventCheck = function() {
		if (gametext[gamestate-1].event === "blackout") {
			$("#bottompanel").hide();
			$("#background").hide();
			$("#background").css("background-color", "black");
			$("#background").fadeIn(1000);
			console.log("blackout")
		}
	}

	var loadText = function() {
		$("#text").hide();
		$("#header").hide();
		header.innerHTML = gametext[gamestate].header;
		text.innerHTML = gametext[gamestate].text;
		$("#header").fadeIn(400);
		$("#text").fadeIn(400);
		gamestate++;
		console.log("this is line " + (gamestate-1));
		console.log(gametext[gamestate-1]);
	}

	var push = function(event, header, text) {
		gametext.push({
			event: event,
			header: header,
			text: text
		})
	};

	// CONTENT ----------------------------------
	push("", "", "&quot;In an effort to get people to look into each other's eyes more,");
	push("", "", "&quot;In an effort to get people to look into each other's eyes more,<br> and also to appease the mutes,");
	push("", "", "the government has decided<br>");
	push("", "", "the government has decided<br> to allot each person exactly one hundred");
	push("", "", "the government has decided<br> to allot each person exactly one hundred<br> and sixty-seven words, per day.&quot;");
	push("", "", "- The Quiet World, by Jeffrey McDaniel.");
	push("blackout", "", "");

	nextbtn.addEventListener("click", loadText);
	nextbtn.addEventListener("click", eventCheck);
	// background.style.backgroundImage = "url(assets/img/coffeeshop.jpg)";
	// char.style.backgroundImage = "url(assets/img/barista.jpg)";
}