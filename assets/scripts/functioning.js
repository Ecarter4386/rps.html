

// var language = prompt("Which language can you say 'hello' is a language other than English?");

// var theGreeting = prompt("How do you greet others in that language?");




/*

var myName = prompt("What is your name?");

function secondLang(){
	var lang = prompt("Do you speak any language besides English?");
	if(lang == "no"){
		return "English";
		} else if(lang == "nope"){
			return "English";

	} else {
			var otherLang = prompt("What is it?");
			return otherLang;
		
	}
}

var newLang = secondLang();
var theGreeting = null;	

	if(newLang == "English"){
		theGreeting = "'Sup?";
	}else{
		theGreeting = prompt("How do you greet other in that language?");
	}

function greeting(name, lang, hello){
	console.log(hello + ", " + name + 
		". It's nice to speak with someone who knows " + lang + ".");
	return hello;
}


var newGreeting = greeting(myName, language, theGreeting);

console.log(newGreeting);
console.log(newGreeting);
console.log(newGreeting);

*/
// document.getElementById("div1").innerHTML = "Something changed here...";

// document.getElementById("div2").className = "nice-div";

// document.getElementById("div3").id = "cool-id";

var winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

document.getElementById('generate').onclick = function() {
	var userChoice = document.getElementById('userInput').value.toLowerCase();
	var computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

	compare(userChoice, computerChoice);
}

function compare(choice1, choice2) {
  document.getElementById('compOutput').innerText = choice2;

  if (choice1 === choice2) {
    result = 'The result is a tie!';
  } else if (winConditions[choice1] === choice2) {
  	result = 'Player wins!';
  } else {
  	result = 'Computer wins';
  }
  
  document.getElementById('winOutput').value = result;
}







