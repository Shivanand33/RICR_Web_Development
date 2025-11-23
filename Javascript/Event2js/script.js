   const usermain= document.getElementById("background");
   const userheading= document.getElementById("h");
   const userp= document.getElementById("p");
    
   const userparagraph= document.getElementById("paragraph");
    usermain.addEventListener("change",()=>changename (usermain.value));
    function changename(color){
        document.getElementById("main").style.backgroundColor=color;

      
    }

        
    userheading.addEventListener("change",()=>changeheading (userheading.value));
    function changeheading (color){
        document.getElementById("heading").style.color=color;

      
    }

     userp.addEventListener("change",()=>changep(userp.value));
    function changep (color){
        document.getElementById("paragraph").style.color=color;

      
    }
  
  