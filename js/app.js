window.onload = function () {
	console.log("good to go!");

	// DECLARE DOM BINDINGS ----------------------------
	var text = document.getElementById("text");
	var header = document.getElementById("header");
	var background = document.getElementById("background");
	var char = document.getElementById("char");
	var nextbtn = document.getElementById("nextbtn");
	var choicebtns = document.getElementById("choicebtns");
	var choicebtnsClone = choicebtns.cloneNode(true);
	var choice1 = document.getElementById("choice1");
	var choice2 = document.getElementById("choice2");
	var choice3 = document.getElementById("choice3");
	var choice4 = document.getElementById("choice4");
	var charmid = document.getElementById("char-mid");
	var charleft = document.getElementById("char-left");
	var charright = document.getElementById("char-right");

	// DECLARE STATE TRACKING VARIABLES -------------------------
	var gamestate = 23;
	// game starts at 1
	// coffeeshop starts at 23
	// office scene starts at 35
	// meeting starts at 44
	// lunch starts at 58
	// bench starts at 65
	// office 2 starts at 97
	// street starts at 109
	// chatter meeting starts at 121
	// taxi ride starts at 151
	// cemetary starts at 173

	var gametext = [];
	var gamechoice = [];
	var wordcount = 0;
	var textinput = document.getElementById("textinput");
	var textArray = "i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you i love you".split(" ");
	var newtext = "";
	function create() {
		for (i = 0; i < (167-wordcount); i++) {
			newtext += textArray[i] + " ";
		}
		console.log(newtext);
	}

	// DECLARE UTILITY FUNCTIONS FOR LOADING TEXT, CLEARING LISTENERS ETC ----------------------------
	var push = function(event, char, header, text) {
		gametext.push({
			event: event,
			char: char,
			header: header,
			text: text
		})
	};

	var clearListeners = function() {
		$("#choice1").off('click');
		$("#choice2").off('click');
		$("#choice3").off('click');
		$("#choice4").off('click');
	}

	// NON-TEXT EVENTS GO INTO THIS BIG-ASS FUNCTION -----------
	var eventCheck = function() {
		if (gametext[gamestate].event === "blackout") {
			$("#bottompanel").fadeOut(400);
			$("#background").hide();
			$("#nextbtn").hide();
			$("#background").css("background", "url()")
			$("#background").css("background-color", "black");
			$("#background").fadeIn(2000)
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#skybox").css("background-color", "black");
				nextStep();
			}, 2000);
			console.log("gametext[gamestate].event");
		}
		if (gametext[gamestate].event === "showBottomPanel") {
			$("#bottompanel").fadeIn(400);
			console.log("gametext[gamestate].event");
		}
		if (gametext[gamestate].event === "unchoice") {
			$("#choicebtns").hide();
			$("#nextbtn").fadeIn(400);	
		}

		if (gametext[gamestate].event === "bg1") {
			$("#skybox").css("background-color", "black");
			$("#background").hide().css("background-image", "url(assets/img/room.jpg)").fadeIn(2000);
			setTimeout(function() {
				$("#skybox").hide();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg2") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#skybox").css("background-image", "url(assets/img/coffeeshop.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg3") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/coffeeshop.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/office.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg4") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/office.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/meetingroom.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg5") {
			$('#nextbtn').hide();
			$("#skybox").css("background-image", "url(assets/img/meetingroom.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg6") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/meetingroom.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/lunch.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg7") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/lunch.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/bench.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg8") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/bench.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/office.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg9") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/office.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/street.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg10") {
			$("#bottompanel").fadeOut(400);
			$("#background").hide();
			$("#nextbtn").hide();
			$("#background").css("background", "url()")
			$("#background").css("background-color", "black");
			$("#background").fadeIn(2000)
			setTimeout(function() {
				$("#skybox").css("background-image", "url(assets/img/chatter.jpg)").show();
				$("#background").fadeOut(2000);
				setTimeout(function() {
					$("#nextbtn").fadeIn(400);
					$("#bottompanel").fadeIn(400);
					nextStep();
				}, 2000);
			}, 3000);
		}

		if (gametext[gamestate].event === "bg11") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/chatter.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/chattermeetingroom.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg12") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/chattermeetingroom.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/nightstreet.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg13") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/nightstreet.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/cab.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg14") {
			$("#bottompanel").hide()
			$("#nextbtn").hide()
			$("#background").css("background-image", "url(assets/img/cab.jpg)").show();
			$("#skybox").css("background-image", "url(assets/img/cemetary.jpg)").show();
			$("#background").fadeOut(2000);
			setTimeout(function() {
				$("#nextbtn").fadeIn(400);
				$("#bottompanel").fadeIn(400);
				nextStep();
			}, 2000);
		}

		if (gametext[gamestate].event === "bg15") {
			$("#bottompanel").fadeOut(4000);
			$("#background").fadeOut(4000);
			$("#nextbtn").hide();
			$("#background").css("background", "url()")
			$("#background").css("background-color", "black");
			$("#background").fadeIn(5000)
			setTimeout(function() {
				$("#textinput").hide();
				$("#nextbtn").fadeIn(1000);
				$("#skybox").css("background-color", "black");
				$("#bottompanel").css("background-color","black");
				$("#text").css("color", "white");
				$("#bottompanel").fadeIn(400);
				$("#text").fadeIn(400);
				nextStep();
			}, 6000);
		}


		if (gametext[gamestate].event === "choice1") { // Do I get out of bed?
			$("#nextbtn").hide();
			choice1.innerHTML = "[Get out of bed.]";
			$("#choice2").hide();
			$("#choice3").hide();
			choice4.innerHTML = "[Keep sleeping.]";
			$("#choicebtns").fadeIn(400);
			$("#choice1").on("click", function() {
				gamechoice[0] = 1;
				console.log("picked choice one");
				gametext[gamestate].text = "You decided to get up. It's a new day, and there's work to be done.";
				// choicebtns.parentNode.replaceChild(choicebtnsClone, choicebtns);
				nextStep();
				$("#choice1").off('click');
				$("#choice4").off('click');
			});
			$("#choice4").on("click", function() {
				gamechoice[0] = 2;
				console.log("picked choice two");
				gametext[gamestate].text = "You're not ready to face the day... but you need money. And food. And a place to stay.";
				nextStep();
				$("#choice1").off('click');
				$("#choice4").off('click');
			});
		}

		if (gametext[gamestate].event === "choice2") { // How do I order my coffee?
			$("#nextbtn").hide();
			choice1.innerHTML = "Hey. Can I get an espresso?";
			choice2.innerHTML = "Just a coffee, thanks.";
			choice3.innerHTML = "One coffee.";
			choice4.innerHTML = "[Point at the medium-sized coffee cup.]";
			$("#choice1").show();
			$("#choice2").show();
			$("#choice3").show();
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$("#choice1").on("click", function() {
				gamechoice[1] = 1;
				wordcount += 6;
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "Sure. Here you go.";
				nextStep();
				clearListeners();
			});
			$("#choice2").on("click", function() {
				gamechoice[1] = 2;
				wordcount += 4;
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "Sure. Here you go.";
				nextStep();
				clearListeners();
			});
			$("#choice3").on("click", function() {
				gamechoice[1] = 3;
				wordcount += 2;
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "Sure. Here you go.";
				nextStep();
				clearListeners();
			});
			$("#choice4").on("click", function() {
				gamechoice[1] = 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The barista gives you the quickest of thumbs up and hands you your cup.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice3") { // Do I say thanks for the coffee?
			$("#nextbtn").hide();
			choice1.innerHTML = "Thanks.";
			$("#choice2").hide();
			choice3.innerHTML = "[Smile and walk away.]";
			choice4.innerHTML = "[Walk away.]";
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[2] = 1;
				wordcount += 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The barista beams as he hands you the coffee. Ever since the mandate, the value of courtesy has gone up tenfold. People now notice when you're nice to them, now that it's worth something.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[2] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The barista beams as he hands you the coffee. Ever since the mandate, the value of courtesy has gone up tenfold. People now notice when you're nice to them, now that it's worth something.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[2] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You see the flick of a scowl across the barista's face. Rudeness is still something that we have to come to grips with in the wake of the mandate.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice4") { // Respond to receptionist
			$("#nextbtn").hide();
			choice1.innerHTML = "Had a good weekend?";
			$("#choice1").show();
			choice2.innerHTML = "Morning!";
			$("#choice2").show();
			choice3.innerHTML = "[Nod at Donna.]";
			$("#choice3").show();
			choice4.innerHTML = "[Ignore Donna.]";
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[3] = 1;
				wordcount += 4;
				gametext[gamestate].header = "Donna";
				gametext[gamestate].text = "Sure did!";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[3] = 2;
				wordcount += 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna smiles at you ever so slightly.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[3] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna smiles at you ever so slightly.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[3] = 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna hesitates ever so slightly before smiling at you anyway.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice5") { // Do you want the file from the receptionist
			$("#nextbtn").hide();
			choice1.innerHTML = "Yes, please.";
			$("#choice1").show();
			choice2.innerHTML = "[Nod at Donna.]";
			$("#choice2").show();
			choice3.innerHTML = "No.";
			$("#choice3").show();
			choice4.innerHTML = "[Shake your head.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[4] = 1;
				wordcount += 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna beams as she hands you a file with today's agenda. She still appreciates small talk, a rarity these days.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[4] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "She quietly hands you a file with details for the upcoming meetings.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[4] = 3;
				wordcount += 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna looks puzzled and slides the booklet off the table.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[4] = 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna shrugs and goes back to her work.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice6") { // Take a seat
			$("#nextbtn").hide();
			choice1.innerHTML = "[Take a seat near the front.]";
			$("#choice1").show();
			choice2.innerHTML = "[Take a seat near the back to avoid unnecessary conversation.]";
			$("#choice2").show();
			$("#choice3").hide();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[5] = 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You take a seat and get ready for the meeting.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[5] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You take a seat and get ready for the meeting.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice7") { // Respond to CEO
			$("#nextbtn").hide();
			if (gamechoice[4] === 1 || gamechoice[4] === 2) {
				choice1.innerHTML = "My team is on track. I've sent you updates.";
			} else {
				choice1.innerHTML = "I will review this again and send an email.";
			}
			$("#choice1").show();
			if (gamechoice[4] === 1 || gamechoice[4] === 2) {
				choice2.innerHTML = "Sent the email.";
			} else {
				choice2.innerHTML = "I'll email you.";
			}
			$("#choice2").show();
			choice3.innerHTML = "[Leave the room]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[6] = 1;
				wordcount += 9;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO seems a little taken aback by the length of your response. He nods in thanks, having used up all his words on the presentation.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[6] = 2;
				wordcount += 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO nods curtly and walks out of the room. The meeting is adjourned.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[6] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You get up and leave the room. It's been easier to leave things unsaid ever since the mandate.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice8") { // Hot dog order
			$("#nextbtn").hide();
			choice1.innerHTML = "Give me a hotdog with mustard and relish.";
			$("#choice1").show();
			choice2.innerHTML = "One hotdog with relish, please.";
			$("#choice2").show();
			choice3.innerHTML = "Dog with ketchup.";
			$("#choice3").show();
			choice4.innerHTML = "[Point at the picture of a hot dog.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[7] = 1;
				wordcount += 8;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure thing. Two dollars.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[7] = 2;
				wordcount += 5;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure thing. Two dollars.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[7] = 3;
				wordcount += 3;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "That's two dollars.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[7] = 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The hot dog guy grunts and holds up two fingers.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice9") { // Hot dog toppings
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Mustard and relish, thanks.";
			$("#choice1").show();
			choice2.innerHTML = "Just relish.";
			$("#choice2").show();
			choice3.innerHTML = "Ketchup.";
			$("#choice3").show();
			choice4.innerHTML = "[Shake your head no.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[8] = 1;
				wordcount += 4;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[8] = 2;
				wordcount += 2;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[8] = 3;
				wordcount += 1;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[8] = 4;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice10") { // Spare some words for the homeless man?
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Sure thing. Take a seat.";
			$("#choice1").show();
			choice2.innerHTML = "[Nod your head yes.]";
			$("#choice2").show();
			choice3.innerHTML = "[Shake your head no.]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[9] = 1;
				wordcount += 5;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "Great. Always good to meet someone friendly.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[9] = 2;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "Great. Always good to meet someone friendly.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[9] = 3;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "These are dark times, friend. There's no point in being rude.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice11") { // What's on your mind?
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "I've been thinking too much lately.";
			$("#choice1").show();
			choice2.innerHTML = "I feel like I'm being watched.";
			$("#choice2").show();
			choice3.innerHTML = "Nothing, I'm alright. Thanks though.";
			$("#choice3").show();
			choice4.innerHTML = "You. My lunch. No.";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[10] = 1;
				wordcount += 6;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "Better out than in, I always say. Speak your mind and it will be free, eh?";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[10] = 2;
				wordcount += 6;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "Hah. &quotFeel like&quot. They're watching us, listening to us, right now. You must be daft if you believe otherwise.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[10] = 3;
				wordcount += 5;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "Better out than in, I always say. Speak your mind and it will be free, eh?";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[10] = 4;
				wordcount += 4;
				gametext[gamestate].header = "Homeless Man";
				gametext[gamestate].text = "Hah! I've got bigger problems than an empty stomach, you believe me.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice12") { // What's on your mind?
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Sure, I could use some advice.";
			$("#choice1").show();
			choice2.innerHTML = "No thanks. Got to go.";
			$("#choice2").show();
			$("#choice3").hide();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[11] = 1;
				wordcount += 6;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Your response seems to take him by surprise. He stares at you, stunned for a second, before breaking into a smile that shines through the dirt and grit caking his face.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[11] = 2;
				wordcount += 5;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "His gaze is locked onto you, and for a second he looks like he can see straight through you. He gives a thick, chesty cough.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice13") { // Aardvark Pitch?
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Oh man. Was that today?";
			$("#choice1").show();
			choice2.innerHTML = "No, I don't think so.";
			$("#choice2").show();
			choice3.innerHTML = "[Stare at Donna.]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[12] = 1;
				wordcount += 5;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna's eyes widen and she hurriedly gestures towards the door, signalling for me to get out of there fast.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[12] = 2;
				wordcount += 5;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna's eyes widen and she hurriedly gestures towards the door, signalling for me to get out of there fast.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[12] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna awkwardly looks away. She starts typing on her keyboard.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice14") { // Which Uber?
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Book an Uber Silent. You prefer a quiet ride.";
			$("#choice1").show();
			choice2.innerHTML = "Book an UberX. Quiet cab rides are awkward.";
			$("#choice2").show();
			$("#choice3").hide();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[12] = 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Travis is nearby with your Uber.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[12] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Travis is nearby with your Uber.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice15") { // Greeting Travis in his Uber
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Hey, how's it going?";
			$("#choice1").show();
			choice2.innerHTML = "How're you?";
			$("#choice2").show();
			choice3.innerHTML = "[Get in the car.]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[14] = 1;
				wordcount += 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Travis looks at you funny and shakes his head, making a zipping motion over his lips.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[14] = 2;
				wordcount += 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Travis looks at you funny and shakes his head, making a zipping motion over his lips.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[14] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Travis looks at you funny and shakes his head, making a zipping motion over his lips.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice16") { // Presentation start
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Okay guys, I've got some good news and some bad news.";
			$("#choice1").show();
			choice2.innerHTML = "I'm going to be blunt.";
			$("#choice2").show();
			choice3.innerHTML = "[Remain silent and use the slides.]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[15] = 1;
				wordcount += 11;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You watch their faces fall as they see graph after graph of negative consumer sentiment.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[15] = 2;
				wordcount += 5;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You watch their faces fall as they see graph after graph of negative consumer sentiment.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[15] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You watch their faces fall as they see graph after graph of negative consumer sentiment.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice17") { // Presentation part two
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "There is this small segment that we can look at...";
			$("#choice1").show();
			choice2.innerHTML = "It's not all bad...";
			$("#choice2").show();
			choice3.innerHTML = "Nobody's buying.";
			$("#choice3").show();
			choice4.innerHTML = "[Flip on to the next slides.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[16] = 1;
				wordcount += 9;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CTO is fiddling with his pencil, trying to get a broken bit of graphite out.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[16] = 2;
				wordcount += 5;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CTO is fiddling with his pencil, trying to get a broken bit of graphite out.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[16] = 3;
				wordcount += 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CTO is fiddling with his pencil, trying to get a broken bit of graphite out.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[16] = 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CTO is fiddling with his pencil, trying to get a broken bit of graphite out.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice18") { // Presentation start
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "And that's why we would recommend exiting the market.";
			$("#choice1").show();
			choice2.innerHTML = "It's time.";
			$("#choice2").show();
			choice3.innerHTML = "[Flip to the final concluding slide.]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[17] = 1;
				wordcount += 9;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO heaves a sigh. The CFO and the CTO notice you're done and tune back in.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[17] = 2;
				wordcount += 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO heaves a sigh. The CFO and the CTO notice you're done and tune back in.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[17] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO heaves a sigh. The CFO and the CTO notice you're done and tune back in.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice19") { // Goodbye to CEO
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Thank you.";
			$("#choice1").show();
			choice2.innerHTML = "[Smile, nod and leave.]";
			$("#choice2").show();
			$("#choice3").hide();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[18] = 1;
				wordcount += 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "He nods at you with thanks and gestures towards the door with his palm downwards, indicating you should leave.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[18] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "He returns the nod and points at the door. He's clearly upset and still deep in thought.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice20") { // Cab driver 1
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "You could say that.";
			$("#choice1").show();
			choice2.innerHTML = "Aren't they all?";
			$("#choice2").show();
			choice3.innerHTML = "[Shake your head.]";
			$("#choice3").show();
			choice4.innerHTML = "[Pretend that you have run out of words.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[19] = 1;
				wordcount += 4;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "Yeah. I know that feeling.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[19] = 2;
				wordcount += 3;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "Yeah. I know that feeling.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[19] = 3;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "... Okay. Suit yourself.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[19] = 4
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "Oh. Yeah, that was me yesterday too.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice21") { // Cab driver 2
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "That's democracy for you. Just takes enough dumb people to ruin a country.";
			$("#choice1").show();
			choice2.innerHTML = "I think we have more meaningful connections now.";
			$("#choice2").show();
			choice3.innerHTML = "Well... [Shrug]";
			$("#choice3").show();
			choice4.innerHTML = "[Nod and remain silent.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[20] = 1;
				wordcount += 13;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "I mean, I get the appeal of it...";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[20] = 2;
				wordcount += 8;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "I mean, I get the appeal of it...";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[20] = 3;
				wordcount += 1;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "I mean, I get the appeal of it...";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[20] = 4
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "I mean, I get the appeal of it...";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice22") { // Cab driver 3
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Hey, don't waste your words on me.";
			$("#choice1").show();
			choice2.innerHTML = "[Remain silent.]";
			$("#choice2").show();
			$("#choice3").hide();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[21] = 1;
				wordcount += 7;
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "Much obliged, but I'm almost done for the day. You can have what I've got left.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[21] = 2
				gametext[gamestate].header = "Cab Driver";
				gametext[gamestate].text = "It's just driving me crazy. Every single day.";
				nextStep();
				clearListeners();
			});
		}
	}

	var charCheck = function() {
		if (gametext[gamestate].char === 'clearchars') {
			$("#char-mid").fadeOut(300);
			$("#char-left").fadeOut(300);
			$("#char-right").fadeOut(300);
		}
		if (gametext[gamestate].char === 'barista-mid') {
			charmid.src = "assets/img/barista.png";
			$("#char-mid").fadeIn(400);
		}
	}

	var endCheck = function() {
		if (gametext[gamestate].event === "end") {
			console.log("ending reached")
			$("#nextbtn").hide();
			$("#text").css("text-align", "center");
			text.innerHTML = "You have " + (167-wordcount) + " words remaining."
			$("#text").fadeIn(400);
			$("#textinput").fadeIn(400);
			create();
			var counter = 0;
			$("#textinput").keypress(function() {
				$("#textinput").val(newtext.substring(0,counter));
				if (newtext.charAt(counter) == " ") {
					wordcount++;
					text.innerHTML = "You have " + (167-wordcount) + " words remaining."
					$("#title").html(167-wordcount);
				}
				counter++;
				if (wordcount >= 167) {
					$("#nextbtn").fadeIn(400);
				}
			})	
		}
		if (gametext[gamestate].event === "fin") {
			$("#nextbtn").hide();
			$("#text").hide();
			text.innerHTML = "THE END. <br><em>Thank you for playing!</em>"
			$("#text").css("font-size", "32px");
			$("#text").fadeIn(2000);
		}
	}

	// FUNCTION FOR 'NEXT' BUTTON --------------------------
	var nextStep = function() {
		eventCheck();
		charCheck();

		//If the header is the same as previously, don't fade in.
		if (gametext[(gamestate-1)].header !== gametext[gamestate].header) {
			$("#header").hide();
			header.innerHTML = gametext[gamestate].header;
			$("#header").fadeIn(400);
		}

		// If the "addin" event is inputted, the state text will be added to the existing text.
		if (gametext[gamestate].event == "addin") {
			text.innerHTML += "<span class=addin><br>" + gametext[gamestate].text + "</span>"
			$(".addin").hide();
			$(".addin").fadeIn(400);
		} else if (gametext[gamestate].event == "bg15") {
		} else if (gametext[gamestate].event == "fin") {
		} else { // else state text will replace existing text.
			$("#text").hide();
			text.innerHTML = gametext[gamestate].text;
			if (gamestate < 181) {
				$("#text").fadeIn(400);
			} else {
				$("#text").fadeIn(1000);
			}
		}

		endCheck();

		console.log("this is line " + gamestate + ". Word count is " + wordcount);
		console.log(gametext[gamestate]);
		$("#title").html(167-wordcount);
		gamestate++;
	}

	// CONTENT ----------------------------------
	push("", "", "", "");
	push("", "", "", "&quot;In an effort to get people to look into each other's eyes more,");
	push("addin", "", "", "and also to appease the mutes,");
	push("", "", "", "the government has decided");
	push("addin", "", "", "to allot each person exactly one hundred and sixty-seven words, per day.&quot;");
	push("", "", "", "- <em>The Quiet World</em>, by Jeffrey McDaniel.");
	push("blackout", "", "", "");
	push("showBottomPanel", "","Alarm","*RING*");
	push("", "","Alarm","*RING RING*");
	push("choice1", "","Alarm","*RING RING RING*");
	push("unchoice", "","",""); // RESULT FOR CHOICE 1 GOES HERE.
	push("bg1", "","","The incessant noise of the alarm is drilling a hole in your head. Before you start getting ready, you switch the alarm to something a little less annoying.");
	push("addin", "", "","The radio is playing quiet instrumental jazz music. Once every few minutes, a single word is sung, lovingly and with care.");
	push("", "","","&#9835; <em>Love</em> &#9834");
	push("addin", "","","...");
	push("", "","","&#9833 <em>Hope</em> &#9835");
	push("addin", "","","...");
	push("", "","","&#9836 <em>Joy</em> &#9833");
	push("addin", "","","...");
	push("", "","","Since the mandate, music became more... deliberate. Lyrics were weighted carefully. People started to use more than just words to convey the emotions of the music.");
	push("addin", "","","Of course, everyone behaved that way about everything after the mandate came along.");
	push("", "","","You finish getting ready for the day and decide to head out - to the coffee shop first before anything else.");
	push("addin", "","","Sometimes it's the thought of that first cup of coffee that keeps you alive.");
	push("bg2", "","","");
	push("", "","","You walk into the coffee house, and see two people ahead in line. You get in line, but it's clear that you won't have to wait long. The line is moving quickly today.");
	push("", "barista-mid","","The barista waves at the customer that's first in line.");
	push("addin", "", "","He nods and points at a pitcher of water behind the counter.");
	push("", "","","The barista quietly gives him a quick thumbs up, before waving to the next person in line, in front of you.");
	push("addin", "","","The guy in front of you points at the menu, then taps the glass on the pastry display, pointing to a bagel.");
	push("", "","","And just like that, it's your turn.");
	push("choice2", "","","The barista waves at you.");
	push("unchoice", "","",""); // RESULT FOR CHOICE 2 GOES HERE.
	push("choice3", "","","The barista looks you in the eye for a split second, waiting if there's anything else you need.");
	push("unchoice", "","",""); //RESULT FOR CHOICE 3 GOES HERE.
	push("addin", "clearchars","","You walk out of the coffee shop and make your way to the office, life-giving sustenance in hand."); 
	push("bg3", "", "", "");
	push("", "", "", "You walk through the double doors into the office. A few of your colleagues have already gotten in to work.");
	push("addin", "", "", "Donna, the receptionist, is bright and sharp.");
	push("choice4", "", "Donna", "Good morning!");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 4 GOES HERE.
	push("", "", "Donna", "Meeting's soon. Would you like the brief?");
	push("choice5", "", "", "Donna slides the booklet onto the reception table. She looks at you expectantly.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 5 GOES HERE.
	push("addin", "", "", "You decide to head to the meeting directly.");
	push("bg4", "", "", "");
	push("choice6", "", "", "Almost everyone is here already. They speak slowly and carefully.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 6 GOES HERE.
	push("addin", "", "", "After a while, the CEO stands up and starts to give his presentation.");
	push("blackout", "", "", "");
	push("showBottomPanel", "", "", "...");
	push("addin", "", "", "...");
	push("bg5", "", "", "");
	push("", "", "CEO", "... And that's the end of this week's meeting.");
	push("addin", "", "CEO", "Team leaders, what do you have for me? Let's go around the room.");
	push("choice7", "", "", "Everyone takes turns speaking. Eventually, it's your turn.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 7 GOES HERE.
	push("", "", "", "And with that, the meeting ends. You get back to your desk and put some stuff down before heading out for lunch.");
	push("addin", "", "", "... You're starving.");
	push("bg6", "", "", "");
	push("", "", "", "You get out on the sidewalk and get to your usual hot dog cart. The hot dog guy immediately recognizes you.");
	push("choice8", "", "Hot Dog Guy", "Hey man.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 8 GOES HERE.
	push("choice9", "", "", "The hot dog guy grunts and gestures towards the toppings."); 
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 9 GOES HERE.
	push("", "", "", "You take the hot dog, stuff the money in the vendor's hand and walk off to find a place to eat your lunch.");
	push("bg7", "", "", "");
	push("", "", "", "You walk until you find a bench and sit down. Freddie has been making these hotdogs ever since you started working here.");
	push("addin", "", "", "They've never been much good, but you like them anyway.");
	push("", "", "", "As you start eating, a homeless man shuffles towards you.");
	push("addin", "", "", "He looks dishevelled and smells like old socks.");
	push("choice10", "", "Homeless Man", "Spare some words, friend? Nobody gives me the time of day anymore.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 10 GOES HERE.
	push("", "", "", "The homeless man sits down next to you. He shifts uncomfortably for a bit, trying to adjust the seat of his pants.");
	push("addin", "", "", "He turns to you.");
	push("choice11", "", "Homeless Man", "You seem distracted. What's on your mind?");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 11 GOES HERE.
	push("addin", "", "Homeless Man", "It's these words, see? We let them control us.");
	push("", "", "", "You can see his eyes widen as he talks. His gaze grows intense.");
	push("", "", "Homeless Man", "Have you ever gone over the limit?");
	push("", "", "", "You shake your head wordlessly.");
	push("", "", "Homeless Man", "When the government threw me out on the street for talking too much, I said, &quot;What happened to free speech? Why must you restrain my speech?&quot;");
	push("", "", "", "Some sauce drops onto your pants.");
	push("", "", "Homeless Man", "Well, of course, no one answered me. Nobody ever answered me.");
	push("addin", "", "Homeless Man", "And I've been wandering ever since.");
	push("", "", "", "You hotdog is almost finished.");
	push("", "", "Homeless Man", "I'm better off now. No responsibilites, nothing holding me back.");
	push("addin", "", "Homeless Man", "I can do anything... and go anywhere.");
	push("", "", "", "You finish your hotdog.");
	push("choice12", "", "Homeless Man", "Here's some advice, if you'll have it.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 12 GOES HERE. 
	push("", "", "Homeless Man", "Sometimes, the best things in life are worth risking everything for.");
	push("addin", "", "Homeless Man", "Make every word count.");
	push("", "", "", "With that, the homeless man gets up and walks away, his smell lingering behind him.");
	push("", "", "", "The homelessness problem has only gotten worse since the mandate.");
	push("addin", "", "", "Worse still, they've become even more verbose than before.");
	push("", "", "", "You toss your garbage in the trash and head back to the office.");
	push("addin", "", "", "This lunch has been more eventful than you care to enjoy.");
	push("bg8", "", "", "");
	push("", "", "", "You walk back into the office.");
	push("addin", "", "", "Everyone still seems to be out, except Donna. She always has her lunch at her table.");
	push("choice13", "", "Donna", "Weren't you supposed to go with Jason for the Aardvark pitch?");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 13 GOES HERE
	push("addin", "", "", "As I turn away from her, suddenly she calls out to me again.");
	push("", "", "Donna", "Oh, no, wait! You're with the Chatter team, not Aardvark. That's later at two.");
	push("addin", "", "Donna", "... Sorry.");
	push("", "", "", "Sighing, you head back to your desk.");
	push("addin", "", "", "Donna's a good person, but she can be scatterbrained sometimes.");
	push("", "", "", "You grab your files for the Chatter meeting and head out the door.");
	push("addin", "", "", "Donna waves you off excitedly.");
	push("bg9", "", "", "");
	push("choice14", "", "", "You step out of the building and pull out your phone to call an Uber.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 14 GOES HERE
	push("", "", "", "After a minute of waiting, the car pulls up in front of you. The window winds down.");
	push("choice15", "", "", "Travis, the driver, nods at you to get in.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 15 GOES HERE
	push("addin", "", "", "It's clear that he's used up all his words for the day.");
	push("", "", "", "The mandate took many things away.");
	push("addin", "", "", "Simple greetings were not spared.");
	push("bg10", "", "", "");
	push("", "", "", "You arrive at the Chatter offices. It's seen better days. Chatter makes voice-activated appliances, from washing machines to soap dispensers.");
	push("addin", "", "", "Ever since the mandate, business hasn't been so good.");
	push("bg11", "", "", "");
	push("", "", "", "You head in past reception, into the meeting room. They haven't had a receptionist since last year.");
	push("addin", "", "", "The Chatter folks are waiting in the conference room.");
	push("", "", "Chatter CEO", "Thank you for coming. We've gathered. Please.");
	push("", "", "", "The CEO gestures to the front of the room, where the projector connection is.");
	push("addin", "", "", "You set up your presentation slides and get prepared.");
	push("choice16", "", "", "It's time to begin.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 16 GOES HERE
	push("addin", "", "", "It's becoming clearer and clearer where this presentation is heading.");
	push("choice17", "", "", "You try to press on with the bad news...");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 17 GOES HERE
	push("addin", "", "", "The CTO fidgets idly, playing with his armrests.");
	push("", "", "", "It's clear that you've lost them both.");
	push("choice18", "", "", "The CEO, however, is laser-focused on you.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 18 GOES HERE
	push("addin", "", "", "The CFO's pencil is now out of graphite.");
	push("", "", "CEO", "Well guys... thoughts?");
	push("", "", "CFO", "With the numbers and graphs. Yeah.");
	push("", "", "", "The CTO shrugs and nods at the CFO.");
	push("", "", "", "The CEO turns back to you.");
	push("addin", "", "", "He is clearly distressed.");
	push("choice19", "", "CEO", "I did not think that it was this bad. We'll email.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 19 GOES HERE
	push("", "", "", "You pack up and leave as they begin a fervent discussion, but with carefully picked words. You notice that the CTO still hasn't spoken, and instead types his thoughts down.");
	push("addin", "", "", "Perhaps he's run out of words too.");
	push("bg12", "", "", "");
	push("", "", "", "You step out onto the pavement. The sun has set and traffic is getting heavier. The only noise in the city nowadays is the sound of cars whizzing by.");
	push("addin", "", "", "Hardly anyone talks outdoors anymore.");
	push("", "", "", "A bird on a nearby tree chips nonchalantly.");
	push("", "", "", "Prices for Uber Silent are ridiculously high right now. You flag an approaching cab, hoping that it would be a silent ride.");
	push("bg13", "", "", "");
	push("", "", "", "The cab is dirty, with worn leather and frayed seatbelts. Your cab driver has a shiny bald spot that glares at you.");
	push("addin", "", "", "Isn't it night time? How is it still so shiny?");
	push("choice20", "", "Cab Driver", "Long day?");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 20 GOES HERE
	push("", "", "", "You ride in silence. The world seems normal from inside the car.");
	push("addin", "", "", "You can pretend there are conversations going on elsewhere, drowned out by the hum of engines and exhausts.");
	push("", "", "Cab Driver", "You know, I voted against the ban. Yeah, it sounded dumb, and it still doesn't make sense....");
	push("choice21", "", "Cab Driver", "... But here we are.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 21 GOES HERE
	push("addin", "", "Cab Driver", "... But that was back when everyone was talking on their devices constantly and screaming at each other.");
	push("choice22", "", "Cab Driver", "But...");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 22 GOES HERE
	push("", "", "Cab Driver", "Have you been overseas lately? It's crazy how much louder everything is.");
	push("addin", "", "Cab Driver", "We've all gotten so used to the quiet.");
	push("", "", "Cab Driver", "...");
	push("", "", "", "After a while, he starts to gesture to the side. He's asking if there is where we're supposed to turn in.");
	push("addin", "", "", "He's spent his last words on me.");
	push("", "", "", "You point, telling him to turn in. A few people are out walking quietly, some with their dogs.");
	push("addin", "", "", "People needed to find something to do with their time since the mandate made it difficult to hold conversations at home.");
	push("", "", "", "The cab comes to a halt outside the gates. The cab driver points at the fare machine, turning and looking back at me.");
	push("addin", "", "", "You pay him and get out of the cab.");
	push("bg14", "", "", "");
	push("", "", "", "People walk silently by, glued to their phones.");
	push("addin", "", "", "The dogs bark at each other, unencumbered by the mandate.");
	push("", "", "", "You continue walking on silently.");
	push("", "", "", "You're here.");
	push("addin", "", "", "You know exactly how much you have left. You've been counting.");
	push("end", "", "", "");
	push("bg15", "", "", "");
	push("", "", "", "&quot;Late at night, I call my long distance lover, <br>proudly say <em>I only used fifty-nine today.</em>");
	push("addin", "", "", "<em>I saved the rest for you.</em>&quot;")
	push("", "", "", "&quot;When she doesn't respond, <br>I know she's used up all her words,")
	push("addin", "", "", "so I slowly whisper <em>I love you</em><br>thirty-two and a third times.&quot;")
	push("", "", "", "&quot;After that we just sit on the line")
	push("addin", "", "", "and listen to each other breathe.&quot;")
	push("", "", "", "<em>&quot;- The Quiet World&quot;</em>, by Jeffrey McDaniel.")
	push("fin","","","");


	// ADD LISTENERS TO BUTTONS ---------------------------
	nextbtn.addEventListener("click", nextStep);

};