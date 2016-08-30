//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

var guests
var donuts

guests = prompt("How many guests?")
donuts = prompt("How many donuts?")

guests = parseInt(guests)
donuts = parseInt(donuts)

function enoughDonuts(guests, donuts) {
  return guests >= donuts ?
  "There are enough donuts" :
  "There are not enough donuts"
}
