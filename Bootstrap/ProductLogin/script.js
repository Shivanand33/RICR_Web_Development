function SINGIN() {
    console.log("Clicked");

    const Pleaseinput = document.getElementById("Pleaseinput").value;
    const password = document.getElementById("password").value;

    console.log(Pleaseinput);
    console.log(password);

    alert("SINGIN done")
     document.getElementById("Pleaseinput").value="";
     document.getElementById("password").value="";


}