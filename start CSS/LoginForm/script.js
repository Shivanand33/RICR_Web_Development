 function Submit(){
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    console.log(userName, password);

    alert("Login Done")
    document.getElementById("userName").value="";
    document.getElementById("password").value="";
    
 }
 function Cancel(){
    window.location.reload();
    
 }