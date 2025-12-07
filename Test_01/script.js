function course(){
     console.log("click course");
     
}

function submit(){
 console.log("submit");
 
 const fullName = document.getElementById("fullName").value;
 const branch = document.getElementById("branch").value;
 const number = document.getElementById("number").value;
 const collage = document.getElementById("collage").value;
 const email = document.getElementById("email").value;
 const coursename = document.getElementById("courasename").value;
  
 console.log(fullName);
 console.log(branch);
 console.log(number);
 console.log(collage);
 console.log(email);
 console.log(coursename);

 alert("submit done")
console.log("submit done"); 

 document.getElementById("fullName").value="";
  document.getElementById("branch").value="";
  document.getElementById("number").value="";
  document.getElementById("collage").value="";
 document.getElementById("email").value="";
 document.getElementById("courasename").value="";
  
 
 
}