function State() {
  const state = document.getElementById("State").value.trim().toLowerCase();

  // if (!state) {
  //   alert("State Empty");
  //   return;
  // }

  // Remove old flag
  let old = document.getElementById("flag");
  // if (old) old.remove();

  // Create new flag
  const flag = document.createElement("i");
  flag.id = "flag";
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3");
  flag.style.position = "absolute";

   
 if (state === "uttar pradesh") {
    flag.style.top = "450px";
    flag.style.left = "620px";
  }

  if (state === "madhya pradesh") {
    flag.style.top = "600px";
    flag.style.left = "540px";
  }

  if (state === "delhi") {
    flag.style.top = "390px";   //
    flag.style.left = "550px";
  }

 if (state === "bihar") {
    flag.style.top = "500px";
    flag.style.left = "880px"; //
  }
   

   

  if (state === "rajasthan") {
    flag.style.top = "430px";
    flag.style.left = "420px";
  }
if (state === "andhra pradesh") {
    flag.style.top = "930px";
    flag.style.left = "600px";
  }
   
  if (state === "arunachal pradesh") {
    flag.style.top = "390px";
    flag.style.left = "1140px";
  }
  if (state === "assam") {
    flag.style.top = "480px";
    flag.style.left = "1080px";
  }
  if (state === "chhattisgarh") {
    flag.style.top = "700px";
    flag.style.left = "690px";
  }

  if (state === "goa") {
    flag.style.top = "904px";
    flag.style.left = "428px";
  }
 if (state === "gujarat") {
    flag.style.top = "600px";
    flag.style.left = "380px";
  }
 
  if (state === "haryana") {
    flag.style.top = "370px";
    flag.style.left = "530px";
  }

  if (state === "himachal pradesh") {
    flag.style.top = "280px"; //
    flag.style.left = "570px";
  }


  if (state === "jharkhand") {
    flag.style.top = "600px";
    flag.style.left = "800px";
  }
  if (state === "karnataka") {
    flag.style.top = "910px";
    flag.style.left = "470px";
  }
  if (state === "kerala") {
    flag.style.top = "1130px";
    flag.style.left = "510px";
  }
 if (state === "maharashtra") {
    flag.style.top = "760px";
    flag.style.left = "520px";
  }

if (state === "manipur") {
    flag.style.top = "550px";
    flag.style.left = "1100px";
  }
  if (state === "mizoram") {
    flag.style.top = "580px";
    flag.style.left = "1080px";
  }

  if (state === "meghalaya") {
    flag.style.top = "520px";
    flag.style.left = "1000px";
  }
 
  if (state === "nagaland") {
    flag.style.top = "500px";
    flag.style.left = "1120px";
  }
if (state === "odisha") {
    flag.style.top = "750px";
    flag.style.left = "750px";
  }

  if (state === "punjab") {
    flag.style.top = "300px";//
    flag.style.left = "510px";
  }
   if (state === "rajasthan") {
    flag.style.top = "420px";
    flag.style.left = "650px"; //
  }

   if (state === "Sikkim") {
    flag.style.top = "560px";
    flag.style.left = "700px";
  }

   if (state === "tamilnadu") {
    flag.style.top = "560px";
    flag.style.left = "700px";
  }

 if (state === "telangana") {
    flag.style.top = "560px";
    flag.style.left = "700px";
  }
   if (state === "tripura") {
    flag.style.top = "560px";
    flag.style.left = "700px";
  }
  if (state === "uttarakhand") {
    flag.style.top = "560px";
    flag.style.left = "700px";
  }
  if (state === "west bengal") {
    flag.style.top = "560px";
    flag.style.left = "700px";
  }
   
  if (state === "jammu kashmir") {
    flag.style.top = "600px";
    flag.style.left = "540px";
  }

   

   
 
   
  document.getElementById("Map").appendChild(flag);
}

 
  
function Clear(){
  window.location.reload();
}
