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
	var gamestate = 50;
	var gametext = [];
	var gamechoice = [];
	var wordcount = 0;

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
			$("#bottompanel").hide();
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
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "Sure, coming right up.";
				nextStep();
				clearListeners();
			});
			$("#choice2").on("click", function() {
				gamechoice[1] = 2;;
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "Sure, coming right up.";
				nextStep();
				clearListeners();
			});
			$("#choice3").on("click", function() {
				gamechoice[1] = 3;
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "Sure, coming right up.";
				nextStep();
				clearListeners();
			});
			$("#choice4").on("click", function() {
				gamechoice[1] = 4;
				gametext[gamestate].header = "Barista";
				gametext[gamestate].text = "... .. Yeah, okay. Next.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice3") { // Do I say thanks for the coffee?
			$("#nextbtn").hide();
			choice1.innerHTML = "Thanks.";
			$("#choice2").hide();
			$("#choice3").hide();
			choice4.innerHTML = "[Walk away.]";
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[2] = 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The barista beams as he hands you the coffee. Ever since the mandate, the value of courtesy has gone up tenfold. People now notice when you're nice to them, now that it's worth something.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[2] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You see the flick of a scowl across the barista's face. Rudeness is still something that we have to come to grips with in the wake of the mandate.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice4") { // Respond to receptionist
			$("#nextbtn").hide();
			choice1.innerHTML = "Morning! Had a good weekend?";
			$("#choice1").show();
			choice2.innerHTML = "Morning!";
			$("#choice2").show();
			choice3.innerHTML = "[Nod at Donna.]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[3] = 1;
				gametext[gamestate].header = "Donna";
				gametext[gamestate].text = "Sure did!";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[3] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna smiles at you ever so slightly.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[3] = 3;
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
			$("#choice2").hide();
			$("#choice3").hide();
			choice4.innerHTML = "[Nod at Donna.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[4] = 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "Donna beams as she hands you a file with today's agenda. She still appreciates small talk, a rarity these days.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[4] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "She quietly hands you a file with details for the upcoming meetings.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice6") { // Respond to CEO
			$("#nextbtn").hide();
			choice1.innerHTML = "I will review this again and send an email.";
			$("#choice1").show();
			choice2.innerHTML = "Catch up via email.";
			$("#choice2").show();
			choice3.innerHTML = "[Leave the room]";
			$("#choice3").show();
			$("#choice4").hide();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[5] = 1;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO seems a little taken aback by the length of your response. He nods in thanks, having used up all his words on the presentation.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[5] = 2;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The CEO nods curtly and walks out of the room. The meeting is adjourned.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[5] = 3;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "You get up and leave the room. It's been easier to leave things unsaid ever since the mandate.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice7") { // Hot dog order
			$("#nextbtn").hide();
			choice1.innerHTML = "Give me a hotdog with mustard and relish.";
			$("#choice1").show();
			choice2.innerHTML = "One hotdog with relish.";
			$("#choice2").show();
			choice3.innerHTML = "Dog with ketchup.";
			$("#choice3").show();
			choice4.innerHTML = "[Point at the picture of a hot dog.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[6] = 1;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure thing. Two dollars.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[6] = 2;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Two dollars.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[6] = 3;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Two dollars.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[6] = 4;
				gametext[gamestate].header = "";
				gametext[gamestate].text = "The hot dog guy grunts holds up two fingers.";
				nextStep();
				clearListeners();
			});
		}

		if (gametext[gamestate].event === "choice8") { // Hot dog toppings
			clearListeners();
			$("#nextbtn").hide();
			choice1.innerHTML = "Mustard and relish.";
			$("#choice1").show();
			choice2.innerHTML = "Just relish.";
			$("#choice2").show();
			choice3.innerHTML = "Ketchup.";
			$("#choice3").show();
			choice4.innerHTML = "[Shake your head no.]";
			$("#choice4").show();
			$("#choicebtns").fadeIn(400);
			$('#choice1').on("click", function() {
				gamechoice[7] = 1;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
			$('#choice2').on("click", function() {
				gamechoice[7] = 2;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
			$('#choice3').on("click", function() {
				gamechoice[7] = 3;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
			$('#choice4').on("click", function() {
				gamechoice[7] = 4;
				gametext[gamestate].header = "Hot Dog Guy";
				gametext[gamestate].text = "Sure.";
				nextStep();
				clearListeners();
			});
		}

		// if (gametext[gamestate].event === "") {}
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
		} else { // else state text will replace existing text.
			$("#text").hide();
			text.innerHTML = gametext[gamestate].text;
			$("#text").fadeIn(400);
		}

		console.log("this is line " + gamestate);
		console.log(gametext[gamestate]);
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
	push("", "barista-mid","Barista","Hey Brad. The usual?");
	push("", "","Brad","Yes, please. Give me a water on the side.");
	push("", "","Barista","Hey there, what would you like?");
	push("", "","Patron","Skinny decaf. Cronut.");
	push("", "","","And just like that, it's your turn.");
	push("choice2", "","Barista","How can I help you?");
	push("unchoice", "","",""); // RESULT FOR CHOICE 2 GOES HERE.
	push("choice3", "","Barista","Here you go.");
	push("unchoice", "","",""); //RESULT FOR CHOICE 3 GOES HERE.
	push("addin", "clearchars","","You walk out of the coffee shop and make your way to the office, life-giving sustenance in hand."); 
	push("bg3", "", "", "");
	push("", "", "", "You walk through the double doors into the office. A few of your colleagues have already gotten in to work.");
	push("addin", "", "", "Donna, the receptionist, is bright and sharp.");
	push("choice4", "", "Donna", "Good morning!");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 4 GOES HERE.
	push("", "", "Donna", "You have a meeting scheduled today! It's starting soon.");
	push("choice5", "", "Donna", "Would you like to take a look at the brief now?");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 5 GOES HERE.
	push("addin", "", "", "You decide to head to the meeting directly.");
	push("bg4", "", "", "");
	push("", "", "", "There are already a few people in the meeting room, talking slowly and quietly.");
	push("addin", "", "", "After a while, the CEO stands up and starts to give his presentation.");
	push("blackout", "", "", "");
	push("showBottomPanel", "", "", "...");
	push("addin", "", "", "...");
	push("bg5", "", "", "");
	push("", "", "CEO", "... And that's the end of this week's meeting.");
	push("choice6", "", "", "The CEO looks at you and asks if there's anything that needs to be done.");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 6 GOES HERE.
	push("", "", "", "And with that, the meeting ends. You get back to your desk and put some stuff down before heading out for lunch.");
	push("addin", "", "", "... You're starving.");
	push("bg6", "", "", "");
	push("", "", "", "You get out on the sidewalk and get to your usual hot dog cart. The hot dog guy immediately recognizes you.");
	push("choice7", "", "Hot Dog Guy", "Yeah?");
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 7 GOES HERE.
	push("choice8", "", "", "The hot dog guy grunts and gestures towards the toppings."); 
	push("unchoice", "", "", ""); // RESULT FOR CHOICE 7 GOES HERE.
	push("", "", "", "You take the hot dog, stuff the money in the vendor's hand and walk off.");
	push("", "", "", "");
	push("", "", "", "");
	push("", "", "", "");
	push("", "", "", "");


	// ADD LISTENERS TO BUTTONS ---------------------------
	nextbtn.addEventListener("click", nextStep);

	// background.style.backgroundImage = "url(assets/img/coffeeshop.jpg)";
	// char.style.backgroundImage = "url(assets/img/barista.jpg)";
};