// Gross Sales Percentage Calculator and Quizz About Gross Sales Percentage


//Gross Sales Calculator With Explanation of the Term
var questions = 2;
var questionsLeft = '[' + questions + 'questions left]';
console.log (questionsLeft);
var grossProfit = prompt('Please type your gross profit' + questionsLeft);
questions -= 1;
var questionsLeft = '[' + questions + 'questions left]';
console.log (questionsLeft);
var costOfGoodsSold = prompt('Please type the cost of goods sold' + questionsLeft);
alert('All done. Ready to find out your gross margin percentage?');
console.log (costOfGoodsSold);


var sentence = "Your gross margin percentage is your gross profit,  " + grossProfit;
sentence += ' minus the cost of goods sold, ' + costOfGoodsSold;
sentence += ' divided by your gross profit ' + grossProfit + ' times 100.';
alert(sentence);
document.write(sentence);
console.log (sentence);
var grossSalesPercentage = (grossProfit - costOfGoodsSold);
grossSalesPercentage /= grossProfit;
grossSalesPercentage *= 100;
alert("Your gross sales percentage is: " + grossSalesPercentage + " percent.");
document.write(grossSalesPercentage);
alert("Make sure you compare your gross sales percentage to the average in your particular industry. ");
console.log (grossSalesPercentage);

var numOfSales = prompt('Please type your number of sales');
if (grossProfit < costOfGoodsSold && numOfSales > 1) {
	document.write("You should consider going into business!");
} else {
	document.write("Numbers are bad. Do not go into business")
}


//Quiz to Identify Comprehension of The Subject


//quiz begins, no answers correct

var correct = 0;


// asking questions
var answer1 = prompt("What is the first value that you will need to write on the equation to determine gross Sales Percentage?");
if ( answer1.toUpperCase() === 'GROSS PROFIT') {
	correct += 1;
}
var answer2 = prompt("What do you need to substract from the gross profit to determine your net profit?");
if ( answer2.toUpperCase() === 'COST OF GOODS SOLD') {
	correct += 1;
}
var answer3 = prompt("You divide your net profit by what value to determine your gross profit margin?");
if ( answer1.toUpperCase() === 'GROSS PROFIT') {
	correct += 1;
}
var answer4 = prompt("Are you supposed to compare your business gross profit margin percentage to the one in your industry YES or NO?");
if ( answer1.toUpperCase() === 'YES') {
	correct += 1;
}

// output results

document.write("You got " + correct + " out of 4 questions correct.");

//Award Feedback

if ( correct = 4 ) {
	document.write("You earned a golden eagle!");
} else if ( correct >= 2 ) {
	document.write("You earned a silver eagle!");
} else {
	document.write("No eagle for you! That is correct. You need to study.")
}
console.log (correct);