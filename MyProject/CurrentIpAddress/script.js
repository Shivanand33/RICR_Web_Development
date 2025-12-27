async function GetIp() {
  
    const click = await fetch("https://api.ipify.org?format=json");
    const data = await click.json();
 
    document.getElementById("ip").innerText=data.ip;
     
}

function Reset(){
    window.location.reload();
}

 