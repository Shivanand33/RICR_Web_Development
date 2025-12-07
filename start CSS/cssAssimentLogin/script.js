function Login(){
    console.log("login Done");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const me = document.getElementById("me").value;

    console.log(email);
    console.log(password);
    console.log(me);
    
    

    alert("login done")
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("me").value="";
    
    
}
function Cancel(){
    window.location.reload();
}