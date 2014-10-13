/*  
	1. Addition 
	There are two different fields: #additionInput1 and #additionInput2. 
	We've already written the functionality for handling when the user 
	clicks on the button (called #additionButton). 
	Your job is to write code that takes the two fields, 
	and alerts the user what the sum is.
*/ 

function addition() {
	alert(Number(document.getElementById('additionInput1').value) + Number(document.getElementById('additionInput2').value));
}

/* --------------------------------------------------------- */

/*  
	2. Vowel Counter 
	You have one input field: #vowelInput. 
	Like question 1, we've already written the functionality for handling 
	when the user clicks on the button (this time, called #vowelButton). 
	This time, you will replace the text within #vowelInput with the following string:

		"That sentence has X vowels in it."

	Vowels are the characters a, e, i, o, and u. If there is only 1 vowel in the sentence, 
	then the text should say "That sentence has 1 vowel in it." - 
	note the lack of plurality on the word vowel.
*/ 

function vowelCounter() {
	var vowels = 0;
	var idx;
	var phrase = document.getElementById('vowelInput').value;
	for (idx = 0; idx < phrase.length; idx++) {
		if (phrase.charAt(idx) == 'a' || phrase.charAt(idx) == 'e' || phrase.charAt(idx) == 'i' || phrase.charAt(idx) == 'o' || phrase.charAt(idx) == 'u') {
			vowels++;
		} 
	}
	if (vowels == 0) {
		alert('That sentence has no vowels in it.');
	} else if (vowels == 1) {
		alert('That sentence has 1 vowel in it.');
	} else {
		alert('That sentence has ' + vowels +' vowels in it.');
	}
}

/* --------------------------------------------------------- */


/*  
	3. Guess the Number

	This one's going to be a bit more challenging than the past two, so be careful.
	You will need to write up the functionality for a simple "guess the number" game.
	
	There are four parts to the game:
		1. A guess field (#numberGuess)
		2. A result paragraph (#numberResult)
		3. A submit button (#numberSubmit)
		4. A reset button (#numberReset)

	When a player hits the reset button, a random number between 1 and 100 should be generated.
	When a player hits the submit button, the system should identify their guess within the guessing field.
	If it's higher than the random number, print "Lower" to the result paragraph.
	If it's lower than the random number, print "Higher" to the result paragraph.
	If it's exactly the random number, signify that they've won.

	We've written the handlers for #numberSubmit and #numberReset, but it's your job to
	write the functionality. You may need to define a variable or two.

	For extra functionality, track the number of guesses the user has made, and print that as part of the result.
*/ 

function submit() {
	var guess = Number(document.getElementById('numberGuess').value);
	var msgElem = document.getElementById('numberResult');
	if (guess < num) {
		msgElem.innerHTML = 'Higher.';
		guesses++;
	} else if (guess > num) {
		msgElem.innerHTML = 'Lower.';
		guesses++;
	} else if (guess == num) {
		guesses++;
		msgElem.innerHTML = 'CORRECT! You got it in '+guesses+' guesses!';
	}
}

function reset() {
	num = Math.floor(Math.random()*101);
	guesses = 0;
}


/* click handlers */
document.addEventListener('DOMContentLoaded', function() {
	reset();
	document.getElementById('additionButton').addEventListener('click', addition);
	document.getElementById('vowelButton').addEventListener('click', vowelCounter);
	document.getElementById('numberSubmit').addEventListener('click', submit);
	document.getElementById('numberReset').addEventListener('click', reset);
});

