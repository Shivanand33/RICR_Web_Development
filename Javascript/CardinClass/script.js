function Submit(){
    const name = document.getElementById("FullName").value.trim();
     const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
       const dob= document.getElementById("dob").value.trim();

if(!/^[A-Za-z ]+$/.test(name)){
 alert("Wrong Name");
 return;
 
}
if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)) {
    alert("Wrong Email")
    return;
}
if(!/^[6-9]\d{9}/.test(mobile)){
    alert("Wrong Number")
    return;
} 

const currentdate = new Date.toString();
console.log(currentdate);

 
 

       
       const data = {
        FullName:name,
        email:email,
        mobile:mobile,
        dob:dob,


       };
       
   
console.log(data);

}