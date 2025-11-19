function Login(params) {
    console.log("Login Button Click");

    const em = document.getElementById("email").value;
    const ps = document.getElementById("Cpassword").value;
    console.log(em, ps);

    alert("Login Done");

    document.getElementById("email").value = "";
    document.getElementById("Cpassword").value = "";
}


function registation() {
    console.log("Registation Button clicked")
}

function Registation(params) {
    console.reg("Registation Button Click");

    const em = document.getElementById("Name").value;
    const ps = document.getElementById("Creatpassword").value;
    const cs = document.getElementById("Confrimpassword").value;
    console.log(em, ps, cs);

    alert("Login Done");

    document.getElementById("name").value = "";
    document.getElementById("Creatpassword").value = "";
    document.getElementById("Confrimpassword").value = "";
}
