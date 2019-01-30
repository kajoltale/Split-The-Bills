//Calculate Bill
function calculateBill() {
  var billAmt = document.getElementById("billamt").value;
  var currency = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  var discription = document.getElementById("discription").value;

  //validate input
  if (billAmt === "" || currency == 0 || discription === "") {
    alert("Please enter values");
    return;
  }
  //Check to see if number of people is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate bill per people
  var total = billAmt / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the bill
  document.getElementById("billPerPerson").style.display = "block";
  document.getElementById("currency").innerHTML = currency;
  document.getElementById("bill").innerHTML = total;

}

//Hide the bill amount on load
document.getElementById("billPerPerson").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateBill();

};
