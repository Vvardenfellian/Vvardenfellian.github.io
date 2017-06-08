var game = new Phaser.Game(600,600,Phaser.CANVAS, "gameDev");

var content = [];
//var OwenTextBox;
//var SarahTextBox;
//var MaddieTextBox;
//var AnnaTextBox;
//var TempTitle;
var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 40;
var lineDelay = 0;

var storyTracker = 0;		//controls progression
var storyScene = 1;
var storyDay =  1;
var dialogue;
var z;						//progress button
var change = true; 
var menuSwitch = false;   				//controls whether or not progress can be made

var maddieNumber = false;
var maddieCall = false;
var goToDiner = false;
var annaMad = false;
var sarahInterest = false;

var pressZ = true;

var sarahApp = 3;
var annaApp = 3;
var maddieApp = 3;

var choice = 0;

var mainState = {  

	

	preload:function(){
		 this.load.image('TextBox', 'assets/TextBox.png');
		 this.load.image('OwenTextBox', 'assets/OwenTextBox.png');
		 this.load.image('SarahTextBox', 'assets/SarahTextBox.png');
		 this.load.image('AnnaTextBox', 'assets/AnnaTextBox.png');			//loads images from disk for game
		 this.load.image('MaddieTextBox', 'assets/MaddieTextBox.png');
		 this.load.image('TempTitle','assets/TempTitle.png');
		 this.load.image('StreetBackground','assets/StreetBackground.png');
		 this.load.image('StoreBackground','assets/StoreBackground.png');
		 this.load.image('RoomBackground','assets/RoomBackground.png');
		 this.load.image('DinerBackground','assets/DinerBackground.png');
		 this.load.image('Menu1','assets/Menu1.png');
		 this.load.image('Menu2','assets/Menu2.png');
		 this.load.image('Menu3','assets/Menu3.png');
		 this.load.image('Menu4','assets/Menu4.png');
		 this.load.image('ABarEmpty','assets/ABarEmpty.png');
		 this.load.image('ABar25','assets/ABar25.png');
		 this.load.image('ABarHalf','assets/ABarHalf.png');
		 this.load.image('ABar75','assets/ABar75.png');
		 this.load.image('ABarFull','assets/ABarFull.png');
		 this.load.image('Highlight','assets/Highlight.png');
		 this.load.image('Day2','assets/Day2.png');
		 this.load.image('Day3','assets/Day3.png');

		 
	},

	

	create:function(){
		 z = game.input.keyboard.addKey(Phaser.Keyboard.Z);


		 this.tempTitle = this.game.add.sprite(0, 0, "TempTitle");

		 this.streetBackground = this.game.add.sprite(0, 0, "StreetBackground");
		 this.storeBackground = this.game.add.sprite(0, 0, "StoreBackground");
		 this.roomBackground = this.game.add.sprite(0, 0, "RoomBackground");
		 this.dinerBackground = this.game.add.sprite(0, 0, "DinerBackground");

		 this.day2 = this.game.add.sprite(0,0, "Day2");
		 this.day3 = this.game.add.sprite(0,0, "Day3");

		 this.textBox = this.game.add.sprite(0, 0, "TextBox");
		 this.owenTextBox = this.game.add.sprite(0, 0, "OwenTextBox");
		 this.sarahTextBox = this.game.add.sprite(0, 0, "SarahTextBox");
		 this.annaTextBox = this.game.add.sprite(0, 0, "AnnaTextBox");
		 this.maddieTextBox = this.game.add.sprite(0, 0, "MaddieTextBox");
		 this.highlight = this.game.add.sprite(0, 152, "Highlight");

		 this.menu1 = this.game.add.sprite(0, 0, "Menu1");
		 this.menu2 = this.game.add.sprite(0, 0, "Menu2");
		 this.menu3 = this.game.add.sprite(0, 0, "Menu3");
		 this.menu4 = this.game.add.sprite(0, 0, "Menu4");

		 this.sABarFull = this.game.add.sprite(70, 47, "ABarFull");
		 this.sABar75 = this.game.add.sprite(70, 47, "ABar75");
		 this.sABarHalf = this.game.add.sprite(70, 47, "ABarHalf");
		 this.sABar25 = this.game.add.sprite(70, 47, "ABar25");
		 this.sABarEmpty = this.game.add.sprite(70, 47, "ABarEmpty");

		 this.aABarFull = this.game.add.sprite(70, 86, "ABarFull");
		 this.aABar75 = this.game.add.sprite(70, 86, "ABar75");
		 this.aABarHalf = this.game.add.sprite(70, 86, "ABarHalf");
		 this.aABar25 = this.game.add.sprite(70, 86, "ABar25");
		 this.aABarEmpty = this.game.add.sprite(70, 86, "ABarEmpty");

		 this.mABarFull = this.game.add.sprite(70, 125, "ABarFull");
		 this.mABar75 = this.game.add.sprite(70, 125, "ABar75");
		 this.mABarHalf = this.game.add.sprite(70, 125, "ABarHalf");
		 this.mABar25 = this.game.add.sprite(70, 125, "ABar25");
		 this.mABarEmpty = this.game.add.sprite(70, 125, "ABarEmpty");

		 this.streetBackground.kill();
		 this.storeBackground.kill();
		 this.roomBackground.kill();
		 this.dinerBackground.kill();

		 this.textBox.kill();
		 this.owenTextBox.kill();
		 this.sarahTextBox.kill();
		 this.annaTextBox.kill();
		 this.maddieTextBox.kill();

		 this.sABarFull.kill();
		 this.sABar75.kill();
		 this.sABarHalf.kill();
		 this.sABar25.kill();
		 this.sABarEmpty.kill();

		 this.aABarFull.kill();
		 this.aABar75.kill();
		 this.aABarHalf.kill();
		 this.aABar25.kill();
		 this.aABarEmpty.kill();

		 this.mABarFull.kill();
		 this.mABar75.kill();
		 this.mABarHalf.kill();
		 this.mABar25.kill();
		 this.mABarEmpty.kill();

		 this.menu1.kill();
		 this.menu2.kill();
		 this.menu3.kill();
		 this.menu4.kill();

		 this.highlight.kill();

		 this.day2.alpha = 0;
		 this.day2.kill();
		 this.day3.alpha = 0;
		 this.day2.kill();
		 
		 text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
		 //this.tempTitle.kill();
		 this.tempTitle.alpha = 0;
		 game.add.tween(this.tempTitle).to( { alpha: 1 }, 1000, "Linear", true);
	},

	

	update:function(){

		if(menuSwitch == true && storyDay == 1){
			this.menu1.revive();
			this.menu1.bringToTop();
		}

		if(menuSwitch == true && storyDay == 2){
			this.menu2.revive();
			this.menu2.bringToTop();
		}

		if(menuSwitch == true && storyDay == 3){
			this.menu3.revive();
			this.menu3.bringToTop();
		}

		if(menuSwitch == true && storyDay == 4){
			this.menu4.revive();
			this.menu4.bringToTop();
		}


		if(menuSwitch == true){
				if(sarahApp == 1){
					this.sABarEmpty.revive();
					this.sABarEmpty.bringToTop();
				}

				if(sarahApp == 2){
					this.sABar25.revive();
					this.sABar25.bringToTop();
				}
					
				if(sarahApp == 3){
					this.sABarHalf.revive();
					this.sABarHalf.bringToTop();
				}

				if(sarahApp == 4){
					this.sABar75.revive();
					this.sABar75.bringToTop();
				}

				if(sarahApp == 5){
					this.sABarFull.revive();
					this.sABarFull.bringToTop();
				}

				if(sarahApp > 5){
					sarahApp = 5;
				}

				if(sarahApp < 1){
					sarahApp = 1;
				}




				if(annaApp == 1){
					this.aABarEmpty.revive();
					this.aABarEmpty.bringToTop();
				}

				if(annaApp == 2){
					this.aABar25.revive();
					this.aABar25.bringToTop();
				}

				if(annaApp == 3){
					this.aABarHalf.revive();
					this.aABarHalf.bringToTop();
				}

				if(annaApp == 4){
					this.aABar75.revive();
					this.aABar75.bringToTop();
				}

				if(annaApp == 5){
					this.aABarFull.revive();
					this.aABarFull.bringToTop();
				}

				if(annaApp > 5){
					annaApp = 5;
				}

				if(annaApp < 1){
					annaApp = 1;
				}


				

				if(maddieApp == 1){
					this.mABarEmpty.revive();
					this.mABarEmpty.bringToTop();
				}

				if(maddieApp == 2){
					this.mABar25.revive();
					this.mABar25.bringToTop();
				}

				if(maddieApp == 3){
					this.mABarHalf.revive();
					this.mABarHalf.bringToTop();
				}

				if(maddieApp == 4){
					this.mABar75.revive();
					this.mABar75.bringToTop();
				}

				if(maddieApp == 5){
					this.mABarFull.revive();
					this.mABarFull.bringToTop();
				}

				if(maddieApp > 5){
					maddieApp = 5;
				}

				if(maddieApp < 1){
					maddieApp = 1;
				}



		}
		

		if(menuSwitch == false){
			this.menu1.kill();
			this.menu2.kill();
			this.menu3.kill();
			this.menu4.kill();

			this.sABarFull.kill();
		 	this.sABar75.kill();
			this.sABarHalf.kill();
		 	this.sABar25.kill();
			this.sABarEmpty.kill();

		 	this.aABarFull.kill();
		 	this.aABar75.kill();
		 	this.aABarHalf.kill();
		 	this.aABar25.kill();
		 	this.aABarEmpty.kill();

		 	this.mABarFull.kill();
		 	this.mABar75.kill();
		 	this.mABarHalf.kill();
		 	this.mABar25.kill();
		 	this.mABarEmpty.kill();
		}
		



		

//STORY PROGRESSION




		//DAY 1 SCENE 1
		


		if(change == true && storyTracker == 1 && storyScene == 1 && storyDay == 1){
			this.tempTitle.kill();
			this.streetBackground.revive();
			content = ["Ahhh, it's always so nice to see warmer ",
			"weather, isn't it?"
			];
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 2 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I agree, but I like the cold weather, ",
			"too. Winter is so pretty!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["I don't like the cold, but winter ",
			"is definitely pretty - at least until the ",
			"snow turns grimy."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I love when the snow is fresh and sparkles",
			"in the sunlight. It's blinding but so ",
			"beautiful!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["I had no idea you liked snow so much.",
			"It's weird that after all this time we",
			"still find out new things about eachother."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yeah, you're right. How long has it",
			"been now? Nine years?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["Let's see... We met when I was twelve,",
			"and I'm twenty-one now, so yeah, nine years."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["It's crazy right?! We still have a",
			"lot of years ahead of us too, Owen! Isn't it",
			"exciting that you get to spend so much more",
			"time with me and my wild antics?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Haha, of course!",
			"",
			"",
			"Oh no..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			this.highlight.revive();
			change = false;
		}


		//CHOICE SPLIT

						if(change == true && storyTracker == 10 && storyScene == 1 && storyDay == 1){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							content = ["I knew you loved me, Owen! You'll",
							"have to deal with me forever!"
							];
							choice = 0;
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							this.highlight.kill();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 1 && storyDay == 1){
							this.sarahTextBox.kill();
							content = ["Strangely, I'm okay with that."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 1 && storyDay == 1){
							this.owenTextBox.kill();
							content = ["Well, I would hope so! Anyway,",
							"here's your workplace! Have fun!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							this.highlight.kill();
							change = false;
						}

							if(change == true && storyTracker == 13 && storyScene == 1 && storyDay == 1){
							this.sarahTextBox.kill();
							content = ["Yeah, well, I'll definitely try.",
							"I'll see you later, Sarah."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}


		//CHOICE SPLIT

						if(change == true && storyTracker == 29 && storyScene == 1 && storyDay == 1){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							content = ["Awh, Owen, you're no fun... Oh well.",
							"Here's your workplace! Have fun!"
							];
							choice = 0;
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							this.highlight.kill();
							change = false;
						}

						if(change == true && storyTracker == 30 && storyScene == 1 && storyDay == 1){
							this.sarahTextBox.kill();
							content = ["Yeah, well, I'll definitely try.",
							"I'll see you later, Sarah."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 31 && storyScene == 1 && storyDay == 1){
							storyScene = 2;
							storyTracker = 1;
						}

						if(change == true && storyTracker == 14 && storyScene == 1 && storyDay == 1){
							storyScene = 2;
							storyTracker = 1;
						}


		




























		// DAY 1 SCENE 2



		if(change == true && storyTracker == 1 && storyScene == 2 && storyDay == 1){
			game.add.tween(this.streetBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 2 && this.streetBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 1 && this.streetBackground.alpha == 0){
			this.storeBackground.revive();
			this.streetBackground.kill();
			this.storeBackground.alpha = 0;
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Well hey there, Owen! How was your trip here?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Hey Anna! My trip was fine.",
			"How long have you been here?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I actually just got here about five",
			"minutes ago! I just clocked in."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["I need to clock in, too. Wanna come",
			"with me?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Of course!",
			"Hey, Owen..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah? What is it, Anna?",
			"Are you okay?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yes, I'm fine. I was just wondering",
			"who that girl I see you with all the time is.",
			"Is that your girlfriend?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Oh, Sarah? No she isn't my girlfriend.",
			"She's my best friend. I've known her since",
			"I was twelve. "
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Oh, okay. You two seem really close.",
			"I'm happy for you guys."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, we are. She walks to work with me",
			"most days. She makes me food a lot, too. She's",
			"really good at cooking! What about you?",
			"Do YOU have a boyfriend, Anna?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

			if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["What? No! Nothing like that for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Haha, don't be so embarrassed!",
			"I'm just messing around."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I- I know!",
			"What time do you get off work tonight?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["I get off at eight I think."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I get off at seven-thirty.",
			"Do you want to walk home together?",
			"I'll wait for you."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, I'll walk home with you, Anna.",
			"Sounds fun."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Okay! Great! I'm glad."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 1){
			storyScene = 3;
			storyTracker = 1;
		}



		


































		//DAY 1 SCENE 3




		if(change == true && storyTracker == 1 && storyScene == 3 && storyDay == 1){
			this.storeBackground.alpha = 1;
			game.add.tween(this.storeBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if( storyScene == 3 && this.storeBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 1 && this.storeBackground.alpha == 0){
			this.streetBackground.revive();
			this.storeBackground.kill();
			game.add.tween(this.streetBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["So where do you live, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["I live on Staton Road.",
			"It's about a fifteen minute walk."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["That's pretty close to me!",
			"I live about a two minute walk away from",
			"you on Haven Road."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Wow, that's really cool! I didn't",
			"know you were so close by."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yeah! Since we're so close we should",
			"do something someti- Hey, you okay, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, it's just that that girl over there",
			"looks familiar. I think I went to",
			"school with her."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Did you want to go say hi?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, sure. I think her name is Maddie."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 1){
			content = ["Hey, Maddie!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Huh? Do I know you?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["Yeah, it's Owen!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["...?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["You know, from high school?",
			"We had multiple classes together."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Oh, I think I remember you now.",
			"You're the kid who spilled the chemicals",
			"on himself in chemistry. It looked like",
			"you peed yourself, hehe."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["Ugh..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 3 && storyDay == 1){
			content = ["Yeah. That's me. Say... You look",
			"a lot different than you used to. I'm actually",
			"surprised I recognized you."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yeah, I dyed my hair blonde,",
			"and I only buy designer clothes now.",
			"My dad is rich now and likes to buy me stuff."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 19 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["Sounds like you are quite wealthy now!",
			"Good for you, Maddie!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 20 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Well, thanks."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 21 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Hey, do you wanna keep in touch?",
			"",
			"",
			"Alright, well it was nice to see you again",
			"Bye!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}



		//CHOICE SPLIT



						if(change == true && storyTracker == 22 && storyScene == 3 && storyDay == 1){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							maddieApp = maddieApp + 1;
							annaApp = annaApp - 1;
							maddieNumber = true;
							content = ["Hmm, sure, you're actually kinda cute.",
							"Here you go. Give me a call tomorrow."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 23 && storyScene == 3 && storyDay == 1){
							this.maddieTextBox.kill();
							content = ["I definitely will! Seeya, Maddie!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 24 && storyScene == 3 && storyDay == 1){
							this.owenTextBox.kill();
							content = ["Bye bye!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 25 && storyScene == 3 && storyDay == 1){
							this.maddieTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 26 && storyScene == 3 && storyDay == 1){
							this.annaTextBox.kill();
							content = ["Anna, are you alright?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 27 && storyScene == 3 && storyDay == 1){
							this.owenTextBox.kill();
							content = ["Uhhh, yeah, I- I'm fine.",
							"I think I want to walk home by myself."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 28 && storyScene == 3 && storyDay == 1){
							this.annaTextBox.kill();
							content = ["Oh, o- okay.",
							"Bye, Anna..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 29 && storyScene == 3 && storyDay == 1){
							storyScene = 4;
							storyTracker = 1;
						}





		//CHOICE SPLIT



						if(change == true && storyTracker == 41 && storyScene == 3 && storyDay == 1){
							this.owenTextBox.kill();
							choice = 0;
							wordDelay = 40;
							maddieApp = 1;
							content = ["Bye."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 42 && storyScene == 3 && storyDay == 1){
							this.maddieTextBox.kill();
							content = ["Well, that was a little awkward."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 43 && storyScene == 3 && storyDay == 1){
							this.annaTextBox.kill();
							content = ["Yeah, tell me about it."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 44 && storyScene == 3 && storyDay == 1){
							this.owenTextBox.kill();
							content = ["So, you peed yourself in high school?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 45 && storyScene == 3 && storyDay == 1){
							this.annaTextBox.kill();
							content = ["Oh god, get out of here, haha!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 46 && storyScene == 3 && storyDay == 1){
							this.owenTextBox.kill();
							content = ["Hehe, well this is my road.",
							"I'll see you at work tomorrow, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 47 && storyScene == 3 && storyDay == 1){
							storyScene = 4;
							storyTracker = 1;
						}

		
		







































		//DAY 1 SCENE 4



		if(change == true && storyTracker == 1 && storyScene == 4 && storyDay == 1){
			this.streetBackground.alpha = 1;
			game.add.tween(this.streetBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 4 && this.streetBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			storyTracker = storyTracker + 1;
			change = true;
		}

		

		if(change == true && storyTracker == 2 && storyScene == 4 && annaApp == 3 && storyDay == 1 && this.streetBackground.alpha == 0){
			this.roomBackground.revive();
			this.streetBackground.kill();
			this.roomBackground.alpha = 0;
			this.annaTextBox.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Heh, today was a pretty good day.",
			"Anna is really cool. She's never asked",
			"me to walk home with her before."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && annaApp == 3 && storyDay == 1){
			content = ["Ugh, I'm beat. My bed looks so nice.",
			"Bed time."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}



		//IF YOU GOT MADDIES NUMBER




		if(change == true && storyTracker == 2 && storyScene == 4 && annaApp == 2 && storyDay == 1 && this.streetBackground.alpha == 0){
			this.roomBackground.revive();
			this.streetBackground.kill();
			this.roomBackground.alpha = 0;
			this.annaTextBox.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Anna seemed really bummed out...",
			"I wonder what was bothering her.",
			"Things are going to be awkward at work."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && annaApp == 2 && storyDay == 1){
			content = ["Ugh, I'm beat. My bed looks so nice.",
			"Bed time."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		





		if(change == true && storyTracker == 4 && storyScene == 4 && storyDay == 1){
			storyScene = 5;
			storyTracker = 1;
			pressZ = false;
		}



		//DAY TRANSITION 1



		if(change == true && storyTracker == 1 && storyScene == 5 && storyDay == 1){
			this.roomBackground.alpha = 1;
			game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 5 && this.roomBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyScene == 5 && this.roomBackground.alpha == 0 && storyDay == 1 && storyTracker == 2){
			this.roomBackground.kill();
			game.add.tween(this.owenTextBox).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 5 && this.owenTextBox.alpha == 0 && storyDay == 1 && storyTracker == 2){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyScene == 5 && this.owenTextBox.alpha == 0 && storyDay == 1 && storyTracker == 3){
			this.owenTextBox.kill();
			this.day2.revive();
			game.add.tween(this.day2).to( { alpha: 1}, 500, "Linear", true);
			change = true;
		}

		if(change == true && storyScene == 5 && storyDay == 1 && storyTracker == 3 && this.day2.alpha >= .85){
			storyScene = 1;
			storyDay = 2;
			storyTracker = 1;
			pressZ = true;
			change = false;
		}




		//END OF DAY 1

		































		//BEGINNING OF DAY 2


		if(storyScene == 1 && storyTracker == 2 && storyDay == 2){

			game.add.tween(this.day2).to( { alpha: 0}, 250, "Linear", true);
			change = false;	
			pressZ = false;
		}

		if(storyScene == 1 && this.day2.alpha <=.02 && storyDay == 2 && storyTracker == 2){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyScene == 1 && storyTracker == 3 && storyDay == 2 && this.day2.alpha <= .02){
			this.day2.kill();
			this.owenTextBox.revive();
			game.add.tween(this.owenTextBox).to( { alpha: 1}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 1 && this.owenTextBox.alpha == 1 && storyDay == 2 && storyTracker == 3){
			storyTracker = storyTracker + 1;
			content = ["Huh? Who's knocking at the door?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = true;
		}

		if(change == true && storyScene == 1 && storyTracker == 4 && storyDay == 2 && this.owenTextBox.alpha == 1){
			this.roomBackground.revive();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			change = false;
			pressZ = true;
		}




		if(change == true && storyScene == 1 && storyTracker == 5 && storyDay == 2){
			content = ["I guess mom isn't home.",
			"I'll answer it."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyScene == 1 && storyTracker == 6 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Hey, Owen!",
			"What're you up to?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyScene == 1 && storyTracker == 7 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["I was just relaxing, that's all.",
			"It's great to see you. Did you need something?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyScene == 1 && storyTracker == 8 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Pfft, what, a friend can't just stop by?",
			"You're right though, I do want something.", 
			"I came over to see if you want to go", 
			"out for breakfast!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyScene == 1 && storyTracker == 9 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["I don't know, Sarah.",
			"I have to go to work soon. I don't want",
			"to be late again."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyScene == 1 && storyTracker == 10 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Oh, come on, Owen! We'll be quick.",
			"We haven't been able to spend much time",
			"together since you got that new job."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 1 && storyDay == 2){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Well, okay! As long as we're quick.",
			"",
			"",
			"I'm sorry, I really don't have time.",
			"You know I'd normally love to go with you."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			this.highlight.reset(0, 152);
			change = false;
		}




		//CHOICE SPLIT




						if(change == true && storyTracker == 12 && storyScene == 1 && storyDay == 2){
							this.owenTextBox.kill();
							this.highlight.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp + 1;
							goToDiner = true;
							content = ["Yay! I knew you'd come with me."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyScene == 1 && storyTracker == 13 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["You know I can't say no to you.",
							"Where did you want to go for breakfast?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 1 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["I was thinking we could just go to",
							"the diner we always go to. Sound good?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyScene == 1 && storyTracker == 15 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["That sounds perfect, Sarah.",
							"Let's go."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}




		//CHOICE SPLIT



						if(change == true && storyTracker == 31 && storyScene == 1 && storyDay == 2){
							this.owenTextBox.kill();
							this.highlight.kill();
							wordDelay = 40;
							choice= 0;
							sarahApp = sarahApp - 1;
							content = ["What, you mean I came here for nothing?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}


						if(change == true && storyScene == 1 && storyTracker == 32 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["No, not for nothing! It's always",
							"great to see you. You're always welcome.",
							"I just can't go this time."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 33 && storyScene == 1 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["It's okay, Owen. I'm just joking around.",
							"Sort of, hehe. Maybe I'll see you again later."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyScene == 1 && storyTracker == 34 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Yeah, maybe! I get off relatively",
							"early in the afternoon."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 35 && storyScene == 1 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["I'll make sure to find you then!",
							"Bye, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyScene == 1 && storyTracker == 36 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Bye, Sarah."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 37 && storyScene == 1 && storyDay == 2){
							content = ["Okay, off to work."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							change = false;
						}

		if(change == true && storyTracker == 38 && storyScene == 1 && storyDay == 2){
			storyScene = 3;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 16 && storyScene == 1 && storyDay == 2){
			storyScene = 2;
			storyTracker = 1;
		}





		
































		//DAY 2 SCENE 2





		if(change == true && storyTracker == 1 && storyScene == 2 && storyDay == 2){
			game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if( storyScene == 2 && this.roomBackground.alpha == 0 && storyDay == 2 && storyTracker == 1){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 2 && this.roomBackground.alpha == 0){
			this.dinerBackground.alpha = 0;
			this.dinerBackground.revive();
			this.roomBackground.kill();
			game.add.tween(this.dinerBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["What are you going to get, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["I think I'm going to get the usual agian -",
			"sausage patties, fried eggs on toast,",
			"and homefries."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Oh, that's so boring. You always get that."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["Oh yeah? Well what are you getting then?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Unlike you, I like trying new things!",
			"I'm going to go for the banana nut pancakes!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["That's a good choice, too! haha."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Speaking of new things...",
			"When are you going to get a new girlfriend?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["I guess it has been awhile..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Awh, don't feel bad, Owen!",
			"What kinds of girls do you like?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["Hmm, I guess ones that I think are pretty",
			"Who can make me laugh and make me feel",
			"excited to see them."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Sounds like someone you know, hehe!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			content = ["Let me guess, you?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 2){
			this.owenTextBox.kill();
			content = ["Well, of course!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 2){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Heh, you're funny...",
			"",
			"",
			"It wouldn't be too strange if we",
			"ended up dating. We're already so good",
			"together."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}




		//CHOICE SPLIT





						if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							sarahApp = sarahApp - 1;
							wordDelay = 40;
							choice = 0;
							content = ["Jeez, Owen. Harsh.",
							"You make it sound like it'd be awful."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Oh, that's not what I mean.",
							"I didn't mean for it to sound like that."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Eh, it's okay, Owen.",
							"I wouldn't date you either, hehe."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Gosh, not even I was that blunt."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 20 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Hey, our food is here!",
							"Let's dig in!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 21 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["It looks so good.",
							"It always does though."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 22 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Owen, you have to try these pancakes.",
							"They're amazing!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 23 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Wow! Those are good!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 24 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["See, trying new stuff is worth it!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 25 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["You're probably right...",
							"",
							"Oh no! Time really flew by. I'm going to be",
							"late for work. Here's some money, pay for me.",
							"Bye, Sarah! I had a good time."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

							if(change == true && storyTracker == 26 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Me too! Bye bye, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}





		//CHOICE SPLIT





						if(change == true && storyTracker == 35 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							sarahApp = sarahApp + 1;
							choice = 0;
							wordDelay = 40;
							content = ["I don't think it'd be weird either.",
							"A lot of people say that dating your",
							"best friend is usually what's best!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}
						
						if(change == true && storyTracker == 36 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["I can totally understand that.",
							"Best friends already know a lot about",
							"eachother. There's no awkward dating stage."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 37 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Yeah, I know what you mean!",
							"Dating is really tiresome. It takes me",
							"a while to open up and feel comfortable",
							"around somebody. Dating usually doesn't go too",
							"well for me."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 38 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Really? You're a total catch, Sarah.",
							"What guys have you even dated? I haven't",
							"heard of any of these guys, and we tell",
							"eachother everything!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 39 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Hehe, wouldn't you like to know!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 40 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Well, I mean, kind of, yeah -",
							"out of curiosity."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 41 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["If I'm being honest...",
							"Ugh, it's so embarrassing."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 42 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["You can tell me anything, Sarah."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 43 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["I tried to go on a date with a guy",
							"recently, but he stood me up. I never heard",
							"from him again. It kind of hurt, and I was",
							"too embarrassed to tell you..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 44 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["That guy is dumb. That isn't anything",
							"to be embarrassed about. It happens to all",
							"of us eventually. Some people just flake out."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 45 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["I guess so, but it just seems like",
							"I can't get any guy to stick around long."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 46 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["I know you really well.",
							"That isn't your fault at all. You're great."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 47 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Thanks, Owen. That makes me feel",
							"a little better. Hey, our food is here!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 48 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["It looks so good.",
							"It always does though."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 49 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Owen, you have to try these pancakes.",
							"They're amazing!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 50 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["Wow! Those are good!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 51 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["See, trying new stuff is worth it!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 52 && storyScene == 2 && storyDay == 2){
							this.sarahTextBox.kill();
							content = ["You're probably right...",
							"",
							"Oh no! Time really flew by. I'm going to be",
							"late for work. Here's some money, pay for me.",
							"Bye, Sarah! I had a good time."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

							if(change == true && storyTracker == 53 && storyScene == 2 && storyDay == 2){
							this.owenTextBox.kill();
							content = ["Me too! Bye bye, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

		

		if(change == true && storyTracker == 54 && storyScene == 2 && storyDay == 2){
			storyScene = 3;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 27 && storyScene == 2 && storyDay == 2){
			storyScene = 3;
			storyTracker = 1;
		}





		

































		//DAY 2 SCENE 3





		if(change == true && storyTracker == 1 && storyScene == 3 && storyDay == 2 && goToDiner == true){
			game.add.tween(this.dinerBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(change == true && storyTracker == 1 && storyScene == 3 && storyDay == 2 && goToDiner == false){
			game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		

		if(storyScene == 3 && this.dinerBackground.alpha == 0 && storyDay == 2 && storyTracker == 1 && goToDiner == true){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(storyScene == 3 && this.roomBackground.alpha == 0 && storyDay == 2 && storyTracker == 1 && goToDiner == false){
			storyTracker = storyTracker + 1;
			change = true;
		}

		


		// IF YOU WENT TO DINER && DIDNT GET MADDIES NUMBER





		if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == false){
			this.storeBackground.revive();
			this.dinerBackground.kill();
			annaMad = true;
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey, Owen! About time you get here.",
			"You're late, mister! Hehe."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.kill();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.annaTextBox.kill();
			annaApp = annaApp - 1;
			content = ["Yeah, I know...",
			"I was over at the diner with, Sarah."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Oh, I see.",
			"Why would you even go to a diner when",
			"you had to be at work so soon after?",
			"You need to stop being late, Owen."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["I'm sorry, Anna.",
			"I didn't know it would be such an issue."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Of course, it's an issue, Owen!",
			"We have a schedule for a reason, you know."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Yeah, I know that.",
			"Like I said, I'm sorry..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			content = ["Sigh... She seemed fine, and then",
			"she wasn't. She usually doesn't mind if",
			"I'm a little late. Something else must be",
			"bothering her."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Let's just get back to work."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Yeah, okay."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			content = ["Now I can't wait for the day to be over.",
			"Anna usually helps the day go faster."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.textBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			this.textBox.kill();
			content = ["Okay, time to go.",
			"I don't think Anna wants to talk",
			"so I'll just leave now that work is over."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}



		//IF YOU DIDNT GO TO DINER & DIDNT GET MADDIES NUMBER




		if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.storeBackground.revive();
			this.roomBackground.kill();
			annaMad = false;
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey, Owen! Right on time!",
			"That's rare, hehe."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.kill();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Oh, give me some credit!",
			"I'm on time more times than not, haha."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Mhmm, suuure."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["You sure do like picking on me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["I like having someone I can pick on.",
			"I like that you don't take it too seriously.",
			"I don't mean anything by it.",
			"I just have fun with you."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Are you trying to make me blush?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Awh, that's so adorable, Owen.",
			"Since you know something I look for in",
			"a person, what's something you look for?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["That's a good question.",
			"I like surrounding myself with people who",
			"I can laugh with. It's nice to have people",
			"around that you're so comfortable with that",
			"there's no pressure over what to say next."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["I've never thought about it, but I like",
			"that, too. I can get pretty nervous around",
			"people. I think you're the easiest person to",
			"be around that I know."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.annaTextBox.kill();
		    annaApp = annaApp + 1;
			content = ["Well, I'm honored!",
			"You're easy to talk to as well."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Thanks, Owen.",
			"Oh, I think this customer needs help!",
			"Get back to work!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 2 
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Yes, ma'am!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}




		//GOT MADDIE'S NUMBER AND WENT TO DINER



		if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.storeBackground.revive();
			this.dinerBackground.kill();
			annaMad = true;
			annaApp = annaApp - 1;
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey, Anna!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.kill();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["You're late."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.annaTextBox.kill();
			content = ["Oh, yeah... sorry.",
			"I was out eating with, Sarah."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Eating with a friend?",
			"I'm surprised you didn't say Maddie.",
			"Owen, you know you had work. You need",
			"to grow up. I'm tired of you being late."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.annaTextBox.kill();
			content = ["I said I'm sorry, Anna.",
			"It won't happen again."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["You say that every time.",
			"Just get to work."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			this.annaTextBox.kill();
			content = ["Okay..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 2
		&& this.dinerBackground.alpha == 0 && goToDiner == true && maddieNumber == true){
			content = ["Yeah, I definitely messed things up",
			"with her. Damn it."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Oh, Owen! I thought you worked here.",
			"Why are you working retail still?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.maddieTextBox.kill();
			content = ["Er, I don't know.",
			"I mean, I make enough money here."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Well, suit youself!",
			"Are you still going to call me or what?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.maddieTextBox.kill();
			content = ["I planned on it, yeah.",
			"I thought it was weird to call the day of."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Not to me. Being forward is attractive."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.maddieTextBox.kill();
			content = ["I guess that explains why you're so forward",
			"with me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["I think you're cute, Owen.",
			"but if you aren't going to call me to set",
			"a date to take me out somewhere nice, then",
			"you might as well tell me so I don't waste",
			"my time."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.maddieTextBox.kill();
			content = ["Okay, okay. I will call you. Don't worry.",
			"Did you even come here to buy anything?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Are you dense?",
			"No, I didn't come in here to buy anything.",
			"I'll see you when we set up our date.",
			"That is, if you even make enough here",
			"to take me somewhere nice.",
			"Bye, Owen!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 19 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.maddieTextBox.kill();
			content = ["B-bye, Maddie..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 20 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			content = ["Jeez, she's kind of rude.",
			"Why do I kind of like it? Am I really",
			"going to call her?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 21 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.textBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 22 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			this.textBox.kill();
			content = ["Alright, it's time to go home.",
			"I'll leave Anna alone."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}




		//GOT MADDIE'S NUMBER & DIDNT GO TO DINER





		if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 2
		&& this.roomBackground.alpha == 0 && goToDiner == false && maddieNumber == true){
			this.storeBackground.revive();
			this.roomBackground.kill();
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey, Anna!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.kill();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 2
		&& goToDiner == false && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Hi, Owen."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 2
		&& goToDiner == false && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Hey, things were weird yesterday.",
			"Are you okay?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 2
		&& goToDiner == false && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Yeah, I'm okay now. I just wanted",
			"to be alone is all."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 2
		&& goToDiner == false && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Was it because of Maddie?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 2
		&& goToDiner == false && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Owen... please."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 2
		&& goToDiner == false && maddieNumber == true){
			this.annaTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["You shouldn't be so jealous.",
			"",
			"",
			"Just because I wanted to stay friends with",
			"someone from my highschool doesn't mean",
			"I like you any less, Anna."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}



		//CHOICE SPLIT




						if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.owenTextBox.kill();
							annaApp = annaApp - 1;
							annaMad = true;
							choice = 0;
							wordDelay = 40;
							content = ["Stop it, Owen! Just leave me alone, okay?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.annaTextBox.kill();
							content = ["Anna, wait."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["No. Go back to work.",
							"I don't want to see you right now."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.annaTextBox.kill();
							content = ["Wow, she's really upset.",
							"I messed up.",
							"",
							"Oh, speak of the devil. Maddie is here."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh, Owen! I thought you worked here.",
							"Why are you working retail still?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["Er, I don't know.",
							"I mean, I make enough money here."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Well, suit youself!",
							"Are you still going to call me or what?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 16 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["I planned on it, yeah.",
							"I thought it was weird to call the day of."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Not to me. Being forward is attractive."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 18 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["I guess that explains why you're so forward",
							"with me."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 19 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["I think you're cute, Owen.",
							"but if you aren't going to call me to set",
							"a date to take me out somewhere nice, then",
							"you might as well tell me so I don't waste",
							"my time."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 20 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["Okay, okay. I did plan on it.",
							"Did you even come here to buy anything?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 21 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Are you dense?",
							"No, I didn't come in here to buy anything.",
							"I'll see you when we set up our date.",
							"That is, if you even make enough here",
							"to take me somewhere nice.",
							"Bye, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 22 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["B-bye, Maddie."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 23 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							content = ["Jeez, she's kind of rude.",
							"Why do I kind of like it? Am I really",
							"going to call her?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							change = false;
						}

						if(change == true && storyTracker == 24 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.textBox.revive();
							change = false;
						}


						if(change == true && storyTracker == 25 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.textBox.kill();
							content = ["Time to leave. I'll just clock out.",
							"I dont think Anna wants to talk."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}


		

		//CHOICE SPLIT



						if(change == true && storyTracker == 28 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.owenTextBox.kill();
							annaApp = annaApp + 1;
							choice = 0;
							wordDelay = 40;
							annaMad = false;
							content = ["You want to be her friend?",
							"That's it? Didn't she seem a little stuck up?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 29 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.annaTextBox.kill();
							content = ["Well, I mean, yeah. She did.",
							"But yes, just friends."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 30 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Owen, she called you cute.",
							"You know what that means."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 31 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.annaTextBox.kill();
							content = ["Yeah, I guess she did, huh?",
							"But my point from before still stands.",
							"I didn't mean to hurt your feelings."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 32 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["It's okay. Don't worry about it anymore.",
							"I feel better now. You're really sweet, Owen."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.annaTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 33 && storyScene == 3 && storyDay == 2
						&& goToDiner == false && maddieNumber == true){
							this.annaTextBox.kill();
							content = ["Don't make me blush!",
							"Oh, speak of the devil. Here's Maddie."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}


						if(change == true && storyTracker == 34 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh, Owen! I thought you worked here.",
							"Why are you working retail still?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 35 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["Er, I don't know.",
							"I mean, I make enough money here."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 36 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Well, suit youself!",
							"Are you still going to call me or what?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 37 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["I don't know. We'll have to see.",
							"I thought it was weird to call the",
							"day of anyway."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 38 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Not to me. Being forward is attractive."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 39 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["I guess that explains why you're so forward",
							"with me."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 40 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["I think you're cute, Owen.",
							"but if you aren't going to call me to set",
							"a date to take me out somewhere nice, then",
							"you might as well tell me so I don't waste",
							"my time."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 41 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["Okay, okay. Like I said, we'll see.",
							"Did you even come here to buy anything?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 42 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Are you dense?",
							"No, I didn't come in here to buy anything.",
							"I'll see you when we set up our date.",
							"That is, if you even make enough here",
							"to take me somewhere nice.",
							"Bye, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 43 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.maddieTextBox.kill();
							content = ["Like I said, I don't kn-",
							"",
							"She's gone..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 44 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							content = ["Jeez, she's kind of rude.",
							"Oh well."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							change = false;
						}

						if(change == true && storyTracker == 45 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.owenTextBox.kill()
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.textBox.revive();
							change = false;
						}


						if(change == true && storyTracker == 46 && storyScene == 3 && storyDay == 2 && goToDiner == false 
						&& maddieNumber == true){
							this.textBox.kill();
							content = ["Time to leave. Bye, Anna!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}



		if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == false){
			storyScene = 4;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 2 && goToDiner == false && maddieNumber == false){
			storyScene = 4;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 23 && storyScene == 3 && storyDay == 2 && goToDiner == true && maddieNumber == true){
			storyScene = 4;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 26 && storyScene == 3 && storyDay == 2 && goToDiner == false && maddieNumber == true){
			storyScene = 4;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 47 && storyScene == 3 && storyDay == 2 && goToDiner == false && maddieNumber == true){
			storyScene = 4;
			storyTracker = 1;
		}





		
































		//DAY 2 SCENE 4



		//IF ANNA IS NOT MAD


		if(change == true && storyTracker == 1 && storyScene == 4 && storyDay == 2){
			game.add.tween(this.storeBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 4 && storyTracker == 1 && this.storeBackground.alpha == 0 && storyDay == 2){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 4 && storyDay == 2 && this.storeBackground.alpha == 0
		&& annaMad == false){
			this.streetBackground.revive();
			this.storeBackground.kill();
			game.add.tween(this.streetBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Owen! How was work?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && storyDay == 2 && annaMad == false){
			this.sarahTextBox.kill();
			content = ["It was really nice!",
			"Anna helps things go by a little faster."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 4 && storyDay == 2 && annaMad == false){
			this.owenTextBox.kill();
			content = ["Yeah, it's always nice to have friends",
			"where you work. I've made some friends",
			"with my coworkers, too."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 4 && storyDay == 2 && annaMad == false){
			this.sarahTextBox.kill();
			content = ["It helps you not dislike getting out",
			"of bed so much, for sure."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 4 && storyDay == 2 && annaMad == false){
			this.owenTextBox.kill();
			content = ["Forget friends, Owen!",
			"Is there anyone you like as moooore",
			"than a friend, hehe?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 4 && storyDay == 2 && annaMad == false){
			this.sarahTextBox.kill();
			content = ["Oh, man. That's so sudden...",
			"Let's see..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 4 && storyDay == 2 && annaMad == false){
			this.owenTextBox.kill();
			content = ["There has to be someone!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 4 && storyDay == 2 && annaMad == false
		&& maddieNumber == true){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Well, there is someone!",
			"She's right here!",
			"",
			"Well, there is Anna from work.",
			"There's also this girl named Maddie."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}




		//CHOICE SPLIT


						//SARAH APPRECIATION GREATER THAN 3



						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp > 3
						&& annaMad == false && maddieNumber == true){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp + 1;
							sarahInterest = true;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Hehe.",
							"We'll just have to see where it goes!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["I guess so!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Wow, we're already back to your place.",
							"That walk went by a lot faster than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. have a",
							"good night."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}




						//SARAH APPRECIATION LESS THAN OR EQUAL TO 3




						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp <= 3
						&& annaMad == false && maddieNumber == true){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Heh.",
							"That's a funny joke."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Ouch!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["What? You expected that to go well, hehe?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["I'm just joking around."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 16 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Mhmm, suuuure.",
							"Wow, we're already back at your place.",
							"That walk went quicker than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. Goodnight!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}





						//CHOICE SPLIT





						if(change == true && storyTracker == 29 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp - 1;
							content = ["What?! You like Anna?",
							"And who is Maddie?!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 30 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["I mean, yeah, Anna is awesome.",
							"And Maddie is a girl I met yesterday.",
							"No big deal."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 31 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["I had no idea you liked Anna.",
							"And there's another girl! Owen, you dog!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 32 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Oh, it's nothing like that.",
							"I'm just seeing where things go."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 33 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Jeez. Well, good luck with all that."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 34 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Heh, thanks. I'll need it.",
							"I'm not the best with girls it seems."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 35 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh, I'm sure you're fine.",
							"Anyway, we're here. I'll see you tomorrow."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 36 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Okay. Goodnight, Sarah.",
							"See you tomorrow."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}




		if(change == true && storyTracker == 9 && storyScene == 4 && storyDay == 2 && annaMad == false
		&& maddieNumber == false){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Well, there is someone!",
			"She's right here!",
			"",
			"Well, there is Anna from work."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}



		//CHOICE SPLIT


						//SARAH APPRECIATION GREATER THAN 3



						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp > 3
						&& annaMad == false && maddieNumber == false){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp + 1;
							sarahInterest = true;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Hehe.",
							"We'll just have to see where it goes!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["I guess so!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Wow, we're already back to your place.",
							"That walk went by a lot faster than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp > 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. have a",
							"good night."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}




						//SARAH APPRECIATION LESS THAN OR EQUAL TO 3




						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp <= 3
						&& annaMad == false && maddieNumber == false){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Heh.",
							"That's a funny joke."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Ouch!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["What? You expected that to go well, hehe?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["I'm just joking around."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 16 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Mhmm, suuuure.",
							"Wow, we're already back at your place.",
							"That walk went quicker than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 4 && storyDay == 2
						&& annaMad == false && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. Goodnight!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}





						//CHOICE SPLIT





						if(change == true && storyTracker == 29 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp - 1;
							content = ["What?! You like Anna?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 30 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["I mean, yeah, Anna is awesome.",
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 31 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["I had no idea you liked Anna."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 32 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["I'm just seeing where things go."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 33 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Well, good luck, Owen!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 34 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Heh, thanks. I'll need it.",
							"I'm not the best with girls it seems."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 35 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Oh, I'm sure you're fine.",
							"Anyway, we're here. I'll see you tomorrow."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 36 && storyScene == 4 && storyDay == 2 && annaMad == false
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Okay. Goodnight, Sarah.",
							"See you tomorrow."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}



		//IF ANNA IS MAD



		if(change == true && storyTracker == 2 && storyScene == 4 && storyDay == 2 && this.storeBackground.alpha == 0
		&& annaMad == true && maddieNumber == true){
			this.streetBackground.revive();
			this.storeBackground.kill();
			game.add.tween(this.streetBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Owen! How was work?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.sarahTextBox.kill();
			content = ["Eh, I don't know.",
			"I upset Anna. I feel bad."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Well, what did you do?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.sarahTextBox.kill();
			content = ["Nothing out of the ordinary.",
			"I think she is just jealous of me hanging",
			"out with other girls besides her."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["Oh, so she liiiikes you, hehe."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.sarahTextBox.kill();
			content = ["It seems so!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.owenTextBox.kill();
			content = ["So Anna likes you... Is there",
			"anyone you like, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == true){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Well, there is someone!",
			"She's right here!",
			"",
			"Well, Anna is mad at me...",
			"There is this girl named Maddie."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}




		//CHOICE SPLIT




						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp > 3
						&& annaMad == true && maddieNumber == true){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp + 1;
							sarahInterest = true;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Hehe.",
							"We'll just have to see where it goes!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["I guess so!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Wow, we're already back to your place.",
							"That walk went by a lot faster than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. have a",
							"good night."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}






						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp <= 3
						&& annaMad == true && maddieNumber == true){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Heh.",
							"That's a funny joke."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Ouch!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["What? You expected that to go well, hehe?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["I'm just joking around."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 16 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Mhmm, suuuure.",
							"Wow, we're already back at your place.",
							"That walk went quicker than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. Goodnight!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}




		//IF YOU TELL HER YOU LIKE MADDIE/ANNA



						if(change == true && storyTracker == 29 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp - 1;
							content = ["So you like Anna then?",
							"And Maddie? Who is Maddie?!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 30 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Yeah, Anna and I usually get on",
							"pretty well. I messed it up. Maddie is",
							"a girl who I knew from high school who",
							"I ran into and decided to keep in touch",
							"with."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 31 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh, well that's great, Owen.",
							"I'm happy for you."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 32 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Thank you! She's a little different",
							"than what I am used to, but it could be",
							"fun to hang out with her."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 33 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Yeah..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 34 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Oh, don't tell me I upset",
							"you too, now. What's wrong?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 35 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Oh, it's silly...",
							"I just don't want to see you less."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 36 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["That is silly!",
							"I'm not going to see you any less.",
							"I love hanging out with you, too."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 37 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["You promise?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 38 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Of course, Sarah!",
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 39 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.owenTextBox.kill();
							content = ["Okay, if you say so!",
							"Oh, hey! We're at your place.",
							"Bye, Owen! I'll see you tomorrow!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 40 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == true){
							this.sarahTextBox.kill();
							content = ["Wow, that was quick.",
							"Yeah, I'll see you tomorrow!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}


			if(change == true && storyTracker == 9 && storyScene == 4 && storyDay == 2 && annaMad == true
			&& maddieNumber == false){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Well, there is someone!",
			"She's right here!",
			"",
			"Well, Anna is mad at me..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}

						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp > 3
						&& annaMad == true && maddieNumber == false){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp + 1;
							sarahInterest = true;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Hehe.",
							"We'll just have to see where it goes!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["I guess so!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Wow, we're already back to your place.",
							"That walk went by a lot faster than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp > 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. have a",
							"good night."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}






						if(change == true && storyTracker == 10 && storyScene == 4 && storyDay == 2 && sarahApp <= 3
						&& annaMad == true && maddieNumber == false){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							content = ["What? Who? Where?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Oh! Me?! Heh.",
							"That's a funny joke."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Ouch!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["What? You expected that to go well, hehe?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["I'm just joking around."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 16 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Mhmm, suuuure.",
							"Wow, we're already back at your place.",
							"That walk went quicker than usual."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 4 && storyDay == 2
						&& annaMad == true && sarahApp <= 3 && maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Yeah, it was quick.",
							"I'll see you tomorrow, Sarah. Goodnight!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}




		//IF YOU TELL HER YOU LIKE MADDIE/ANNA



						if(change == true && storyTracker == 29 && storyScene == 4 && storyDay == 2 && annaMad == true 
						&& maddieNumber == false){
							this.owenTextBox.kill();
							wordDelay = 40;
							choice = 0;
							sarahApp = sarahApp - 1;
							content = ["So you like Anna then?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 30 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Yeah, Anna and I usually get on",
							"pretty well. I messed it up."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 31 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Well, you better try to patch",
							"things up with her."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 32 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Yeah, I know. I'm going to try."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 33 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Good..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 34 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Oh, don't tell me I upset",
							"you too, now. What's wrong?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 35 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Oh, it's silly...",
							"I just don't want to see you less."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 36 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["That is silly!",
							"I'm not going to see you any less.",
							"I love hanging out with you, too."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 37 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["You promise?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 38 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Of course, Sarah!",
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 39 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.owenTextBox.kill();
							content = ["Okay, if you say so!",
							"Oh, hey! We're at your place.",
							"Bye, Owen! I'll see you tomorrow!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.sarahTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 40 && storyScene == 4 && storyDay == 2 && annaMad == true
						&& maddieNumber == false){
							this.sarahTextBox.kill();
							content = ["Wow, that was quick.",
							"Yeah, I'll see you tomorrow!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}





		if(change == true && storyTracker == 2 && storyScene == 4 && storyDay == 2 && this.storeBackground.alpha == 0
		&& annaMad == true && maddieNumber == false){
			this.streetBackground.revive();
			this.storeBackground.kill();
			game.add.tween(this.streetBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Owen! How was work?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == false){
			this.sarahTextBox.kill();
			content = ["Eh, I don't know.",
			"I upset Anna. I feel bad."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Well, what did you do?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == false){
			this.sarahTextBox.kill();
			content = ["Nothing out of the ordinary.",
			"I think she is just jealous of me hanging",
			"out with other girls besides her."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Oh, so she liiiikes you, hehe."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == false){
			this.sarahTextBox.kill();
			content = ["It seems so!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 4 && storyDay == 2 && annaMad == true && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["So Anna likes you... Is there",
			"anyone you like, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}







		

















		if(change == true && storyTracker == 16 && storyScene == 4 && storyDay == 2 && annaMad == false){
			storyScene = 5;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 18 && storyScene == 4 && storyDay == 2 && annaMad == false){
			storyScene = 5;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 37 && storyScene == 4 && storyDay == 2 && annaMad == false){
			storyScene = 5;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 16 && storyScene == 4 && storyDay == 2 && annaMad == true){
			storyScene = 5;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 18 && storyScene == 4 && storyDay == 2 && annaMad == true){
			storyScene = 5;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 41 && storyScene == 4 && storyDay == 2 && annaMad == true){
			storyScene = 5;
			storyTracker = 1;
		}



		




















		//DAY 2 SCENE 5



		if(change == true && storyTracker == 1 && storyScene == 5 && storyDay == 2){
			game.add.tween(this.streetBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 5 && storyTracker == 1 && this.streetBackground.alpha == 0 && storyDay == 2){
			storyTracker = storyTracker + 1;
			change = true;
		}



		if(change == true && storyTracker == 2 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == false){
			this.roomBackground.revive();
			this.streetBackground.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Today was really great!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == false){
			content = ["I had a nice conversation with Anna."
			
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == false){
			content = ["I am so tired, though.",
			"Bed time for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}




		//IF ANNA IS MAD




		if(change == true && storyTracker == 2 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == true){
			this.roomBackground.revive();
			this.streetBackground.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Well, today sucked."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == true){
			content = ["Anna is mad at me.",
			"Maybe I'll call Maddie tomorrow, though.",
			"She wants me to."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == true){
			content = ["I am so tired, though.",
			"Bed time for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}






		if(change == true && storyTracker == 2 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == false && sarahInterest == true){
			this.roomBackground.revive();
			this.streetBackground.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Today was really great!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == false && sarahInterest == true){
			content = ["I had a nice conversation with Anna.",
			"Something seems to be brewing with Sarah",
			"as well."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == false && sarahInterest == true){
			content = ["I am so tired, though.",
			"Bed time for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}





		if(change == true && storyTracker == 2 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && sarahInterest == true && maddieNumber == true){
			this.roomBackground.revive();
			this.streetBackground.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Well, today sucked."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && sarahInterest == true && maddieNumber == true){
			content = ["Anna is mad at me.",
			"Maybe I'll call Maddie tomorrow, though.",
			"She wants me to. Also, something is",
			"happening with Sarah."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && sarahInterest == true && maddieNumber == true){
			content = ["I am so tired, though.",
			"Bed time for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}





		if(change == true && storyTracker == 2 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == false && sarahInterest == false){
			this.roomBackground.revive();
			this.streetBackground.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Well, today sucked."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == false && sarahInterest == false){
			content = ["Anna seems pretty upset.",
			"I'll see if I can patch things up."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == false && sarahInterest == false){
			content = ["I am so tired, though.",
			"Bed time for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}





		if(change == true && storyTracker == 2 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == false && sarahInterest == true){
			this.roomBackground.revive();
			this.streetBackground.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Well, today sucked."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == false && sarahInterest == true){
			content = ["Anna seems pretty upset.",
			"I'll see if I can patch things up.",
			"Something seems to be happening with",
			"Sarah, however."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 5 && storyDay == 2 && this.streetBackground.alpha == 0
		&& annaMad == true && maddieNumber == false && sarahInterest == true){
			content = ["I am so tired, though.",
			"Bed time for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}




		if(change == true && storyTracker == 5 && storyScene == 5 && storyDay == 2){
			storyScene = 6;
			storyTracker = 1;
			pressZ = false;
		}



		












		//DAY TRANSITION 2



		if(change == true && storyTracker == 1 && storyScene == 6 && storyDay == 2){
			this.roomBackground.alpha = 1;
			game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 6 && this.roomBackground.alpha == 0 && storyDay == 2 && storyTracker == 1){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyScene == 6 && this.roomBackground.alpha == 0 && storyDay == 2 && storyTracker == 2){
			this.roomBackground.kill();
			game.add.tween(this.owenTextBox).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 6 && this.owenTextBox.alpha == 0 && storyDay == 2 && storyTracker == 2){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyScene == 6 && this.owenTextBox.alpha == 0 && storyDay == 2 && storyTracker == 3){
			this.owenTextBox.kill();
			this.day3.revive();
			game.add.tween(this.day3).to( { alpha: 1}, 500, "Linear", true);
			change = true;
		}

		if(change == true && storyScene == 6 && storyDay == 2 && storyTracker == 3 && this.day3.alpha >= .85){
			storyScene = 1;
			storyDay = 3;
			storyTracker = 1;
			pressZ = true;
			change = false;
		}




		if(storyScene == 1 && storyTracker == 2 && storyDay == 3){

			game.add.tween(this.day3).to( { alpha: 0}, 250, "Linear", true);
			change = false;	
			pressZ = false;
		}

		if(storyScene == 1 && this.day3.alpha <=.02 && storyDay == 3 && storyTracker == 2){
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyScene == 1 && storyTracker == 3 && storyDay == 3 && this.day3.alpha <= .02){
			this.day3.kill();
			this.owenTextBox.revive();
			game.add.tween(this.owenTextBox).to( { alpha: 1}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 1 && storyTracker == 3 && storyDay == 3 && this.owenTextBox.alpha == 1){
			storyTracker = storyTracker + 1;
			content = ["Ahh, what a good night's rest."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = true;
		}

		if(change == true && storyScene == 1 && storyTracker == 4 && storyDay == 3 && this.owenTextBox.alpha == 1){
			this.roomBackground.revive();
			game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
			change = false;
			pressZ = true;
		}



		//IF YOU DIDNT GET MADDIES NUMBER





		if(change == true && storyTracker == 5 && storyScene == 1 && storyDay == 3 && maddieNumber == false){
			this.owenTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.textBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 1 && storyDay == 3 && maddieNumber == false){
			this.textBox.kill();
			content = ["Time to get ready for work."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}










		if(change == true && storyTracker == 5 && storyScene == 1 && storyDay == 3 && maddieNumber == true){
			content = ["Oh, right! Should I call Maddie?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 1 && storyDay == 3 && maddieNumber == true){
			choice = 1;
			wordDelay = 0;
			content = ["Call Maddie.",
			"",
			"",
			"Do not call Maddie."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			change = false;
		}			




		//CHOICE SPLIT





						//IF YOU CALLED MADDIE









						if(change == true && storyTracker == 7 && storyScene == 1 && storyDay == 3 && maddieNumber == true){
							wordDelay = 40;
							choice = 0;
							maddieApp = maddieApp + 1;
							maddieCall = true;
							content = ["Yeah, I think I will!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							change = false;
						}

						if(change == true && storyTracker == 8 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["-Ring- -Ring -Ring-"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.textBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 9 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.textBox.kill();
							content = ["Urrggh, whaaat? Who's thiiiis?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 10 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["Hey, Maddie. It's me, Owen!",
							"Are you alright?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 11 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["Oh, hi, Owen.",
							"Yeah, I'm fine - you just woke me up is all."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 12 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["Oh, I'm so sorry!",
							"Should I call back some other time?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 13 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["No, I guess it's fine.",
							"I assume you called to set up that date?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 14 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["Er, yeah... I did.",
							"I need to get used to how",
							"straight-to-the-point you are."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 15 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["I don't like nonsense.",
							"So what do you have planned, Owen?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 16 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["O-Oh..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 17 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["You didn't plan anything before",
							"calling me?"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 18 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["No, I figured we'd decide together."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 19 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["Come on, Owen. Get with it.",
							"We're going to The Royal Crown Bistro."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 20 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["That sounds... expens-"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 21 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["It sounds nice? It is!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 22 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["That's not what-"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 23 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.owenTextBox.kill();
							content = ["Pick me up at eight o'clock tonight.",
							"I'll text you my address. Bye!"
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.maddieTextBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 24 && storyScene == 1 && storyDay == 3 && maddieCall == true){
							this.maddieTextBox.kill();
							content = ["Bye, Ma-",
							"She's gone. She really doesn't waste",
							"time, does she? Anyway, time for work."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}










						//IF YOU DIDN'T CALL MADDIE










					


						if(change == true && storyTracker == 26 && storyScene == 1 && storyDay == 3 && maddieCall == false){
							wordDelay = 40;
							choice = 0;
							content = ["No, I don't think I want to",
							"on second thought. I have a feeling",
							"she isn't my type."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.highlight.kill();
							change = false;
						}

						if(change == true && storyTracker == 27 && storyScene == 1 && storyDay == 3 && maddieCall == false){
							content = ["I hope I don't upset her though.",
							"I don't want to hurt her feelings."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							change = false;
						}

						if(change == true && storyTracker == 28 && storyScene == 1 && storyDay == 3 && maddieCall == false){
							this.owenTextBox.kill();
							content = ["..."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.textBox.revive();
							change = false;
						}

						if(change == true && storyTracker == 29 && storyScene == 1 && storyDay == 3 && maddieCall == false){
							this.textBox.kill();
							content = ["Oh well. I guess I might as well",
							"get ready to go to work."
							];
							text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
							nextLine();
							this.owenTextBox.revive();
							change = false;
						}






		if(change == true && storyTracker == 25 && storyScene == 1 && storyDay == 3){
			storyScene = 2;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 30 && storyScene == 1 && storyDay == 3){
			storyScene = 2;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 7 && storyScene == 1 && storyDay == 3 && maddieNumber == false){
			storyScene = 2;
			storyTracker = 1;
		}



		//DAY 3 SCENE 2



		//IF GOING ON DATE AND ANNA IS MAD



		if(change == true && storyTracker == 1 && storyScene == 2 && storyDay == 3){
			game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, "Linear", true);
			change = false;
		}

		if(storyScene == 2 && storyTracker == 1 && this.roomBackground.alpha == 0 && storyDay == 3){
			storyTracker = storyTracker + 1;
			change = true;
		}





		if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
		&& maddieCall == true && annaMad == true){
			this.storeBackground.revive();
			this.roomBackground.kill();
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey, Anna."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
		&& maddieCall == true && annaMad == true){
			this.owenTextBox.kill();
			content = ["Hi, Owen. Good to see you're",
			"on time."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["Listen, I'm sorry about yesterday.",
			"I feel terrible about everything."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["Ehh, it's fine I guess.",
			"I'm over it."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["Are you sure? I didn't want",
			"to mess things up."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["I said it's fine, Owen.",
			"We can drop it."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["Okay, sure."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["Did you have a good night last night?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["No, not really!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["Sorry to hear that. Do you have",
			"anything planned for today?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["Uhh, yeah... I do.",
			"I have a date with Maddie."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["Well... I can't say I'm surprised."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["I'm not sure how it's going to go.",
			"She's different than most people."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["Well, try to have fun."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.annaTextBox.kill();
			content = ["Uh, yeah. I'll try."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.owenTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.textBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 3 && maddieCall == true
		&& annaMad == true){
			this.textBox.kill();
			content = ["Sigh... Awkward.",
			"I guess I'll just get to work and leave."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}





		//IF GOING ON DATE AND ANNA IS NOT MAD




		if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
		&& maddieCall == true && annaMad == false){
			this.storeBackground.revive();
			this.roomBackground.kill();
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey there, Anna!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Hey, Owen! How are you doing?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["I'm really good actually!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Oh, yeah? Any specific reason for that?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["Oh! Uhmmm... no not really."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Well, I guess you're just having a",
			"good day then, hehe!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["Yeah..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Hey, Owen... are you doing",
			"anything tonight?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["Er, actually... yeah."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Oh, no big deal! What do you",
			"have planned?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["I... actually have a date tonight..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Oh."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["Yeah..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["With Sarah or Maddie?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["With Maddie..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["Owen, you told me you were just",
			"friends. Why would you tell me that,",
			"and then end up going on a date?",
			"with her?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["I... don't know, Anna.",
			"I didn't know it would end up this way.",
			"I didn't plan on setting up a date.",
			"She kind of forced it on me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["No one can force you into a date.",
			"Whatever, Owen. I see how you really are."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 20 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["Anna, please..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 21 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["No, Owen. You lied to me.",
			"Just finish your shift and let's",
			"not talk."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 22 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.annaTextBox.kill();
			content = ["Ugh, okay..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 23 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.owenTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.textBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 24 && storyScene == 2 && storyDay == 3 && maddieCall == true && annaMad == false){
			this.textBox.kill();
			content = ["She's really mad at me.",
			"I guess I'll just finish, go home,",
			"and then get ready for tonight."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.textBox.revive();
			change = false;
		}




		//IF NOT GOING ON DATE, DIDNT GET MADDIE'S NUMBER, AND ANNA IS MAD




		if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
		&& maddieNumber == false && maddieCall == false && annaMad == true){
			this.storeBackground.revive();
			this.roomBackground.kill();
			game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
			content = ["Hey, Anna."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Oh look! You made it on time today."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Heh, I guess I deserved that."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.owenTextBox.kill();
			content = ["Yeah, you do."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.annaTextBox.kill();
			content = ["I won't be late ever again.",
			"I promise."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.owenTextBox.kill();
			content = ["It's not about that, Owen!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Then what's it about, Anna?!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.owenTextBox.kill();
			content = ["It's about- err, nothing..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Tell me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.owenTextBox.kill();
			content = ["I just... want to be someone",
			"who gets to spend time with you",
			"as well."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Anna... what about the time we",
			"spend together here?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.owenTextBox.kill();
			content = ["That's not the same! We have to",
			"be here. I want more time together like",
			"when we walked home. I had a really",
			"good time that day."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true
		&& maddieNumber == false){
			this.annaTextBox.kill();
			content = ["Oh, I see... That makes sense.",
			"I had fun that day, too."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true 
		&& maddieNumber == false){
			choice = 1;
			wordDelay = 0;
			content = ["But Anna, you're being really",
			"jealous lately. I don't like it.",
			"",
			"We can definitely do something together",
			"outside of work sometime, Anna."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			change = false;
		}	




			//CHOICE SPLIT




							if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp - 1;
								content = ["O-Owen... I know that.",
								"I just liked you, that's all.",
								"I'll just leave you alone."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["No, Anna. I don't want you to",
								"do that! I just want to be able to",
								"not have to walk on eggshells around",
								"you. I think you're really awesome."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["No, I think it's best for me, too.",
								"Let's finish work and be done."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Sigh... Okay."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 20 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								content = ["I didn't mean to be so blunt.",
								"I think this might be it for my",
								"friendship with Anna."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								change = false;
							}

							if(change == true && storyTracker == 21 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 22 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.textBox.kill();
								content = ["Let's just finish work and be done."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}




			//CHOICE SPLIT




							if(change == true && storyTracker == 35 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp + 1;
								content = ["Really? I would really like that."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 36 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Of course! I was actually thinking",
								"about asking you to do something sometime",
								"as well. I like hanging out with you."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 37 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["That makes me so happy!",
								"I enjoy my time with you, too."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 38 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["I'm glad, Anna.",
								"Let's go see a movie and get dinner",
								"sometime this weekend."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 39 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["Sounds great, Owen!",
								"There are some good movies",
								"out right now!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 40 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Okay! Give me your number,",
								"and we'll iron out the details."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 41 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["Okay! Give me your phone."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 42 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 43 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.textBox.kill();
								content = ["There you go, hehe!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 44 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Alright, I'll text you later, Anna!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 45 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								content = ["I look forward to it!",
								"Now get back to work!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								change = false;
							}

							if(change == true && storyTracker == 46 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Sure thing!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 47 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == false){
								content = ["Things turned out alright. I'm glad.",
								"Let's get to work and get home."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								change = false;
							}






			//IF NOT GOING ON DATE, DID GET MADDIE'S NUMBER, AND ANNA IS MAD




			if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
			&& maddieCall == false && annaMad == true && maddieNumber == true){
				this.storeBackground.revive();
				this.roomBackground.kill();
				game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Hey, Anna."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["Hi."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["I've been messing up a lot.",
				"I don't want to ruin our friendship."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["I don't know, Owen.",
				"I just feel like you don't think",
				"about my feelings."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["You're right. I've been selfish."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["I'm surprised you don't have",
				"a date with Maddie yet, anyway."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["Well, actually... I decided",
				"not to call her. I don't think she is",
				"my type at all."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["O-oh... I'm surprised to hear that.",
				"What makes you say that?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["She's just really forward,",
				"and it makes me feel uncomfortable."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["That's fair. So you enjoy",
				"the chase?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["I don't know if I'd say it",
				"like that, but sort of."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == true && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["I get what you mean."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == true 
			&& maddieNumber == true){
				choice = 1;
				wordDelay = 0;
				content = ["Yeah. I was just starting to enjoy",
				"getting to know you until I messed up.",
				"",
				"You're pretty forward, too, in your",
				"own way."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.kill();
				this.owenTextBox.revive();
				this.highlight.reset(0, 152);
				change = false;
			}	




			//CHOICE SPLIT




							if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp + 1;
								content = ["You were?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Well, yeah. I was talking to Sarah",
								"about how I upset you and all that.",
								"I had to get it off my chest."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["Oh, I didn't know you cared",
								"enough to do that. Don't worry, Owen.",
								"I forgive you, okay?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Really? That makes me so happy.",
								"You have no idea. I wasn't trying to",
								"mess anything up."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["I know. We can go back to the",
								"way we were before!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 20 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Sounds perfect!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 21 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["Now we don't have to worry about",
								"an awkward work situation, haha!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 22 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Yeah, no doubt. I was afraid",
								"of that happening."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 23 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["Anyway, let's get to working.",
								"I'm glad we talked everything out."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 24 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Me too!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 25 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								content = ["Phew, I'm glad things are normal",
								"again. I was so worried I'd have to",
								"find a new job and lose a friend."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								change = false;
							}

							if(change == true && storyTracker == 26 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 27 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.textBox.kill();
								content = ["Okay, let's work and get home."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}




							//CHOICE SPLIT





							if(change == true && storyTracker == 34 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp - 1;
								content = ["What do you mean?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 35 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Like, I definitely knew you were",
								"in to me. You try to be discreet,",
								"but you make it pretty obvious."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 36 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["That's so embarrassing..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 37 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["It's okay, Anna.",
								"You should definitely try to come",
								"across as less jealous, though."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 38 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["I-I know... I'm so embarrassed."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 39 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["No, don't be."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 40 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["Uhhh, let's just get back to work!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 41 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Okay..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 42 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 43 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == true && maddieNumber == true){
								this.textBox.kill();
								content = ["Something's off. Oh well.",
								"Let's get to work and get home."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}




			//IF NOT GOING ON DATE AND ANNA IS NOT MAD




			if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
			&& maddieCall == false && annaMad == false && maddieNumber == false){
				this.storeBackground.revive();
				this.roomBackground.kill();
				game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Hey there, Anna!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["Howdy, Owen!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["How are things here?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["Things are swell. It's a pretty",
				"slow day today, which is always nice."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["You can say that again.",
				"Do you like working here?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["As far as jobs go, it's alright.",
				"I want more for myself though. Going",
				"to work at a job that does nothing for",
				"you except pay the bills is saddening."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["Huh, I never thought of it that way.",
				"I just thought a job was something we",
				"all just did."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["Well, it kind of is. Everyone has",
				"to make money somehow, but not everyone",
				"has to have a job that they don't get",
				"anything more from."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["That's true I guess. You're saying",
				"that there's more out there to pursue."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["Exactly! Have you ever heard of",
				"the pyramid of needs?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["It sounds familiar. What is it?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["Abraham Maslow came up with a theory",
				"about the needs of a person and the",
				"importance of those needs."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["For instance, at the bottom lies basic",
				"basic needs, such a food, water, and air."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["The next layer up is safety.",
				"This includes things like your health",
				"and financial stability."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["Above that is social belonging,",
				"love, and intimacy."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["Once someone feels as though they",
				"belong, they usually start to focus",
				"on esteem, and how respected they are",
				"by themselves and to the public."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["And all the way at the top is",
				"self-actualization. This is the stage",
				"where you feel you have value and can",
				"bring something to the table."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["It's where you are happiest and feel",
				"that you have found your calling - your",
				"passion!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 20 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				content = ["Maslow also added in a final stage",
				"later oncalled self-transcendence,", 
				"but we'll save that for another day."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 21 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["Oh, that makes a lot of sense.",
				"So it's kind of a way to judge how",
				"successful you are in life."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 22 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["That's one way to look at it, yeah!",
				"The higher up you are, the happier",
				"usually. Happiness is a great measurment",
				"of success."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 23 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["So to bring things full circle,",
				"you're saying to seek a job that makes",
				"you actually feel fulfilled and does",
				"more than keep you at the 'safety'",
				"stage."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 24 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["You got it! I'd say that currently",
				"I am dipping between the levels of",
				"esteem and feeling a sense of belonging."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 25 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["So what is it that you really",
				"want to do?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 26 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["I really enjoy script writing, actually.",
				"I spend a lot of my free time doing that",
				"I'm hoping that one day I get to do it",
				"professionally."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 27 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.annaTextBox.kill();
				content = ["That's awesome, Anna!",
				"I think you'll have that someday.",
				"Probably even soon."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 28 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == false){
				this.owenTextBox.kill();
				content = ["I sure hope so. Thank you.",
				"What about you, Owen? What do you",
				"want to do?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 29 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == false 
			&& maddieNumber == false){
				choice = 1;
				wordDelay = 0;
				content = ["Uhhh... I don't think I know yet.",
				"",
				"",
				"I'd love to pursue computer science."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.highlight.reset(0, 152);
				change = false;
			}	



			//CHOICE SPLIT



							if(change == true && storyTracker == 30 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp - 1;
								content = ["Well, you still have time.",
								"I would seriously start thinking about",
								"it though."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 31 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Yeah, I just don't really know what",
								"I like to do."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 32 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["You don't have any hobbies? Nothing?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 33 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Uhhhh, I kind of just work a lot."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 34 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["There is so much more to life, Owen.",
								"I would seriously start looking for",
								"something you like. I'm not trying to",
								"judge, but I don't think that's normal."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 35 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["I think you're right.",
								"I'm sure I'll figure stuff out."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 36 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["I sure hope so.",
								"Anyway, I'm going to go back to work."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 37 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Alright, sounds good."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 38 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 39 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.textBox.kill();
								content = ["I'm feeling a little worried",
								"about my life now. And why do I feel so",
								"judged all of a sudden?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}



							//CHOICE SPLIT


							
							if(change == true && storyTracker == 49 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp + 1;
								content = ["Oh, computer science?",
								"What aspect particularly?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 50 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Well, I've been practicing programming",
								"some games in my free time, and I feel",
								"like I am getting pretty good."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 51 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								content = ["I also am signing up for university",
								"this year to get a degree in computer",
								"science so I can get a good job doing",
								"some general programming."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								change = false;
							}

							if(change == true && storyTracker == 52 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["That sounds so awesome, Owen!",
								"I'm excited for you. It sounds like you",
								"have things more figured out than I do!",
								"And if you need help writing in your games",
								"I'd love to help."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 53 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Thank you, Anna. I'm glad I have",
								"things figured out, too. If you want",
								"to write a game for me, I'd love to work",
								"with you on something."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 54 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["Really?! I'll work on it right away!",
								"After work that is... How exciting!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 55 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["I'm glad you're enthusiastic about it.",
								"I love how enthusiastic you are about",
								"things. Your eyes light up in the best",
								"way."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 56 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["Th-thank you, Owen. Th-that's sweet.",
								"I'm glad you think that."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 57 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["Of course I do.",
								"I look forward to what you come up with."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 58 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["I'll show you tomorrow!",
								"Meanwhile, we should do our jobs."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 59 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.annaTextBox.kill();
								content = ["You're right. Back to work!",
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 60 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.owenTextBox.kill();
								content = ["...",
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 61 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == false){
								this.textBox.kill();
								content = ["Wow! I'm excited!",
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}














			if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 3 && this.roomBackground.alpha == 0
			&& maddieCall == false && annaMad == false && maddieNumber == true){
				this.storeBackground.revive();
				this.roomBackground.kill();
				game.add.tween(this.storeBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Hey there, Anna!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["Howdy, Owen!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["How are things here?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["Things are swell. It's a pretty",
				"slow day today, which is always nice."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["You can say that again.",
				"Do you like working here?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["As far as jobs go, it's alright.",
				"I want more for myself though. Going",
				"to work at a job that does nothing for",
				"you except pay the bills is saddening."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["Huh, I never thought of it that way.",
				"I just thought a job was something we",
				"all just did."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["Well, it kind of is. Everyone has",
				"to make money somehow, but not everyone",
				"has to have a job that they don't get",
				"anything more from."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["That's true I guess. You're saying",
				"that there's more out there to pursue."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["Exactly! Have you ever heard of",
				"the pyramid of needs?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["It sounds familiar. What is it?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["Abraham Maslow came up with a theory",
				"about the needs of a person and the",
				"importance of those needs."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["For instance, at the bottom lies basic",
				"basic needs, such a food, water, and air."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["The next layer up is safety.",
				"This includes things like your health",
				"and financial stability."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["Above that is social belonging,",
				"love, and intimacy."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["Once someone feels as though they",
				"belong, they usually start to focus",
				"on esteem, and how respected they are",
				"by themselves and to the public."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["And all the way at the top is",
				"self-actualization. This is the stage",
				"where you feel you have value and can",
				"bring something to the table."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["It's where you are happiest and feel",
				"that you have found your calling - your",
				"passion!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 20 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				content = ["Maslow also added in a final stage",
				"later on called self-transcendence,", 
				"but we'll save that for another day."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 21 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["Oh, that makes a lot of sense.",
				"So it's kind of a way to judge how",
				"successful you are in life."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 22 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["That's one way to look at it, yeah!",
				"The higher up you are, the happier",
				"usually. Happiness is a great measurment",
				"of success."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 23 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["So to bring things full circle,",
				"you're saying to seek a job that makes",
				"you actually feel fulfilled and does",
				"more than keep you at the 'safety'",
				"stage."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 24 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["You got it! I'd say that currently",
				"I am dipping between the levels of",
				"esteem and feeling a sense of belonging."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 25 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["So what is it that you really",
				"want to do?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 26 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["I really enjoy script writing, actually.",
				"I spend a lot of my free time doing that.",
				"I'm hoping that one day I get to do it",
				"professionally."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 27 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.annaTextBox.kill();
				content = ["That's awesome, Anna!",
				"I think you'll have that someday.",
				"Probably even soon."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 28 && storyScene == 2 && storyDay == 3 && maddieCall == false 
			&& annaMad == false && maddieNumber == true){
				this.owenTextBox.kill();
				content = ["I sure hope so. Thank you.",
				"What about you, Owen? What do you",
				"want to do?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.annaTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 29 && storyScene == 2 && storyDay == 3 && maddieCall == false && annaMad == false 
			&& maddieNumber == true){
				choice = 1;
				wordDelay = 0;
				content = ["Uhhh... I don't think I know yet.",
				"",
				"",
				"I'd love to pursue computer science."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.highlight.reset(0, 152);
				change = false;
			}	



			//CHOICE SPLIT



							if(change == true && storyTracker == 30 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp - 1;
								content = ["Well, you still have time.",
								"I would seriously start thinking about",
								"it though."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 31 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Yeah, I just don't really know what",
								"I like to do."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 32 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["You don't have any hobbies? Nothing?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 33 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Uhhhh, I kind of just work a lot."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 34 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["There is so much more to life, Owen.",
								"I would seriously start looking for",
								"something you like. I'm not trying to",
								"judge, but I don't think that's normal."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 35 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["I think you're right.",
								"I'm sure I'll figure stuff out."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 36 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["I sure hope so.",
								"Anyway, I'm going to go back to work."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 37 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Alright, sounds good."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 38 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 39 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.textBox.kill();
								content = ["I'm feeling a little worried",
								"about my life now. And why do I feel so",
								"judged all of a sudden?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}



							//CHOICE SPLIT


							
							if(change == true && storyTracker == 49 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								annaApp = annaApp + 1;
								content = ["Oh, computer science?",
								"What aspect particularly?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 50 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Well, I've been practicing programming",
								"some games in my free time, and I feel",
								"like I am getting pretty good."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 51 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								content = ["I also am signing up for university",
								"this year to get a degree in computer",
								"science so I can get a good job doing",
								"some general programming."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								change = false;
							}

							if(change == true && storyTracker == 52 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["That sounds so awesome, Owen!",
								"I'm excited for you. It sounds like you",
								"have things more figured out than I do!",
								"And if you need help writing in your games",
								"I'd love to help."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 53 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Thank you, Anna. I'm glad I have",
								"things figured out, too. If you want",
								"to write a game for me, I'd love to work",
								"with you on something."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 54 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["Really?! I'll work on it right away!",
								"After work that is... How exciting!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 55 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["I'm glad you're enthusiastic about it.",
								"I love how enthusiastic you are about",
								"things. Your eyes light up in the best",
								"way."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 56 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["Th-thank you, Owen. Th-that's sweet.",
								"I'm glad you think that."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 57 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["Of course I do.",
								"I look forward to what you come up with."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 58 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["I'll show you tomorrow!",
								"Meanwhile, we should do our jobs."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.annaTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 59 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.annaTextBox.kill();
								content = ["You're right. Back to work!",
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 60 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.owenTextBox.kill();
								content = ["...",
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 61 && storyScene == 2 && storyDay == 3 && maddieCall == false 
							&& annaMad == false && maddieNumber == true){
								this.textBox.kill();
								content = ["Wow! I'm excited!",
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}







			if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 3 
			&& maddieCall == true && annaMad == true){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 25 && storyScene == 2 && storyDay == 3
			&& maddieCall == true && annaMad == false){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 23 && storyScene == 2 && storyDay == 3
			&& maddieCall == false && annaMad == true && maddieNumber == false){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 48 && storyScene == 2 && storyDay == 3 
			&& maddieCall == false && annaMad == true && maddieNumber == false){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 28 && storyScene == 2 && storyDay == 3 
			&& maddieCall == false && annaMad == true && maddieNumber == true){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 44 && storyScene == 2 && storyDay == 3
			&& maddieCall == false && annaMad == true && maddieNumber == true){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 40 && storyScene == 2 && storyDay == 3 
			&& maddieCall == false && annaMad == false && maddieNumber == false){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 62 && storyScene == 2 && storyDay == 3 
			&& maddieCall == false && annaMad == false && maddieNumber == false){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 40 && storyScene == 2 && storyDay == 3 
			&& maddieCall == false && annaMad == false && maddieNumber == true){
				storyScene = 3;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 62 && storyScene == 2 && storyDay == 3 
			&& maddieCall == false && annaMad == false && maddieNumber == true){
				storyScene = 3;
				storyTracker = 1;
			}




			//DAY 3 SCENE 3




			if(change == true && storyTracker == 1 && storyScene == 3 && storyDay == 3){
				game.add.tween(this.storeBackground).to( { alpha: 0}, 1000, "Linear", true);
				change = false;
			}

			if(storyScene == 3 && storyTracker == 1 && this.storeBackground.alpha == 0 && storyDay == 3){
				storyTracker = storyTracker + 1;
				change = true;
			}


				//IF YOU GOT MADDIE'S NUMBER


			if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 3 && this.storeBackground.alpha == 0
			&& maddieCall == true){
				this.roomBackground.revive();
				this.storeBackground.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Alright, time to get ready for",
				"my date with Maddie."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Oh jeez, what should I wear."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Let's look up the Royal Crown Bistro",
				"and check out how fancy it is."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Wow, I think maybe I should wear",
				"a suit, but I don't have one."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I have dress shirts and nice pants.",
				"That will have to do. I don't have the",
				"time or money to go buy a suit right now."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["..."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.textBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.textBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Okay, maybe that's good?",
				"Well, it has to be."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Oh, it's 7:45 now.",
			    "I need to leave and pick her up.",
			    "Time to go."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Oh! Owen, I was just about to knock.",
				"Well, well, well... what are you",
				"all dressed up for?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I have a date tonight!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Oh? With who?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Maddie. What's in your hands?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["It's some food I made for us."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 15 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Awh, I'm sorry. I can't eat it",
				"right now."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 16 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["It's okay, I guess.",
				"What's this girl even like?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 17 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Uhm, she's really pretty, but she",
				"is really forward and blunt. She also",
				"seems to insist we go somewhere expensive."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 18 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["So, she's rude and wants you",
				"for money, but she's pretty, so",
				"that makes it okay."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 19 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Uhhh, I'm sensing some hostility.",
				"I'm just seeing what happens with her."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 20 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I don't know, Owen.",
				"She just doesn't sound very good."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 21 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				choice = 1;
				wordDelay = 0;
				this.sarahTextBox.kill();
				content = ["Even if you're right, I still agreed",
				"to a date, so I'm going to go. I'll tell",
				"you how it goes later.",
				"",
				"I think you're judging too hard.",
				"You're a little out of line."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				this.highlight.reset(0, 152);
				change = false;
			}

							if(change == true && storyTracker == 22 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								content = ["Well, I do think you should go.",
								"Just... tell me how it goes, okay?",
								"good luck tonight, Owen."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.sarahTextBox.revive();
								change = false;
							}	

							if(change == true && storyTracker == 23 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["I sure will, Sarah.",
								"Thanks for worrying about me. I'll be",
								"okay."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 24 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Okay, bye! See you later."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 25 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Bye! I need to get there fast."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}




							//CHOICE SPLIT




							if(change == true && storyTracker == 41 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								sarahApp = sarahApp - 1;
								content = ["I'm out of line?",
								"I'm just worried about you, Owen!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 42 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Well, don't worry. I can take",
								"care of myself."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 43 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["I know you can, but come on, Owen!",
								"She just isn't a good girl. I can tell."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 44 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["You can't know that. Sure, she",
								"seems a little different than most",
								"girls, but I don't mind seeing how",
								"it goes."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 45 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Fine, Owen.",
								"I still hope you have fun,",
								"and good luck."								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 46 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Thank you, Sarah.",
								"Sorry you made food for us.",
								"I'll let you know how it goes."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 47 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["It's okay. I'll save it for later.",
								"Bye, Owen."								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 48 && storyScene == 3 && storyDay == 3 && maddieCall == true){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Bye, Sarah."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}





					//IF YOU DID NOT GET MADDIE'S NUMBER



			if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 3 && this.storeBackground.alpha == 0
			&& maddieCall == false){
				this.roomBackground.revive();
				this.storeBackground.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Ahhh, feels great to be home."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I actually have a good amount of",
				"extra time tonight as well. Maybe I'll",
				"make a snack and play some games.",
				"It's been awhile since I've done that."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["What should I make though?",
				"Some breakfast food sounds good.",
				"Eggs, sausage patties, and some pancakes."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Oh, someone is at the door? This late?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Sarah! Hey, how are you?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Hey! I'm really great.",
				"I figured maybe you were hungry. I made",
				"us some food and I thought maybe we could",
				"hang out tonight."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Yeah, I'm starving! I was just about",
				"to make food. You read my mind. I'd love",
				"to hang out. What do you want to do?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I was thinking maybe we could eat",
				"and watch a movie or play some games."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["That sounds good to me.",
				"What did you make for us to eat?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Some rice with veggies and smoked",
				"sausage slices. Oh, and some cookies!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Heck yeah! You make great food.",
				"I'm looking forward to the cookies",
				"especially."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Well, you can have all the leftovers!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Yesss! Thank you.",
				"You wanna watch a movie while we eat?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 15 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Sure, that sounds fun!",
				"Let's see here... You seem to have a",
				"lot of fantasy movies."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 16 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Is that okay with you?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 17 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Yeah! I like fantasy.",
				"How about... Wasteland of Flames?",
				"Oh! Or Memories of the Sword, hehe."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 18 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Are you making fun of them?",
				"You won't be laughing when Memories",
				"of the Sword makes you cry. That's a",
				"good movie!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 19 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Alright then. Let's watch it!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 20 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Okay, let me just pop it in real quick."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 21 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["..."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.textBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 22 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.textBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Wow! This movie is pretty good!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 23 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I know! This food is pretty good too!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 24 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Which is better?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 25 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Well, I was starving, so right at",
				"this moment, I'd have to say the food is."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 26 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I'm so glad you like it!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 27 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["The rice and veggies are simple,",
				"but I cooked the sausage how my mom used",
				"to cook it. It was my favorite meal."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 28 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Well, I guess you get your cooking",
				"abilities from your mom! I think she'd",
				"be proud of you and who you've become."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 29 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Thank you, Owen. I hope she would."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 30 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I'm sure of it.",
				"So you liked the movie?"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 31 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I did actually! I'm surprised",
				"that I did, but I did."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 32 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.sarahTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I knew you would!"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 33 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				this.owenTextBox.kill();
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Oh, whatever, haha."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.sarahTextBox.revive();
				change = false;
			}

			if(change == true && storyTracker == 34 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["*Yawn*"
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 35 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["I'm actually getting pretty tired.",
				"I think I should head home soon."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}

			if(change == true && storyTracker == 36 && storyScene == 3 && storyDay == 3 && maddieCall == false){
				choice = 1;
				wordDelay = 0;
				this.sarahTextBox.kill();
				content = ["Oh, okay. Well, I had a lot of fun",
				"with you tonight!",
				"",
				"Nonsense! Just stay here tonight.",
				"There's no reason to go all the way",
				"home."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				this.owenTextBox.revive();
				this.highlight.reset(0, 152);
				change = false;
			}

							if(change == true && storyTracker == 37 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								content = ["I did too, Owen!",
								"We should do stuff like this more.",
								"I'd love to watch more of your",
								"cheesy movies with you."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.sarahTextBox.revive();
								change = false;
							}	

							if(change == true && storyTracker == 38 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["I'm glad you enjoyed it!",
								"We can get together sometime soon",
								"and watch Wasteland of Flames."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 39 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["That one sounds even more lame,",
								"but if it's like the one we watched,",
								"it should be good too."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 40 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["It's very good.",
								"Anyway, goodnight, Sarah. I'm going",
								"to go to bed soon too. I'll see you",
								"tomorrow?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 41 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["For sure! Goodnight, Owen!",
								"Bye!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 42 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Bye, Sarah! Goodnight!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 43 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 44 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.textBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Alright. I'm tired. Time for bed."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}



							//CHOICE SPLIT




							if(change == true && storyTracker == 56 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								wordDelay = 40;
								choice = 0;
								sarahApp = sarahApp + 1;
								content = ["Oh! Is it okay?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.highlight.kill();
								this.sarahTextBox.revive();
								change = false;
							}	

							if(change == true && storyTracker == 57 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Uhhh, yeah? We're best friends.",
								"You're free to stay any time you want."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 58 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Yeah! Okay! I'll stay here tonight."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 59 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Great. You can take my bed.",
								"I'll sleep on the couch."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 60 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["I can't take your bed from you, Owen.",
								"We can share a bed, it's no big deal."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 61 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["O-oh... Is it okay?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 62 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Uh, yeah? We're best friends!",
								"We can share a bed."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 63 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.sarahTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Haha, well, fair enough.",
								"Sounds good. I guess we'll get ready",
								"for bed!"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 64 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["..."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.textBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 65 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.textBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["You ready?"
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.owenTextBox.revive();
								change = false;
							}

							if(change == true && storyTracker == 66 && storyScene == 3 && storyDay == 3 && maddieCall == false){
								this.owenTextBox.kill();
								game.add.tween(this.roomBackground).to( { alpha: 1}, 1000, "Linear", true);
								content = ["Yep! Goodnight, Owen! Hehe."
								];
								text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
								nextLine();
								this.sarahTextBox.revive();
								change = false;
							}


			if(change == true && storyTracker == 26 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				storyScene = 4;
				storyTracker = 1;
			}

			if(change == true && storyTracker == 49 && storyScene == 3 && storyDay == 3 && maddieCall == true){
				storyScene = 4;
				storyTracker = 1;
			}

							


							//SCENE 4 


			if(change == true && storyTracker == 1 && storyScene == 4 && storyDay == 3){
				game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, "Linear", true);
				change = false;
			}

			if(storyScene == 4 && storyTracker == 1 && this.roomBackground.alpha == 0 && storyDay == 3){
				storyTracker = storyTracker + 1;
				change = true;
			}


				//IF YOU GOT MADDIE'S NUMBER


			if(change == true && storyTracker == 2 && storyScene == 4 && storyDay == 3 && this.roomBackground.alpha == 0
			&& maddieCall == true){
				this.restaurantBackground.revive();
				this.roomBackground.kill();
				game.add.tween(this.restaurantBackground).to( { alpha: 1}, 1000, "Linear", true);
				content = ["Okay, here is Maddie's house.",
				"I should go up and ring the doorbell."
				];
				text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
				nextLine();
				change = false;
			}



							//DAY 4 CHANGE


			
			






							









			



















































		



//INPUT MANAGEMENT





		document.onkeyup = checkKey;
		function checkKey(e) {
    		e = e || window.event;
    			if (e.keyCode == '90' && change == false && storyTracker >= 1 && menuSwitch == false && choice == 0 && pressZ == true
    			&& lineIndex === content.length && wordIndex === line.length
    				){

    				storyTracker = storyTracker + 1;
    				change = true;
    				text.kill();
    				//line = [];
					lineIndex = 0;
					wordIndex = 0;
					content = [];
       			}

       			if(e.keyCode == '90' && storyTracker == 0){   //title to first dialogue
    				storyTracker = storyTracker + 1;
    			}

    			if(e.keyCode == '90' && choice == 1 && menuSwitch == false
    			&& lineIndex === content.length && wordIndex === line.length
    				){
    				change = true;
    				choice = 0;
    				text.kill();
    				line = [];
					lineIndex = 0;
					wordIndex = 0;
    				storyTracker = storyTracker + 1;
    			}

    			if(e.keyCode == '90' && choice == 2 && menuSwitch == false
    			&& lineIndex === content.length && wordIndex === line.length
    				){
    				change = true;
    				choice = 0;
    				text.kill();
    				line = [];
					lineIndex = 0;
					wordIndex = 0;
    				storyTracker = storyTracker + 20;
    			}

    			

    			if(e.keyCode == '32' && storyTracker >= 1 && menuSwitch == false){
    				menuSwitch = true;
    				console.log(menuSwitch);
    				console.log(storyDay);
    			}

    			else if(e.keyCode == '32' && storyTracker >= 1 && menuSwitch == true){
    				menuSwitch = false;
    				console.log(menuSwitch);
      			}

      			




      			if(e.keyCode == '38' && choice == 1 && menuSwitch == false){    //up arrow
      				mainState.highlight.y = 243;
      				choice = 2;
      			}

      			else if(e.keyCode == '38' && choice == 2 && menuSwitch == false){
      				mainState.highlight.y = 152;
      				choice = 1;
      			}


      			else if(e.keyCode == '40' && choice == 1 && menuSwitch == false){	//down arrow
      				mainState.highlight.y = 243;
      				choice = 2;
      			}

      			else if(e.keyCode == '40' && choice == 2 && menuSwitch == false){
      				mainState.highlight.y = 152;
      				choice = 1;
      			}      			
       	}
       
       	console.log(storyTracker);



        
        		
    	
    	

    	function nextLine() {
    		if (lineIndex === content.length){
        		return;    //  We're finished

    		}



    		line = content[lineIndex].split(' ');    //  Split the current line on spaces, so one word per array element
    		wordIndex = 0;    //  Reset the word index to zero (the first word in the line)
    		game.time.events.repeat(wordDelay, line.length, nextWord, this);    //  Call the 'nextWord' function once for each word in the line (line.length)
    		lineIndex++;   //  Advance to the next line

		}

		

		function nextWord() {
    		text.text = text.text.concat(line[wordIndex] + " ");    //  Add the next word onto the text string, followed by a space
    		wordIndex++;    //  Advance the word index to the next word in the line
    			if (wordIndex === line.length){    //  Last word?
        			text.text = text.text.concat("\n");    //  Add a carriage return
        			game.time.events.add(lineDelay, nextLine, this);    //  Get the next line after the lineDelay amount of ms has elapsed
    			}
		}		
	}
};

game.state.add('mainState', mainState);

game.state.start('mainState');