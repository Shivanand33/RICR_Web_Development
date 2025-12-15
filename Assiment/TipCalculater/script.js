function TipAmount() {
  let bill = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let Person = document.getElementById("total").value;
  let output = document.getElementById("tipAmount");

  if (bill === "" || service === "" || Person === "" || Person<= 0) {
    output.innerHTML = "Please fill all details";
    output.style.color = "red";
    return;
  }

  bill = Number(bill);
  people = Number(Person);

  let tip = bill * service;
  let totalTipPerPerson = (tip / people).toFixed(2);

  output.style.color = "green";
  output.innerHTML = `Tip per person: ₹${totalTipPerPerson}`;
}
