function Submit() {
  let guess = document.getElementById("guess").value.trim();

  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (guess < 1 || guess > 10) {
    alert("Please enter a number!");
  }
  if (guess == randomNumber) {
    alert("Congratulation you ar win 🏆🥇");
  } else if (guess <= 0) {
    alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  } else if (guess > 10) {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } else {
    alert("Soryy Bro 😒  randomNumber is  = " + randomNumber);
  }
}
