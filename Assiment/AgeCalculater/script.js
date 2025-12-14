function calculate() {
  const dobInput = document.getElementById("yourdob").value;
  const currentInput = document.getElementById("currentdob").value;

  if (!dobInput || !currentInput) {
    document.getElementById("countage").innerText = "Please Enter the DOB";
    return;
  }

  const dob = new Date(dobInput);
  const currentDate = new Date(currentInput);

  let age = currentDate.getFullYear() - dob.getFullYear();
  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ){
    age--;
  }

  document.getElementById("countage").innerText = `Your age is ${age} Years`;
}
