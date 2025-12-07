function Ragister(params){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const creat = document.getElementById("Cpassword").value;
    const finel = document.getElementById("password").value
     const me = document.getElementById("me").value

    console.log(name);
    console.log(email);
    console.log(creat);
    console.log(finel);
     console.log(me);
    
    alert("Ragister done")
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("creat").value="";
    document.getElementById("finel").value="";
     document.getElementById("me").value="";
     
    
}