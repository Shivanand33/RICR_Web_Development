function calculate() {
  let unit = document.getElementById("unit").value.trim();

  if (isNaN(unit) || unit <= 0) {
    alert("Please enter valid electry bill");
    return;
  }
  let u1unit = 0;
  let u2unit = 0;
  let u3unit = 0;
  let u4unit = 0;

  if (unit <= 50) {
    u1unit = unit;
  } else if (unit <= 200) {
    u1unit = 50;
    u2unit = unit - 50;
  } else if (unit <= 450) {
    u1unit = 50;
    u2unit = 150;
    u3unit = unit - 200;
  } else {
    u1unit = 50;
    u2unit = 150;
    u3unit = 250;
    u4unit = unit - 450;
  }
  let u1amt = u1unit * 0.5;
  let u2amt = u2unit * 0.75;
  let u3amt = u3unit * 1.2;
  let u4amt = u4unit * 1.5;

  let subtotal = u1amt + u2amt + u3amt + u4amt;
  let surcharge = subtotal * 0.2;
  let total = surcharge + subtotal;

  document.getElementById("u1").innerText = "₹" + u1amt.toFixed(2);
  document.getElementById("u2").innerText = "₹" + u2amt.toFixed(2);
  document.getElementById("u3").innerText = "₹" + u3amt.toFixed(2);
  document.getElementById("u4").innerText = "₹" + u4amt.toFixed(2);

  document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
  document.getElementById("surcharge").innerText = "₹" + surcharge.toFixed(2);
  document.getElementById("total").innerText = "₹" + total.toFixed(2);
}

function clearData() {
  let unit = (document.getElementById("unit").value = "");

  document.getElementById("u1").innerText = 0.0;
  document.getElementById("u2").innerText = 0.0;
  document.getElementById("u3").innerText = "₹" + 0.0;
  document.getElementById("u4").innerText = "₹" + 0.0;

  document.getElementById("subtotal").innerText = "₹" + 0.0;
  document.getElementById("surcharge").innerText = "₹" + 0.0;
  document.getElementById("total").innerText = "₹" + 0.0;
}
