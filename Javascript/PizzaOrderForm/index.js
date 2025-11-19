function Sumbit() {
    console.log("Clicked");

    const Firstname = document.getElementById("Firstname").value;
    const Lastname = document.getElementById("Lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const Dob = document.getElementById("Dob").value;
    const pizzatype = document.getElementById("pizzatype").value;
    const credit = document.getElementById("credit").value;
    const pin = document.getElementById("pin").value;
    const Address = document.getElementById("Address").value;

    console.log(Firstname);
    console.log( Lastname);
    console.log(email);
    console.log(number);
    console.log(Dob);
    console.log(pizzatype);
    console.log(credit);
    console.log(pin);
    console.log(Address);

    alert("Sumbit done")

     document.getElementById("Firstname").value="";
    document.getElementById("Lastname").value ="";
    document.getElementById("email").value ="";
    document.getElementById("number").value ="";
    document.getElementById("Dob").value ="";
   document.getElementById("pizzatype").value ="";
   document.getElementById("credit").value ="";
   document.getElementById("pin").value ="";
  document.getElementById("Address").value ="";
    
}