let ticketPrice = 150;
let selectedMovie = "";

// Show only one screen at a time
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.style.display = "none");
  document.getElementById(screenId).style.display = "block";
}

// When movie is clicked
function bookMovie(name) {
  selectedMovie = name;
  document.getElementById("movieName").innerText = "Selected Movie: " + selectedMovie;
  document.getElementById("people").value = 1;
  document.getElementById("amount").innerText = ticketPrice;
  showScreen("booking");
}

// Calculate total amount
function calculateAmount() {
  let people = document.getElementById("people").value;
  let amount = people * ticketPrice;
  document.getElementById("amount").innerText = amount;
}

// Go to payment
function goToPayment() {
  showScreen("payment");
}

// Complete booking
function completeBooking() {
  alert("Payment Successful!");
  showScreen("success");
  return false; // prevent form refresh
}

// Go back to home
function goHome() {
  showScreen("home");
}
