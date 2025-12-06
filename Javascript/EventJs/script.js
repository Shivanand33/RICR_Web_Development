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



 document.getElementById("c1").addEventListener("mouseenter",() =>{
    fillColor("skyblue");

 })
  document.getElementById("c1").addEventListener("mouseleave",() =>{
    fillColor("white");

 })
 document.getElementById("c2").addEventListener("mouseenter",() =>{
    fillColor("black");

 })
 document.getElementById("c2").addEventListener("mouseleave",() =>{
    fillColor("white");
 })
 document.getElementById("c3").addEventListener("mouseenter",() =>{
    fillColor("blue");

 })
 document.getElementById("c3").addEventListener("mouseleave",() =>{
    fillColor("white");
 })
 document.getElementById("c4").addEventListener("mouseenter",() =>{
    fillColor("red");

 })
 document.getElementById("c4").addEventListener("mouseleave",() =>{
    fillColor("white");
 })
 document.getElementById("c5").addEventListener("mouseenter",() =>{
    fillColor("green");

 })
 document.getElementById("c5").addEventListener("mouseleave",() =>{
    fillColor("white");
 })
 document.getElementById("c6").addEventListener("mouseenter",() =>{
    fillColor("orange");

 })
 document.getElementById("c6").addEventListener("mouseleave",() =>{
    fillColor("white");
 })
 document.getElementById("c7").addEventListener("mouseenter",() =>{
    fillColor("maroon");

 
 })
 document.getElementById("c7").addEventListener("mouseleave",() =>{
    fillColor("white");

 
 })

 function fillColor(Color){
    console.log(Color);
    document.getElementById("mainbulb").style.backgroundColor = Color;
    
}