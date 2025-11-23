function On(){
    document.getElementById("bulb").style.backgroundColor = "yellow";

}
function off(){
    document.getElementById("bulb").style.backgroundColor = "white";
    
}
function blue(){
    document.getElementById("bulb").style.backgroundColor = "blue";
    
}
function black(){
    document.getElementById("bulb").style.backgroundColor = "black";
    
}
 const usercolor= document.getElementById("color");
//  console.log("usercolor");
 usercolor.addEventListener("change",() => changeBulbcolor(usercolor.value));

 function changeBulbcolor(color){
       document.getElementById("bulb").style.backgroundColor =color;
    
 }


 function SB_control(){
    const btn = document.getElementById("SB_btn");
    // document.getElementById("SB_btn")
    if(btn.innerText==="on"){
          document.getElementById("SB_btn").innerText = "off";
        document.getElementById("smartbulb").classList.add("on");

    }else{
        document.getElementById("SB_btn").innerText = "on";
        document.getElementById("smartbulb").classList.remove("on");
    }
 }

 function SB_control2(){
     document.getElementById("smartbulb").classList.toggle("on");
 }