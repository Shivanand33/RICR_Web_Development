

function Sumbit() {
    console.log("Clicked");
    const Personename = document.getElementById("Personename").value;
    const Contactnumber = document.getElementById("Contactnumber").value;
    const email = document.getElementById("email").value;
    const Qualification = document.getElementById("Qualification").value;
    const Collagname = document.getElementById("Collagname").value;
    const year = document.getElementById("year").value;
    const Branch = document.getElementById("Branch").value;
    // const box = document.getElementById("box").value;
    const Information = document.getElementById("Information").value;
    const Excusive = document.getElementById("Excusive").value;
    
     let Intrest =[];
    document
    .querySelectorAll("input[name='tik']:checked")
    .forEach((element) => {
        Intrest.push(element.value);
    });

    console.log("Personename:" + Personename);
    console.log("Contactnumber:" + Contactnumber);
    console.log("email:" + email);
    console.log("Qualification:" + Qualification);
    console.log("Collagname:" + Collagname);
    console.log("year:" + year);
    console.log("Branch:" + Branch);
    console.log("box:" +  Intrest.join(","));
    console.log("Information:" + Information);
    console.log("Excusive:" + Excusive);
     
    


      alert("sumbit done")
 
  
}