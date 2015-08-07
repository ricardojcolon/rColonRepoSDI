//Ricardo Colon SDI Section 01 August 6 2015


//String Variable
var myNickname;
myNickname = "mcGiver";
//String Variables are text variables

//First Interaction With User
alert("My nickname is:" + myNickname);
alert("Lets keep things informal");

//First Request to User
var myUser_nn = prompt("What is your nickname?");
alert("Hello, " + myUser_nn);
alert("The reason I have that nickname is because of how my friends percieve me");
alert("So for fun, I created a McGiver IQ Test");


//Number Variables

var linguistic_iq;
linguistic_iq = 200;

var math_iq;
math_iq = 400;

var explosives_iq;
explosives_iq = 400;
//Number variables come in whole and in fraction numbers

//Boolean variables

var correct;	
positive = true;

var incorrect;	
negative = false;
//These yes or no types of variables exist because computers dont understand maybe.


//Second Interaction With User

alert("If my total IQ is 1000");
alert("And the total IQ is the sum of 3 Areas");
alert("Math IQ, Language IQ, And Explosives IQ");
alert("If my Math IQ equals my Explosives IQ and my Language IQ is quarter the value of the sum of the other two");
var myUser_answer = prompt("What is the value of my Language IQ?");
alert("You answered, " + myUser_answer);

//Basic omparison learned after watching videos from Intro to Programming Assignment

if ( myUser_answer == linguistic_iq ) {
   alert("Your answer is, " + correct);
}

if ( myUser_answer < linguistic_iq ) {
   alert("No. Next time go up some more.");
   alert("Your answer is, " + incorrect);
}

if ( myUser_answer > linguistic_iq ) {
   alert("No. Next time go down some more.");
   alert("Your answer is, " + incorrect);
}
